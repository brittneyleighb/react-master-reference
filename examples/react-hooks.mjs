/**
 * Self-contained React 19 examples using createElement so Node can execute
 * them without a JSX build step. In an app, JSX is easier to read.
 *
 * These are CLIENT components, not Server Components.
 */
import {
  createElement as h,
  startTransition,
  useEffect,
  useOptimistic,
  useState,
} from "react";

/** External subscription example: setup must always have matching cleanup. */
export function OnlineEvent({ subscribe }) {
  const [status, setStatus] = useState("unknown");

  useEffect(() => subscribe(setStatus), [subscribe]);

  return h("output", { "data-testid": "status" }, status);
}

/**
 * Client-side fetch with request cancellation. Framework data loaders often
 * handle cache, deduplication, and SSR better than ad-hoc fetch-in-Effect.
 *
 * fetchSearch is injected so the tests cannot make real network requests.
 */
export function SearchResults({ query, fetchSearch }) {
  const [result, setResult] = useState({
    status: "idle",
    label: "",
    error: "",
  });

  useEffect(() => {
    if (!query.trim()) {
      setResult({ status: "idle", label: "", error: "" });
      return;
    }

    const controller = new AbortController();
    setResult({ status: "loading", label: "", error: "" });

    async function load() {
      try {
        const url = "/api/search?q=" + encodeURIComponent(query);
        const response = await fetchSearch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("Request failed with HTTP " + response.status);
        }
        const data = await response.json();
        if (!controller.signal.aborted) {
          setResult({ status: "ready", label: String(data.label), error: "" });
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          setResult({
            status: "error",
            label: "",
            error: error instanceof Error ? error.message : "Request failed",
          });
        }
      }
    }
    void load();

    return () => controller.abort();
  }, [query, fetchSearch]);

  if (result.status === "loading") {
    return h("output", { role: "status" }, "Loading…");
  }
  if (result.status === "error") {
    return h("p", { role: "alert" }, result.error);
  }
  if (result.status === "ready") {
    return h("p", { "data-testid": "result" }, result.label);
  }
  return h("p", {}, "Enter a search.");
}

/**
 * Optimistic state lasts only for an Action's lifetime. After success, update
 * the authoritative state. After failure, show a message; React rolls back
 * the temporary optimistic item when the Action finishes.
 */
export function OptimisticMessages({ sendMessage }) {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const [optimisticMessages, addOptimistic] = useOptimistic(
    messages,
    (current, text) => [...current, { text, pending: true }],
  );

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const text = String(formData.get("message") ?? "").trim();
    if (!text) return;
    setError("");

    startTransition(async () => {
      addOptimistic(text);
      try {
        const saved = await sendMessage(text);
        setMessages((current) => [...current, { text: saved.text, pending: false }]);
      } catch {
        setError("Message could not be saved.");
      }
    });
  }

  return h(
    "section",
    {},
    h(
      "form",
      { onSubmit: handleSubmit },
      h("label", { htmlFor: "message" }, "Message"),
      h("input", { id: "message", name: "message", required: true }),
      h("button", { type: "submit" }, "Send"),
    ),
    h(
      "ul",
      {},
      ...optimisticMessages.map((item, index) =>
        h("li", { key: index }, item.text + (item.pending ? " (sending)" : "")),
      ),
    ),
    error ? h("p", { role: "alert" }, error) : null,
  );
}
