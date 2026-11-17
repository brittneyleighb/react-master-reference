import { test, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import { act, createElement as h, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  OnlineEvent,
  SearchResults,
  OptimisticMessages,
} from "../examples/react-hooks.mjs";

let dom;
let container;
let root;

beforeEach(() => {
  dom = new JSDOM("<!DOCTYPE html><html><body><div id='root'></div></body></html>", {
    url: "https://example.test",
  });
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.FormData = dom.window.FormData;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  container = document.getElementById("root");
  root = createRoot(container);
});

afterEach(async () => {
  await act(async () => root.unmount());
  dom.window.close();
  delete globalThis.window;
  delete globalThis.document;
  delete globalThis.FormData;
  delete globalThis.IS_REACT_ACT_ENVIRONMENT;
});

test("StrictMode replays effect setup and cleanup, then cleans on unmount", async () => {
  let subscriptions = 0;
  let cleanups = 0;
  const subscribe = () => {
    ++subscriptions;
    return () => { ++cleanups; };
  };

  await act(async () => {
    root.render(h(StrictMode, null, h(OnlineEvent, { subscribe })));
  });
  assert.equal(subscriptions, 2);
  assert.equal(cleanups, 1);

  await act(async () => root.unmount());
  assert.equal(cleanups, 2);
});

test("search aborts superseded requests and ignores their stale results", async () => {
  const requests = [];
  const fetchSearch = (url, options) => new Promise((resolve) => {
    requests.push({ url, signal: options.signal, resolve });
  });

  await act(async () => {
    root.render(h(SearchResults, { query: "Paris", fetchSearch }));
  });
  assert.equal(requests.length, 1);
  assert.match(requests[0].url, /Paris/);
  assert.match(container.textContent, /Loading/);

  await act(async () => {
    root.render(h(SearchResults, { query: "Tokyo", fetchSearch }));
  });
  assert.equal(requests.length, 2);
  assert.equal(requests[0].signal.aborted, true);
  assert.equal(requests[1].signal.aborted, false);

  await act(async () => {
    requests[1].resolve({ ok: true, json: async () => ({ label: "Tokyo: 24°C" }) });
  });
  assert.match(container.textContent, /Tokyo: 24°C/);

  await act(async () => {
    requests[0].resolve({ ok: true, json: async () => ({ label: "Stale Paris" }) });
  });
  assert.doesNotMatch(container.textContent, /Stale Paris/);
});

test("search renders HTTP failures and aborts pending work on unmount", async () => {
  const signals = [];
  const fetchSearch = async (_url, { signal }) => {
    signals.push(signal);
    return { ok: false, status: 503 };
  };
  await act(async () => root.render(h(SearchResults, { query: "Paris", fetchSearch })));
  assert.equal(container.querySelector("[role='alert']")?.textContent,
    "Request failed with HTTP 503");

  const neverFinishes = (_url, { signal }) => {
    signals.push(signal);
    return new Promise(() => {});
  };
  await act(async () => root.render(h(SearchResults, {
    query: "Berlin", fetchSearch: neverFinishes,
  })));
  assert.match(container.textContent, /Loading/);
  await act(async () => root.unmount());
  assert.equal(signals[signals.length - 1].aborted, true);
});

test("optimistic message Action commits successful responses to source state", async () => {
  const save = async (text) => ({ text: text.toUpperCase() });
  await act(async () => root.render(h(OptimisticMessages, { sendMessage: save })));

  const input = container.querySelector("input");
  const form = container.querySelector("form");
  await act(async () => {
    input.value = "hello";
    form.dispatchEvent(new dom.window.Event("submit", { bubbles: true, cancelable: true }));
  });
  assert.match(container.textContent, /HELLO/);
  assert.doesNotMatch(container.textContent, /sending/);
});

test("failed message Action surfaces an error without committing optimistic state", async () => {
  const save = async () => { throw new Error("offline"); };
  await act(async () => root.render(h(OptimisticMessages, { sendMessage: save })));
  await act(async () => {
    container.querySelector("input").value = "hello";
    container.querySelector("form").dispatchEvent(
      new dom.window.Event("submit", { bubbles: true, cancelable: true }),
    );
  });
  assert.equal(container.querySelector("[role='alert']")?.textContent,
    "Message could not be saved.");
  assert.equal(container.querySelectorAll("li").length, 0);
});
