# The React.js Master Reference

Everything in React core plus a curated list of where to go next: tutorials, courses, books, channels, and communities with plain-English explanations and analogies.

## Table of Contents

**Introduction**
- [Why Use React?](#why-use-react)
- [A Brief History](#a-brief-history)
- [What You Need to Know First](#what-you-need-to-know-first)
- [Quick Start](#quick-start)

**Foundations**
1. [The Big Picture](#1-the-big-picture)
2. [How React Works Under the Hood](#2-how-react-works-under-the-hood)
3. [Components](#3-components)
4. [JSX](#4-jsx)
5. [Props](#5-props)
6. [State](#6-state)

**Hooks (all of them)**
7. [Rules of Hooks](#7-rules-of-hooks)
8. [useState](#8-usestate)
9. [useEffect](#9-useeffect)
10. [useLayoutEffect](#10-uselayouteffect)
11. [useRef](#11-useref)
12. [useImperativeHandle](#12-useimperativehandle)
13. [useContext](#13-usecontext)
14. [useMemo](#14-usememo)
15. [useCallback](#15-usecallback)
16. [useReducer](#16-usereducer)
17. [useTransition](#17-usetransition)
18. [useDeferredValue](#18-usedeferredvalue)
19. [useId](#19-useid)
20. [useSyncExternalStore](#20-usesyncexternalstore)
21. [useDebugValue](#21-usedebugvalue)
22. [use](#22-use)
23. [useActionState](#23-useactionstate)
24. [useFormStatus](#24-useformstatus)
25. [useOptimistic](#25-useoptimistic)

**Rendering and UI**
26. [Conditional Rendering](#26-conditional-rendering)
27. [Lists and Keys](#27-lists-and-keys)
28. [Fragments](#28-fragments)
29. [Portals](#29-portals)
30. [Event Handling](#30-event-handling)
31. [Forms](#31-forms)
32. [Refs in Depth](#32-refs-in-depth)

**Sharing and Reusing**
33. [Context API](#33-context-api)
34. [Custom Hooks](#34-custom-hooks)
35. [Composition Patterns](#35-composition-patterns)

**Async, Loading, Errors**
36. [Suspense](#36-suspense)
37. [Error Boundaries](#37-error-boundaries)
38. [Code Splitting and React.lazy](#38-code-splitting-and-reactlazy)

**Modern React**
39. [StrictMode](#39-strictmode)
40. [Server Components](#40-server-components)
41. [Server Actions](#41-server-actions)
42. [Concurrent Rendering](#42-concurrent-rendering)
43. [Hydration](#43-hydration)

**APIs and Utilities**
44. [memo and PureComponent](#44-memo-and-purecomponent)
45. [forwardRef](#45-forwardref)
46. [React.Children and cloneElement](#46-reactchildren-and-cloneelement)
47. [createElement and isValidElement](#47-createelement-and-isvalidelement)

**Legacy (still alive in old codebases)**
48. [Class Components](#48-class-components)
49. [Lifecycle Methods](#49-lifecycle-methods)
50. [PropTypes and defaultProps](#50-proptypes-and-defaultprops)

**Practical Concerns**
51. [Performance](#51-performance)
52. [TypeScript with React](#52-typescript-with-react)
53. [Testing](#53-testing)
54. [Styling Approaches](#54-styling-approaches)
55. [Accessibility](#55-accessibility)

**Ecosystem (brief pointers)**
56. [Routing](#56-routing)
57. [State Management](#57-state-management)
58. [Data Fetching](#58-data-fetching)
59. [Build Tools and Frameworks](#59-build-tools-and-frameworks)

**Reference**
60. [Project Structure](#60-project-structure)
61. [Common Pitfalls](#61-common-pitfalls)
62. [Quick Reference Tables](#62-quick-reference-tables)
63. [Glossary](#63-glossary)

**Resources**
64. [Official Documentation](#64-official-documentation)
65. [Free Interactive Tutorials](#65-free-interactive-tutorials)
66. [Paid Courses](#66-paid-courses)
67. [YouTube Channels](#67-youtube-channels)
68. [Books](#68-books)
69. [Blogs and Articles](#69-blogs-and-articles)
70. [Practice Platforms](#70-practice-platforms)
71. [Communities](#71-communities)
72. [Suggested Learning Paths](#72-suggested-learning-paths)

**Career and Migration**
73. [React vs Alternatives](#73-react-vs-alternatives)
74. [Migration Cheat Sheet: Class to Hooks](#74-migration-cheat-sheet-class-to-hooks)
75. [Common Interview Questions](#75-common-interview-questions)

---

## Why Use React?

Components, ecosystem, and momentum.

**Analogy:** React is the standard chassis kit for web UI, giving you the engine (rendering, state, hooks) and a way to bolt parts together (components). You bring the body work, the paint, and the route to the destination. Frameworks like Next.js are a complete car built on top.

### What React gives you

- **Component thinking.** Build a piece of UI once, reuse it everywhere. Encapsulate logic, styling, and markup together. 
- **Declarative model.** You describe what the UI should look like for any state, and React handles the diffing. 
- **Massive ecosystem.** Whatever you need (forms, charts, routing, animation, drag and drop, virtualization, i18n), multiple battle-tested libraries exist.
- **Job market reach.** React leads frontend surveys year after year. 
- **Cross-platform.** Same mental model for web (React DOM), native mobile (React Native), 3D and VR (React Three Fiber), even terminal apps (Ink).
- **First-class TypeScript.** Strong types for components, props, hooks, and events. 
- **Tooling and DX.** Fast hot reload, mature DevTools, profilers, established testing patterns, and AI assistants that know the API well.
- **Long-term stability.** Backed by Meta, used by Netflix, Airbnb, Shopify, Vercel, the New York Times, and most of the modern web. 

### What React doesn't give you

- **A framework.** React is a library. Routing, data fetching, code splitting strategy, forms, auth: you can wire those up yourself or adopt Next.js, Remix, or React Router v7.
- **The fastest runtime.** Svelte, Solid, and Qwik beat React on raw performance for some workloads.
- **Strong opinions.** Two React codebases can look completely different. 
- **A frozen mental model.** Server Components, Actions, and concurrent features changed how modern React is written.

### When something else might fit better

- **Static marketing sites.** Astro, Eleventy, or plain HTML and CSS ship less JavaScript.
- **Server-rendered apps with light interactivity.** HTMX, Hotwire, or Phoenix LiveView stay simpler.
- **Graphics-heavy or game-like work.** Canvas, WebGL, or a real game engine may be a better starting point.
- **Extreme runtime constraints.** SolidJS or Svelte may win on benchmarks for your specific case.

---

## A Brief History

**The problem in 2011.** Facebook was building increasingly complex UIs (chat, News Feed, notifications) and engineers were spending more time chasing bugs caused by data getting out of sync than building features. The frameworks of the day used two-way data binding, which felt magical for small apps, but became impossible to debug at scale.

**Analogy:** Pre-React UIs were like maintaining a sprawling Excel spreadsheet where every cell could update every other cell. 

**The idea.** Jordan Walke, an engineer at Facebook, prototyped something different. What if the UI was a pure function of state? Push new state, let the framework re-render everything, and figure out the minimum DOM changes needed. He drew inspiration from two places:

- **XHP**, Facebook's internal PHP system for building UI from reusable components.
- **Immediate-mode rendering** from game development, where the entire screen is redrawn every frame.

This combination produced React. The "virtual DOM" was the trick that made "re-render everything when state changes" cheap enough to actually ship.

**Going public.** React was first used in production on Facebook's News Feed in 2011 and Instagram in 2012. It was open-sourced in May 2013 at JSConf US. The initial reaction was mixed; developers loved the component model but hated JSX, which seemed to violate the "separation of concerns" rule everyone had been taught, but React eventually gained traction.

**Major milestones:**

- **2013**: Open-sourced at JSConf US.
- **2015**: React Native ships, bringing the same model to native mobile.
- **2016**: React 15 stabilizes the public API.
- **2017**: React 16 ships the Fiber rewrite, laying groundwork for concurrent rendering.
- **2019**: Hooks land in 16.8, retiring most use cases for class components.
- **2020**: React 17 ships intentionally feature-free to enable gradual upgrades.
- **2022**: React 18 enables concurrent rendering, automatic batching, and streaming SSR.
- **2024**: React 19 makes Server Components and Actions the forward direction.

Today React powers Facebook, Instagram, WhatsApp Web, Netflix, Airbnb, Shopify, Discord, GitHub, large parts of the New York Times, and most of the modern web.

**Why history matters** Older tutorials reflect older eras. For example, a 2017 tutorial means class components and lifecycle methods. A 2020 one means hooks but no concurrent features. Anything pre-2024 won't cover Server Components or Actions. Knowing where a tutorial sits in time helps you decide what's still current and what's been replaced (included is a version table at the end of this doc for reference).

---

## What You Need to Know First

React assumes you already know how the web works.

### Required

**HTML and CSS basics.** You should be comfortable writing semantic HTML and styling it, as well as using selectors, the box model, and flexbox in CSS.

**JavaScript fundamentals.** Variables, functions, conditionals, loops, objects, arrays.

**Modern JavaScript (ES6+).** React code uses these constantly. If any are unfamiliar, learn them first:

- **Arrow functions:** `const add = (a, b) => a + b`
- **Destructuring:** `const { name, age } = user` and `const [first, second] = arr`
- **Spread and rest:** `const copy = [...arr]` and `function fn(...args) {}`
- **Template literals:** `` `Hello, ${name}` ``
- **Modules:** `import x from './x'` and `export default ...`
- **Array methods:** especially `.map()`, `.filter()`, `.reduce()`, `.find()`
- **Optional chaining:** `user?.profile?.name`
- **Promises and async/await:** for data fetching

### Very helpful

**Closures.** A function remembers the variables from where it was defined. Hooks rely on closures heavily, and "stale closure" bugs are one of the most common React confusions.

**Truthy and falsy values.** `0`, `''`, `null`, `undefined`, `NaN`, and `false` are falsy. Everything else is truthy. This matters for conditional rendering.

**Immutability mindset.** React state needs new references, not mutations. If you instinctively reach for `arr.push()` or `obj.x = y`, retrain to `[...arr, item]` and `{ ...obj, x: y }`.

**Node.js and npm (or pnpm/yarn).** You'll run dev servers, install packages, and read `package.json`. You don't need to write Node code, but understand what `npm install`, `npm run dev`, and `node_modules` mean.

**The DOM and events.** What an element is, what an event handler is, how bubbling works. React abstracts the DOM, but it doesn't hide it.

### Optional, can learn alongside

- **TypeScript.** Many jobs use it. Start React in plain JS and add TypeScript when you're comfortable.
- **Git and GitHub.** Essential for actually working as a developer, but separate from React itself.
- **A bundler like Vite.** Modern tooling handles this for you. Look at the config when you're curious.
- **Server-side basics.** Helps with Server Components and full-stack frameworks, but not required to start.

### Quick gap-fillers

If you need to brush up, these are the focused resources:

- **JavaScript basics:** [JavaScript.info](https://javascript.info/) is the best free JS tutorial on the web.
- **Modern JS syntax:** Wes Bos's [Beginner JavaScript](https://beginnerjavascript.com/) or free [ES6 for Everyone](https://es6.io/).
- **HTML and CSS:** [MDN Web Docs](https://developer.mozilla.org/) and [Kevin Powell on YouTube](https://www.youtube.com/c/KevinPowell).
- **Async JavaScript:** Web Dev Simplified's promises and async/await videos.
- **Functional array methods:** Practice on [Codewars](https://www.codewars.com/) or [Exercism](https://exercism.org/).

**Honest take:** If you're shaky on JavaScript, spend two to four more weeks on JS before touching React. You'll save yourself months of confusion. React makes way more sense when JS isn't fighting you.

---

## Quick Start

Pick a starting point based on what you're building. All three options take less than a minute.

### Option 1: Vite (single-page app)

Best for: learning React, small to medium projects, anything that doesn't need server-side rendering.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

Use `--template react-ts` for TypeScript.

You get a tiny starter with `src/App.jsx`, `src/main.jsx`, and an `index.html`. Open `http://localhost:5173` in your browser and edit `App.jsx`. Saves trigger instant hot reload.

### Option 2: Next.js (full-stack)

Best for: production apps, anything needing routing, SEO, server-side rendering, or Server Components.

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

It asks a few questions (TypeScript, Tailwind, ESLint, App Router). Pick the defaults if you're not sure.

Open `http://localhost:3000`. Pages live in `app/`. Edit `app/page.tsx` and watch it update.

### Option 3: Zero install (in-browser)

Best for: trying React in 10 seconds without setting anything up.

- [react.new](https://react.new) opens a CodeSandbox React template in one click.
- [StackBlitz](https://stackblitz.com/fork/react) runs entirely in your browser, no account needed.
- [Scrimba's Learn React](https://scrimba.com/learn/learnreact) lets you code along with the instructor inside the video.

### Commands you'll use constantly

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally (Vite) |
| `npm install <pkg>` | Add a dependency |
| `npm uninstall <pkg>` | Remove a dependency |
| `npm run lint` | Run ESLint (if configured) |

### First steps after scaffolding

1. Open `src/App.jsx` (Vite) or `app/page.tsx` (Next.js).
2. Change the visible text. Save. Watch the browser update.
3. Add a `useState` somewhere. Click around.
4. Create a new component in a new file. Import it. Render it.

If that all works, you're up and running. Continue to [The Big Picture](#1-the-big-picture).

### Hello World, for reference

The smallest meaningful React app:

```jsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello, React!</h1>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default App;
```

That's a component, JSX, state, and an event handler in 12 lines. The rest of this document expands on each piece.

---

## 1. The Big Picture

React is a JavaScript library for building user interfaces from composable components.

**Analogy:** React is LEGO for interfaces. You build small bricks (components), snap them into bigger structures, and when something needs to change you swap one brick instead of rebuilding the castle.

**Core principles:**

- **Declarative**: You describe the UI for a given state. React updates the DOM.
- **Component-based**: UI is a tree of components.
- **Unidirectional data flow**: Data flows down via props. Events flow up via callbacks.

---

## 2. How React Works Under the Hood

When you render JSX, React builds a tree of plain JavaScript objects called the **virtual DOM** (or more precisely, a tree of "elements" and "fibers"). When state changes, React builds a new tree, compares it to the old one (a process called **reconciliation**), and applies the minimum set of DOM operations needed.

**Analogy:** Think of React as a draftsman with two blueprints side by side. Instead of demolishing the building every time you want to move a wall, the draftsman compares blueprints and tells the contractor exactly which walls to touch.

**Fiber** is the internal data structure (since React 16) that lets React pause, prioritize, and resume rendering work. It's what enables concurrent features like `useTransition` and Suspense.

You don't interact with any of this directly, but knowing it exists helps explain things like why state updates are batched, why effects fire after paint, and why setting state during render is a problem.

---

## 3. Components

A component is a function that returns markup.

```jsx
function Greeting() {
  return <h1>Hello, world!</h1>;
}
```

**Rules:**
- Names start with a capital letter (`Greeting`, not `greeting`).
- Must return one root element (use a fragment `<>...</>` if needed).
- Should be pure during render: same props in, same JSX out, no side effects.

**Class components** still exist but you almost never write new ones. See [Class Components](#48-class-components).

---

## 4. JSX

JSX is HTML-like syntax that compiles to `React.createElement()` calls.

```jsx
const el = <h1 className="title">Hello</h1>;
// becomes
const el = React.createElement('h1', { className: 'title' }, 'Hello');
```

**Differences from HTML:**

| HTML | JSX |
|------|-----|
| `class` | `className` |
| `for` | `htmlFor` |
| `onclick` | `onClick` |
| `tabindex` | `tabIndex` |
| `style="color: red"` | `style={{ color: 'red' }}` |

**Embedding JS** with curly braces:

```jsx
<p>{user.name}</p>
<p>{2 + 2}</p>
<p>{isAdmin ? 'Yes' : 'No'}</p>
```

**Spread attributes:**

```jsx
<Button {...buttonProps} />
```

**Comments inside JSX:**

```jsx
<div>
  {/* this is a comment */}
</div>
```

---

## 5. Props

Props are read-only inputs to a component.

```jsx
function Welcome({ name, age = 0 }) {
  return <p>{name} is {age}</p>;
}

<Welcome name="Brittney" age={29} />
```

**Analogy:** Props are the arguments you hand a function. The function uses them but doesn't get to change them.

**Children prop** is whatever sits between tags:

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

**Spreading props** down to a child:

```jsx
function Button(props) {
  return <button {...props} />;
}
```

**Render props** pass a function as a prop (or as children):

```jsx
<DataLoader render={data => <List items={data} />} />
```

---

## 6. State

State is data a component remembers across renders. Changing state triggers a re-render.

```jsx
const [count, setCount] = useState(0);
```

**Analogy:** State is the sticky note on your monitor. The UI mirrors the note. Change the note and the screen updates.

**Rules:**
- Never mutate state directly. Always create new objects or arrays.
- State updates are asynchronous and may be batched.
- Each instance of a component has its own state.

```jsx
// Wrong
todos.push(item);
setTodos(todos);

// Right
setTodos([...todos, item]);
```

**Functional updates** when new state depends on previous:

```jsx
setCount(prev => prev + 1);
```

**Lazy initialization** for expensive initial values:

```jsx
const [data, setData] = useState(() => expensiveComputation());
```

---

## 7. Rules of Hooks

1. Only call hooks at the top level. No loops, conditions, or nested functions.
2. Only call hooks from React function components or other hooks.

**Why:** React tracks hooks by call order, not by name. If you skip a hook conditionally, every later hook gets the wrong slot.

ESLint plugin `eslint-plugin-react-hooks` enforces these automatically.

---

## 8. useState

Already covered in [State](#6-state). Quick summary:

```jsx
const [value, setValue] = useState(initial);
setValue(newValue);
setValue(prev => prev + 1);
useState(() => expensiveInit());
```

---

## 9. useEffect

Runs side effects after render. Fetching data, subscriptions, manually touching the DOM.

```jsx
useEffect(() => {
  // effect
  return () => {
    // cleanup, runs before next effect or on unmount
  };
}, [deps]);
```

**Analogy:** `useEffect` is the assistant who reacts to changes. "Whenever the user logs in, send a welcome email."

**Dependency variations:**

```jsx
useEffect(() => {});            // every render
useEffect(() => {}, []);        // once on mount
useEffect(() => {}, [a, b]);    // when a or b changes
```

**Common patterns:**

```jsx
// Fetching
useEffect(() => {
  let cancelled = false;
  fetch(url).then(res => res.json()).then(data => {
    if (!cancelled) setData(data);
  });
  return () => { cancelled = true; };
}, [url]);

// Event listener
useEffect(() => {
  const handler = e => console.log(e.key);
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}, []);
```

**When NOT to use it:**
- Deriving state from props: just compute it during render.
- Transforming data for rendering: use `useMemo` or compute inline.
- Handling user events: put the logic in the event handler.

---

## 10. useLayoutEffect

Same signature as `useEffect`, but runs **synchronously after DOM mutations and before the browser paints**.

```jsx
useLayoutEffect(() => {
  const rect = ref.current.getBoundingClientRect();
  setHeight(rect.height);
}, []);
```

**Analogy:** `useEffect` is the assistant who arrives after the show starts. `useLayoutEffect` runs backstage during scene changes, before the curtain rises. Use it when you need to measure or adjust the DOM and don't want the user to see a flicker.

**Cost:** It blocks paint. Don't use it unless `useEffect` causes visual jitter.

---

## 11. useRef

Holds a mutable value across renders that doesn't trigger re-renders when changed. Two main uses:

**Access DOM nodes:**

```jsx
const inputRef = useRef(null);
return <input ref={inputRef} />;
// later: inputRef.current.focus()
```

**Store any mutable value** (timers, previous values, instance variables):

```jsx
const renderCount = useRef(0);
renderCount.current += 1;
```

**Analogy:** `useRef` is a backpack. Stuff persists between renders, but opening the backpack doesn't make React rerender.

---

## 12. useImperativeHandle

Customize what a parent gets when it puts a ref on your component.

```jsx
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => { inputRef.current.value = ''; }
  }));
  return <input ref={inputRef} />;
});
```

Now the parent's ref exposes only `focus` and `clear`, not the raw DOM node.

**When to use:** Almost never. Prefer props for everything. Reach for it only when you need to expose imperative actions like `.play()` on a video player.

---

## 13. useContext

Reads a value from a Context provider above in the tree. See [Context API](#33-context-api) for the full picture.

```jsx
const theme = useContext(ThemeContext);
```

---

## 14. useMemo

Caches the result of a computation between renders.

```jsx
const sorted = useMemo(() => items.slice().sort(compare), [items]);
```

**Analogy:** Meal prep. If the ingredients haven't changed, eat what's already cooked instead of cooking again.

**When to use:**
- Expensive calculations.
- Stable object references for `React.memo` children or hook dependencies.

**When not to use:** Cheap calculations. The memo bookkeeping itself has a cost.

---

## 15. useCallback

Caches a function reference between renders.

```jsx
const handleClick = useCallback(() => doThing(id), [id]);
```

Equivalent to `useMemo(() => fn, deps)`. Useful when the function is passed to a child wrapped in `React.memo`, or when it's a dependency of another hook.

---

## 16. useReducer

A heavier `useState` for complex state logic.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'add':    return { count: state.count + 1 };
    case 'reset':  return { count: 0 };
    default: throw new Error('unknown action');
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: 'add' });
```

**Analogy:** If `useState` is a sticky note, `useReducer` is a customer service desk. You file a request (`dispatch`), the clerk follows policy (`reducer`), records get updated.

**When to use:**
- Multiple related state values that change together.
- Complex transitions with many action types.
- State logic you want to test in isolation.

---

## 17. useTransition

Marks a state update as non-urgent so React can keep the UI responsive while it processes.

```jsx
const [isPending, startTransition] = useTransition();

function handleChange(e) {
  setQuery(e.target.value); // urgent: keep input responsive
  startTransition(() => {
    setResults(filter(e.target.value)); // non-urgent: can be interrupted
  });
}
```

**Analogy:** You're at a coffee shop. Urgent updates (typing) go to the front of the line. Transitions are the customer who says "I'll wait, serve the others first."

---

## 18. useDeferredValue

Hands React a "current value" and "deferred value." React updates the deferred one only when it has time.

```jsx
const deferredQuery = useDeferredValue(query);
const results = useMemo(() => search(deferredQuery), [deferredQuery]);
```

Similar use case to `useTransition`, but you don't control the state setter (often used with values from props or external sources).

---

## 19. useId

Generates a stable unique ID, safe for both server and client rendering.

```jsx
const id = useId();
return (
  <>
    <label htmlFor={id}>Name</label>
    <input id={id} />
  </>
);
```

Not for keys in a list. For form labels, ARIA attributes, and the like.

---

## 20. useSyncExternalStore

Subscribes a component to an external data source (something outside React state) without tearing during concurrent renders.

```jsx
const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
```

You usually don't write this yourself. State libraries like Zustand and Redux use it internally.

---

## 21. useDebugValue

Labels a custom hook for React DevTools.

```jsx
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useDebugValue(isOnline ? 'Online' : 'Offline');
  // ...
  return isOnline;
}
```

Only shows up in DevTools. Skip for trivial hooks.

---

## 22. use

Reads a resource like a promise or context **inside a render**. Unlike other hooks, you can call it conditionally and in loops.

```jsx
function Comments({ commentsPromise }) {
  const comments = use(commentsPromise); // suspends until resolved
  return <ul>{comments.map(c => <li key={c.id}>{c.text}</li>)}</ul>;
}
```

Often paired with Suspense. Also works for context:

```jsx
const theme = use(ThemeContext);
```

---

## 23. useActionState

Manages state tied to a form action. Returns the latest result of the action and a wrapped action to use in your form.

```jsx
const [state, formAction, isPending] = useActionState(submitForm, initialState);
return <form action={formAction}>...</form>;
```

Pairs with Server Actions or any async action function.

---

## 24. useFormStatus

Read the pending state of the parent `<form>`. Useful inside submit buttons.

```jsx
function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>{pending ? 'Saving...' : 'Save'}</button>;
}
```

Must be inside a `<form>` component. Doesn't take arguments.

---

## 25. useOptimistic

Show a temporary "optimistic" state while an async action is in flight. If it fails, React reverts.

```jsx
const [optimisticMessages, addOptimistic] = useOptimistic(
  messages,
  (state, newMessage) => [...state, { ...newMessage, sending: true }]
);

async function sendMessage(text) {
  addOptimistic({ text });
  await api.send(text); // real update
}
```

**Analogy:** Posting a tweet that shows up instantly even though the network call hasn't finished. If the call fails, the tweet disappears.

---

## 26. Conditional Rendering

Just JavaScript.

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
{hasError && <Banner />}

function Profile({ user }) {
  if (!user) return <Loading />;
  return <h1>{user.name}</h1>;
}
```

**Watch out:** `{count && <Foo />}` renders `0` when count is 0. Use `count > 0 && <Foo />`.

---

## 27. Lists and Keys

```jsx
{todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
```

**Analogy:** Keys are seat assignments. Without them, React shuffles items and gets confused when the list reorders.

- Keys must be unique among siblings.
- Use stable IDs from your data. Index is risky if the list changes order.
- Keys are not passed to the child as a prop.

---

## 28. Fragments

Group children without adding a DOM node.

```jsx
<>
  <td>One</td>
  <td>Two</td>
</>
```

Long form when you need a key:

```jsx
<React.Fragment key={id}>
  ...
</React.Fragment>
```

---

## 29. Portals

Render a child into a DOM node outside the parent hierarchy.

```jsx
import { createPortal } from 'react-dom';

function Modal({ children }) {
  return createPortal(children, document.getElementById('modal-root'));
}
```

**Analogy:** A portal is the "trapdoor" in a stage. The actor is still part of the play (event bubbling works through the React tree), but visually they appear somewhere else (different DOM location).

Used for modals, tooltips, dropdowns: anything that should escape `overflow: hidden` or `z-index` traps.

---

## 30. Event Handling

CamelCase event names, pass a function (not a call).

```jsx
<button onClick={handleClick}>Click</button>
<button onClick={() => deleteItem(id)}>Delete</button>
```

**Synthetic events** are React's cross-browser wrapper around native events. Access `.target`, `.preventDefault()`, `.stopPropagation()` like usual.

**Event delegation:** Since React 17, events attach to the root, not `document`. You usually won't notice unless you mix React and non-React code.

---

## 31. Forms

**Controlled inputs** (state owns the value):

```jsx
const [name, setName] = useState('');
<input value={name} onChange={e => setName(e.target.value)} />
```

**Uncontrolled inputs** (DOM owns the value, you read it with a ref):

```jsx
const ref = useRef();
<input ref={ref} defaultValue="initial" />
// later: ref.current.value
```

**Multiple fields** with one handler:

```jsx
const [form, setForm] = useState({ name: '', email: '' });
const update = e => setForm({ ...form, [e.target.name]: e.target.value });
<input name="name" value={form.name} onChange={update} />
<input name="email" value={form.email} onChange={update} />
```

**Form Actions** (React 19+):

```jsx
async function submit(formData) {
  const name = formData.get('name');
  await save(name);
}
<form action={submit}>
  <input name="name" />
  <button>Submit</button>
</form>
```

The `action` prop accepts a function that receives `FormData`. Works on client and server.

---

## 32. Refs in Depth

**Object refs** (most common):

```jsx
const ref = useRef(null);
<div ref={ref} />
```

**Callback refs** (run when the node mounts and unmounts):

```jsx
<div ref={node => {
  if (node) console.log('mounted', node);
  else console.log('unmounted');
}} />
```

**Forwarding** so a parent can put a ref on your custom component: see [forwardRef](#45-forwardref). In React 19+, you can also pass `ref` as a regular prop on function components without `forwardRef`.

**Don't use refs to:**
- Read state during render. Use state instead.
- Avoid normal data flow. Refs are escape hatches.

---

## 33. Context API

Share values without prop-drilling.

```jsx
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Page />
    </ThemeContext.Provider>
  );
}

function Page() {
  const theme = useContext(ThemeContext); // or use(ThemeContext)
  return <div className={theme}>...</div>;
}
```

**Analogy:** Props are notes passed hand-to-hand down a hallway. Context is the intercom. Anyone in the building tunes in.

**Caveats:**
- Every consumer rerenders when the provider's value changes. Don't use Context for high-frequency state. Use a state library.
- Wrap the `value` in `useMemo` if it's an object, to avoid spurious rerenders.

---

## 34. Custom Hooks

Functions starting with `use` that call other hooks. They package reusable stateful logic.

```jsx
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
```

**Analogy:** Custom hooks are kitchen gadgets you build once and reuse in every recipe.

---

## 35. Composition Patterns

**Children as a slot:**

```jsx
<Card>
  <h2>Title</h2>
</Card>
```

**Multiple slots via named props:**

```jsx
<Layout header={<Header />} sidebar={<Sidebar />}>
  <MainContent />
</Layout>
```

**Compound components** sharing state via context:

```jsx
<Tabs defaultValue="a">
  <Tabs.List>
    <Tabs.Trigger value="a">A</Tabs.Trigger>
    <Tabs.Trigger value="b">B</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Panel value="a">Content A</Tabs.Panel>
</Tabs>
```

**Render props** (function as children):

```jsx
<Mouse>{({ x, y }) => <p>{x}, {y}</p>}</Mouse>
```

**Higher-order components** (function that wraps a component) are mostly retired in favor of hooks, but you'll see them in older code.

---

## 36. Suspense

Declarative loading states. Wrap any component that might "suspend" (throw a promise, typically via `use` or a Suspense-enabled library).

```jsx
<Suspense fallback={<Spinner />}>
  <UserProfile />
</Suspense>
```

While `UserProfile` is loading data, the fallback shows. When ready, React swaps it in.

**Analogy:** Suspense is the "please hold" music. You wrap a region of the UI in a boundary that says "if anything inside isn't ready, play this instead."

Suspense also works with `React.lazy` for code splitting.

---

## 37. Error Boundaries

Catch errors thrown during render in a subtree and show fallback UI. Still class-only.

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { logErrorToService(error, info); }
  render() {
    if (this.state.hasError) return <p>Something went wrong.</p>;
    return this.props.children;
  }
}

<ErrorBoundary>
  <App />
</ErrorBoundary>
```

**Analogy:** A circuit breaker. One subtree blows up, the rest of the house keeps power.

**Doesn't catch:**
- Errors in event handlers (use try/catch).
- Errors in async code (use try/catch).
- Errors during SSR (depends on framework).

Most projects use `react-error-boundary` (a small library) instead of writing the class.

---

## 38. Code Splitting and React.lazy

Load a component only when needed.

```jsx
const Settings = lazy(() => import('./Settings'));

<Suspense fallback={<Loading />}>
  <Settings />
</Suspense>
```

**Analogy:** Don't ship every chapter of a textbook in one binding. Send the next chapter when the reader gets close to the end.

Bundlers (Vite, webpack) split each dynamic `import()` into a separate file automatically.

---

## 39. StrictMode

Development-only helper that double-invokes things to surface bugs.

```jsx
<StrictMode>
  <App />
</StrictMode>
```

In dev, StrictMode:
- Double-invokes component functions, effect setups, and state initializers.
- Warns about deprecated patterns.

Production behavior is unaffected. If your code breaks under StrictMode, the bug was there all along (usually a missing cleanup or non-pure render).

---

## 40. Server Components

Components that run on the server, never ship JS to the client. Marked implicitly in frameworks like Next.js App Router. Use `'use client'` at the top of a file to opt back into client rendering.

```jsx
// server component (default in app router)
export default async function Page() {
  const data = await db.query(...);
  return <Article data={data} />;
}
```

```jsx
// client component
'use client';
import { useState } from 'react';
export default function Counter() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{n}</button>;
}
```

**Analogy:** Server components are the kitchen. Client components are the dining room. You prep what you can in the kitchen (no JS shipped to the user), and only the interactive plates make it out front.

**Rules:**
- Server components can't use hooks or browser APIs.
- Client components can't be `async`.
- Client components can import server components, and vice versa, with some nesting rules.

---

## 41. Server Actions

Functions marked with `'use server'` that run on the server but can be called from client code, including from `<form action={...}>`.

```jsx
'use server';
export async function createPost(formData) {
  const title = formData.get('title');
  await db.posts.insert({ title });
}
```

```jsx
import { createPost } from './actions';
<form action={createPost}>
  <input name="title" />
  <button>Post</button>
</form>
```

Pairs with `useActionState`, `useFormStatus`, and `useOptimistic` for full form flows without manual fetch calls.

---

## 42. Concurrent Rendering

React can prepare a new UI in the background, pause if something more urgent comes up, and discard work that becomes stale. You don't enable this directly. It activates when you use features like `useTransition`, `useDeferredValue`, and Suspense for data.

**Why it matters:** Smooth UI under load. Typing stays responsive while heavy filtering happens behind the scenes.

---

## 43. Hydration

When you server-render HTML and then attach React on the client, "hydration" is the process of wiring up event handlers and state to the existing DOM.

**Common pitfall:** Mismatch between server output and first client render. Causes errors and visual flicker. Usually triggered by using `Date.now()`, `Math.random()`, or browser-only APIs during initial render.

Fix by deferring those reads until after mount (in a `useEffect`) or by using `suppressHydrationWarning` for known mismatches.

---

## 44. memo and PureComponent

`React.memo` wraps a function component to skip rerenders when props haven't changed (shallow comparison).

```jsx
const Row = memo(function Row({ item }) {
  return <li>{item.name}</li>;
});
```

`PureComponent` is the class equivalent (legacy).

**When to use:** Profiling shows a real cost. Otherwise, memo's bookkeeping can be slower than just rerendering.

---

## 45. forwardRef

Lets a parent attach a ref to a function component's internal DOM node.

```jsx
const Input = forwardRef((props, ref) => <input ref={ref} {...props} />);
```

In React 19+, you can skip `forwardRef` and accept `ref` as a regular prop. Older code still uses it widely.

---

## 46. React.Children and cloneElement

Utilities for working with the `children` prop when it might be a single element, array, or mix.

```jsx
React.Children.map(children, child => ...);
React.Children.forEach(children, child => ...);
React.Children.count(children);
React.Children.only(children); // throws if not exactly one
React.Children.toArray(children); // adds keys
```

`cloneElement` produces a new element with extra props:

```jsx
React.cloneElement(child, { extraProp: true });
```

These are old-school. Modern React tends to prefer context or render props.

---

## 47. createElement and isValidElement

`React.createElement` is what JSX compiles to. You rarely write it by hand.

```jsx
React.createElement('div', { id: 'x' }, 'hello');
```

`isValidElement(obj)` returns true if `obj` is a React element. Useful in libraries that inspect children.

---

## 48. Class Components

Still supported but rarely written from scratch. Used by error boundaries.

```jsx
class Counter extends React.Component {
  state = { count: 0 };
  increment = () => this.setState({ count: this.state.count + 1 });
  render() {
    return <button onClick={this.increment}>{this.state.count}</button>;
  }
}
```

`this.setState` merges (unlike hook setters, which replace). Bound methods or arrow class properties are needed to keep `this` correct.

---

## 49. Lifecycle Methods

Class-only. Hooks replace all of these in function components.

| Lifecycle | Hook equivalent |
|-----------|----------------|
| `componentDidMount` | `useEffect(() => {}, [])` |
| `componentDidUpdate` | `useEffect(() => {})` or with deps |
| `componentWillUnmount` | cleanup function in `useEffect` |
| `getDerivedStateFromProps` | derive during render |
| `shouldComponentUpdate` | `React.memo` |
| `getDerivedStateFromError` | error boundary (no hook yet) |
| `componentDidCatch` | error boundary (no hook yet) |

---

## 50. PropTypes and defaultProps

Pre-TypeScript runtime type checks.

```jsx
import PropTypes from 'prop-types';
Button.propTypes = { label: PropTypes.string.isRequired };
Button.defaultProps = { label: 'Click' };
```

`PropTypes` is now a separate package. Most new projects use TypeScript instead. `defaultProps` on function components is removed in React 19. Use default parameter values:

```jsx
function Button({ label = 'Click' }) {}
```

---

## 51. Performance

Default React is fast. Reach for these only after measuring.

**Tools:** React DevTools Profiler, `<Profiler>` component, Chrome Performance tab.

**Levers:**
- `React.memo` for expensive components rerendering with unchanged props.
- `useMemo` for expensive calculations.
- `useCallback` for callbacks passed to memoized children.
- Split large components so unrelated state changes don't redraw the world.
- Lift state down: keep it as local as it can be.
- Virtualize long lists with `react-window` or `react-virtuoso`.
- Use `useTransition` and `useDeferredValue` for heavy updates.

**Premature optimization warning:** `useMemo` and `useCallback` have a cost. Adding them everywhere can make things slower.

---

## 52. TypeScript with React

```tsx
type Props = {
  name: string;
  age?: number;
  onClick: (id: string) => void;
  children?: React.ReactNode;
};

function Greeting({ name, age = 0, onClick, children }: Props) {
  return <button onClick={() => onClick(name)}>{name} {age}</button>;
}
```

**Common types:**

| Use case | Type |
|----------|------|
| Anything renderable | `React.ReactNode` |
| Specifically JSX | `React.ReactElement` |
| Function component | `React.FC<Props>` (some prefer just typing props directly) |
| Event handler (button click) | `React.MouseEventHandler<HTMLButtonElement>` |
| Event object | `React.MouseEvent<HTMLButtonElement>` |
| Input change | `React.ChangeEvent<HTMLInputElement>` |
| Ref to DOM node | `React.RefObject<HTMLDivElement>` |
| CSS style object | `React.CSSProperties` |

**Hooks with TS:**

```tsx
const [count, setCount] = useState<number>(0);
const ref = useRef<HTMLInputElement>(null);
```

---

## 53. Testing

**React Testing Library** (RTL) is the standard.

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('increments', async () => {
  render(<Counter />);
  await userEvent.click(screen.getByRole('button'));
  expect(screen.getByText('1')).toBeInTheDocument();
});
```

**Philosophy:** Test what the user sees and does. Query by role, label, and text rather than by implementation detail.

**Runners:** Vitest (Vite projects), Jest (older projects).

---

## 54. Styling Approaches

| Approach | Example |
|----------|---------|
| Plain CSS | `import './styles.css'` |
| CSS Modules | `import s from './x.module.css'; <div className={s.box}>` |
| Tailwind | `<div className="p-4 text-red-500">` |
| CSS-in-JS (Emotion, styled-components) | `styled.div\`color: red\`` |
| Vanilla Extract / Panda | typed, zero-runtime CSS |
| Inline style | `<div style={{ color: 'red' }}>` |

Pick one and stay consistent. Mixing styles invites specificity wars.

---

## 55. Accessibility

- Use semantic HTML first (`<button>`, `<nav>`, `<main>`, `<label>`).
- Always pair inputs with labels (use `useId` for the connection).
- Manage focus on route changes and modal open/close.
- Use ARIA only when semantic HTML can't express the role.
- Test with keyboard only and a screen reader.
- `eslint-plugin-jsx-a11y` catches common issues.

---

## 56. Routing

React doesn't ship a router. Common picks:

- **React Router** (most popular, mature).
- **TanStack Router** (typed, modern, file-or-code based).
- **Next.js / Remix** (frameworks with built-in routing).

Minimal React Router example:

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

<BrowserRouter>
  <nav><Link to="/about">About</Link></nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

---

## 57. State Management

When Context isn't enough:

| Library | Sweet spot |
|---------|-----------|
| **Zustand** | Tiny, simple global store, no provider |
| **Redux Toolkit** | Large apps, time-travel debugging, strict patterns |
| **Jotai** | Atomic state, fine-grained subscriptions |
| **Recoil** | Similar to Jotai (less active now) |
| **MobX** | Reactive, mutable style |
| **XState** | State machines for complex flows |

For server state, see Data Fetching.

---

## 58. Data Fetching

For anything more than one-off `fetch` calls, use a dedicated library.

- **TanStack Query** (React Query): caching, refetching, mutations, optimistic updates.
- **SWR**: smaller, hook-focused, by Vercel.
- **Apollo Client** / **urql**: GraphQL.
- **RTK Query**: bundled with Redux Toolkit.

Frameworks like Next.js and Remix handle a lot of this at the route level.

---

## 59. Build Tools and Frameworks

| Tool | What it is |
|------|-----------|
| **Vite** | Fast dev server and bundler. Default for new SPAs. |
| **Next.js** | Full-stack React framework with SSR, routing, Server Components. |
| **Remix / React Router (v7)** | Full-stack framework focused on web fundamentals. |
| **Astro** | Multi-framework static site builder, supports React islands. |
| **Create React App** | Deprecated. Don't start new projects with it. |

---

## 60. Project Structure

A reasonable starting point. Reorganize when patterns emerge.

```
src/
  components/      shared UI
    Button.tsx
    Card.tsx
  features/        feature-based folders for larger apps
    auth/
      LoginForm.tsx
      useAuth.ts
      authSlice.ts
  pages/           or routes/
  hooks/           cross-feature custom hooks
  context/         providers
  utils/           pure helpers
  api/             fetch wrappers
  types/           shared TS types
  App.tsx
  main.tsx
```

---

## 61. Common Pitfalls

- **Stale closures in `useEffect`.** Hook captures values from the render it ran in. Add dependencies or use the functional form of setters.
- **Infinite render loops.** Setting state during render, or an effect that updates state without a dependency that stabilizes.
- **Mutating state.** `array.push()` then `setArray(array)` won't trigger a rerender.
- **Using index as key** for a reorderable list.
- **`useEffect` for derived state.** Compute during render instead.
- **Triggering side effects in render.** Move them to event handlers or effects.
- **Conditional hooks.** Breaks the order. Lint plugin catches it.
- **Forgetting to clean up subscriptions.** Memory leaks and double handlers.
- **Hydration mismatches** from non-deterministic render (Date, random, window).
- **Reading `.current` of a ref during render.** Refs are for effects and event handlers.
- **Passing a new object every render** to a memoized child. Wrap in `useMemo`.

---

## 62. Quick Reference Tables

**Hook cheat sheet:**

| Need | Hook |
|------|------|
| Local memory | `useState` |
| Complex local memory | `useReducer` |
| Side effect after paint | `useEffect` |
| Side effect before paint | `useLayoutEffect` |
| DOM node or mutable value | `useRef` |
| Customize ref handle | `useImperativeHandle` |
| Read context | `useContext` or `use` |
| Cache value | `useMemo` |
| Cache function | `useCallback` |
| Mark non-urgent update | `useTransition` |
| Defer a value | `useDeferredValue` |
| Unique ID | `useId` |
| External store | `useSyncExternalStore` |
| Debug label | `useDebugValue` |
| Read promise/context | `use` |
| Form action state | `useActionState` |
| Parent form pending | `useFormStatus` |
| Optimistic update | `useOptimistic` |

**JSX attribute mapping:**

| HTML | JSX |
|------|-----|
| `class` | `className` |
| `for` | `htmlFor` |
| `tabindex` | `tabIndex` |
| `readonly` | `readOnly` |
| `maxlength` | `maxLength` |
| `enctype` | `encType` |

**React version history (when major features landed):**

| Version | Year | Big additions |
|---------|------|---------------|
| 16.0 | 2017 | Fiber rewrite, error boundaries, portals, fragments, returning arrays from render |
| 16.3 | 2018 | New Context API, `forwardRef`, updated lifecycle methods |
| 16.6 | 2018 | `React.memo`, `React.lazy`, `Suspense` for code splitting |
| 16.8 | 2019 | **Hooks** (the biggest shift in React's history, retired most class components) |
| 17.0 | 2020 | "No new features" release. Event delegation moved to root, new JSX transform (no need to `import React`), gradual upgrade support |
| 18.0 | 2022 | Concurrent rendering, automatic batching, `useTransition`, `useDeferredValue`, `useId`, `useSyncExternalStore`, streaming SSR, `createRoot` API, stricter StrictMode |
| 19.0 | 2024 | Server Components stable, Actions, `useActionState`, `useFormStatus`, `useOptimistic`, `use` hook, ref as a regular prop, document metadata in components, asset preloading |

**Reading older tutorials:**

- Anything before 16.8 uses class components. Translate `this.state` to `useState` and lifecycle methods to `useEffect`.
- Tutorials from 2019 to early 2022 use hooks but predate concurrent rendering and Server Components.
- "Modern React" usually means 18+ with hooks.
- Server Components, `'use client'`, and Actions are React 19+ (and require a framework like Next.js to fully use).

---

## 63. Glossary

- **Component**: A function (or class) returning JSX.
- **Element**: The object JSX produces. Plain JS, not a DOM node.
- **JSX**: HTML-like syntax that compiles to `createElement` calls.
- **Props**: Read-only inputs to a component.
- **State**: Data a component remembers between renders.
- **Hook**: Function starting with `use` that taps into React features.
- **Render**: React calls your component function to compute the next UI.
- **Commit**: React applies the changes to the actual DOM.
- **Reconciliation**: Diffing the new element tree against the old.
- **Fiber**: The internal data structure that powers reconciliation.
- **Virtual DOM**: Informal term for React's element tree.
- **Reactivity**: How state changes propagate to the UI.
- **Suspense**: A boundary that shows fallback UI while children load.
- **Hydration**: Attaching React to server-rendered HTML.
- **Server Component**: A component that runs only on the server.
- **Client Component**: A component that runs in the browser.
- **Portal**: Render into a DOM node outside the parent.
- **Ref**: A mutable container that doesn't trigger rerenders.
- **Key**: Unique identifier for a list item.
- **Concurrent rendering**: React preparing UI in the background, pausable.

### Ecosystem acronyms

You'll see these constantly in job posts, blog titles, and team conversations.

**Rendering strategies:**

- **CSR** – Client-Side Rendering. Browser downloads JS, then renders everything. Default for plain Vite SPAs.
- **SSR** – Server-Side Rendering. HTML built on the server per request, then hydrated on the client.
- **SSG** – Static Site Generation. HTML built once at build time. Same file served to every visitor.
- **ISR** – Incremental Static Regeneration. SSG with periodic rebuilds. Next.js feature.
- **PPR** – Partial Prerendering. Static shell plus dynamic streamed content. Newer Next.js feature.
- **RSC** – React Server Components.
- **SPA** – Single-Page Application. One HTML file, JS handles navigation.
- **MPA** – Multi-Page Application. Each route is its own full page load.

**Architecture and tech:**

- **DOM** – Document Object Model. The tree of nodes the browser maintains.
- **vDOM** – Virtual DOM. React's in-memory element tree.
- **JSX** – JavaScript XML. React's HTML-like syntax.
- **TSX** – TypeScript with JSX. Same syntax, types included.
- **HMR** – Hot Module Replacement. Update changed modules without a full page reload.
- **HOC** – Higher-Order Component. A function that wraps a component and returns a new one.
- **PWA** – Progressive Web App. Web app that behaves more like a native app (offline, installable).
- **REST** – Common API style based on HTTP verbs (GET, POST, PUT, DELETE).
- **GraphQL** – Query language and runtime for APIs. Alternative to REST.
- **JAMstack** – JavaScript, APIs, Markup. Architecture pattern for static-first sites.
- **BFF** – Backend For Frontend. A backend layer tailored to a specific frontend.

**Web platform and security:**

- **SEO** – Search Engine Optimization. Why SSR and SSG matter for marketing sites.
- **CDN** – Content Delivery Network. Servers near the user that cache and serve static assets.
- **CORS** – Cross-Origin Resource Sharing. Browser rule for cross-domain requests.
- **CSP** – Content Security Policy. Browser rule for what scripts and styles can load.
- **CSRF** – Cross-Site Request Forgery. Attack pattern; relevant for form submissions.
- **XSS** – Cross-Site Scripting. Attack where malicious JS runs in your page.

**People-facing:**

- **UI** – User Interface.
- **UX** – User Experience.
- **DX** – Developer Experience.
- **a11y** – Accessibility. The number is the letters between "a" and "y" in the word.
- **i18n** – Internationalization. Letters between "i" and "n".
- **l10n** – Localization. Letters between "l" and "n".

---

## 64. Official Documentation

Start here. The React team rebuilt their docs in 2023 around hooks, with interactive sandboxes and modern patterns. It's genuinely good.

- [react.dev](https://react.dev) — Official site, tutorials, and full API reference.
- [react.dev/learn](https://react.dev/learn) — The official tutorial (build a tic-tac-toe game).
- [react.dev/reference](https://react.dev/reference/react) — Every hook and API with examples.
- [React DevTools](https://react.dev/learn/react-developer-tools) — Browser extension for inspecting component trees and profiling.
- [Next.js docs](https://nextjs.org/docs) — The default full-stack React framework.
- [TanStack docs](https://tanstack.com) — Router, Query, Table, and more.

---

## 65. Free Interactive Tutorials

Free options that compete with paid courses on quality.

- [Scrimba: Learn React](https://scrimba.com/learn/learnreact) — Bob Ziroll, 15+ hours, 170+ coding challenges, six projects. The "scrim" format lets you pause and edit the instructor's code inline. Best free starting point for most people.
- [freeCodeCamp Front End Libraries Cert](https://www.freecodecamp.org/learn/front-end-development-libraries/) — Project-based, includes a certificate, covers React with Redux.
- [The Odin Project: React](https://www.theodinproject.com/paths/full-stack-javascript) — Project-heavy, free, opinionated curriculum. Less hand-holding than Scrimba.
- [Fullstack Open](https://fullstackopen.com/en/) — University of Helsinki. Academically rigorous, free, covers React with Node, GraphQL, TypeScript, CI/CD. Best for self-motivated learners who want depth.
- [Codecademy: Learn React](https://www.codecademy.com/learn/react-101) — Browser-based exercises. Free tier limited but solid intro.
- [MDN-Scrimba React 101](https://scrimba.com/learn/learnreact) — Beginner-friendly, co-developed with MDN.
- [Epic React for Beginners](https://epicreact.dev/learn) — Kent C. Dodds' free intro to his paid course.

---

## 66. Paid Courses

Worth it when you want structure and a single instructor's voice end-to-end.

- [The Joy of React](https://www.joyofreact.com/) — Josh Comeau. Interactive, mental-model focused, beautifully produced. Best-in-class for "really understanding" React. Pricey but often discounted.
- [Epic React](https://epicreact.dev/) — Kent C. Dodds. Workshop-style, deep on hooks, patterns, testing, and Suspense. Aimed at intermediate developers.
- [Complete React Developer (Zero to Mastery)](https://zerotomastery.io/courses/learn-react/) — Andrei Neagoie & Yihua Zhang. Long, comprehensive, project-heavy bootcamp style.
- [The Ultimate React Course (Jonas Schmedtmann)](https://www.udemy.com/course/the-ultimate-react-course/) — Udemy. Highly rated, modern, big projects. 
- [React: The Complete Guide (Maximilian Schwarzmüller)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) — Udemy. The classic exhaustive React course. Very long.
- [Modern React with Redux (Stephen Grider)](https://www.udemy.com/course/react-redux/) — Udemy. Good for the gradual-builder learner.
- [Frontend Masters React Path](https://frontendmasters.com/learn/react/) — Brian Holt's Complete Intro, plus advanced courses. Subscription model, college students get a free month via GitHub Education.
- [Scrimba Frontend Career Path](https://scrimba.com/learn/frontend) — 80+ hours, MDN-aligned, takes you from zero to job-ready including React.

---

## 67. YouTube Channels

Free, current, and as good as most paid content if you're disciplined about following a series instead of channel-surfing.

**For beginners:**
- [The Net Ninja](https://www.youtube.com/c/TheNetNinja) — Shaun Pares. Clear, friendly, full React playlists. Best starting point on YouTube.
- [Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified) — Kyle Cook. Excellent at boiling concepts down without dumbing them down.
- [Traversy Media](https://www.youtube.com/c/TraversyMedia) — Brad Traversy. Project-based crash courses across the whole stack.
- [freeCodeCamp](https://www.youtube.com/c/Freecodecamp) — Long-form tutorials, often 5+ hours, free certs included.
- [Dave Gray](https://www.youtube.com/@DaveGrayTeachesCode) — Thorough React and full-stack tutorials including a full MERN series.

**For intermediate to advanced:**
- [Jack Herrington](https://www.youtube.com/@jherr) — The most React-specific advanced channel. Server Components, state management, advanced TypeScript, micro-frontends. Pick this one if you only follow one.
- [Theo (t3.gg)](https://www.youtube.com/@t3dotgg) — Theo Browne, creator of the T3 stack. Hot takes, ecosystem analysis, modern Next.js.
- [ByteGrad](https://www.youtube.com/@ByteGrad) — Wesley. TypeScript-heavy, Next.js focus.
- [Web Dev Cody](https://www.youtube.com/@WebDevCody) — Real-world React work and technical interview prep.
- [Lama Dev](https://www.youtube.com/@LamaDev) — Real-world project tutorials (dashboards, e-commerce, etc.).
- [Matt Pocock](https://www.youtube.com/@mattpocockuk) — TypeScript specialist. Essential if you're doing TS with React.
- [Fireship](https://www.youtube.com/c/Fireship) — 100-second explainers and ecosystem awareness. Great for staying current, not for first learning.

---

## 68. Books

React moves fast, so prefer the most recent edition. Most authors update their digital versions free.

**Foundational:**
- **Learning React: Modern Patterns for Developing React Apps** by Alex Banks & Eve Porcello (O'Reilly). Often called the best intro book. Bridges JS fundamentals to React. [O'Reilly link](https://www.oreilly.com/library/view/learning-react-3rd/9781098156282/)
- **The Road to React** by Robin Wieruch. Free on GitHub, paid digital version with extras. Build a real app from scratch. Updated continuously. [roadtoreact.com](https://www.roadtoreact.com/)
- **React Key Concepts** by Maximilian Schwarzmüller. Reference-style book pairing well with his Udemy course.

**Deep dives:**
- **Fluent React** by Tejas Kumar (O'Reilly). The how-React-works-under-the-hood book. Fiber, reconciliation, concurrent rendering. Best if you already know React and want to understand why it does what it does. [O'Reilly link](https://www.oreilly.com/library/view/fluent-react/9781098138707/)
- **React Design Patterns and Best Practices** by Carlos Santana Roldán. For developers who can already build apps but want them to stop feeling messy.
- **Learn React with TypeScript** by Carl Rippon. Useful pairing of the two technologies.

**Adjacent and free:**
- **Eloquent JavaScript** by Marijn Haverbeke. Free at [eloquentjavascript.net](https://eloquentjavascript.net). Strong JS foundation, which you need before React makes full sense.
- **You Don't Know JS (Yet)** by Kyle Simpson. Free on [GitHub](https://github.com/getify/You-Dont-Know-JS). Deep JS, multiple volumes.
- **Patterns.dev** by Lydia Hallie & Addy Osmani. Free online book at [patterns.dev](https://patterns.dev). Design patterns, rendering patterns, performance.

---

## 69. Blogs and Articles

The best React writing is often free on personal blogs.

- [overreacted.io](https://overreacted.io) — Dan Abramov (former React core team). Mental models, why React works the way it does. Reading "A Complete Guide to useEffect" is a rite of passage.
- [Josh Comeau](https://www.joshwcomeau.com/) — Interactive explainers. "Why React Re-Renders" and "The Surprising Truth About Pixels and Accessibility" are standouts.
- [Kent C. Dodds Blog](https://kentcdodds.com/blog) — Testing, patterns, hooks deep dives.
- [Robin Wieruch's blog](https://www.robinwieruch.de/) — Hundreds of focused React tutorials.
- [TkDodo's Blog](https://tkdodo.eu/blog/) — Dominik Dorfmeister, TanStack Query maintainer. React Query patterns and React performance.
- [Lee Robinson](https://leerob.io/) — Next.js / Vercel, modern React patterns.
- [Patterns.dev](https://patterns.dev) — Already mentioned, but worth listing twice.
- [React Status Newsletter](https://react.statuscode.com/) — Weekly digest of React news.
- [This Week in React](https://thisweekinreact.com/) — Sebastien Lorber. Weekly newsletter, very current.

---

## 70. Practice Platforms

Reading is not coding. Build things.

- [CodeSandbox](https://codesandbox.io) — In-browser React playground, full project templates.
- [StackBlitz](https://stackblitz.com) — Similar, runs Node in the browser too.
- [Frontend Mentor](https://www.frontendmentor.io/) — Real design challenges with Figma files. Free tier is generous.
- [Frontend Practice](https://www.frontendpractice.com/) — Clone real-world sites for practice.
- [BuildUI](https://buildui.com/) — Sam Selikoff. Polished tutorials on building production UI.
- [Reactfolio / project ideas lists](https://github.com/florinpop17/app-ideas) — When you need a project but can't think of one.
- [LeetCode (React track)](https://leetcode.com) — Component-building interview prep.
- [Codewars](https://www.codewars.com) — JS practice, sharpens the language under React.

---

## 71. Communities

Get unstuck and stay current.

- [r/reactjs](https://www.reddit.com/r/reactjs/) — Most active React community on Reddit. Helpful, moderated well.
- [Reactiflux Discord](https://www.reactiflux.com/) — Large Discord server, channels for every sub-topic.
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs) — Still the best for specific bug questions.
- [Dev.to React tag](https://dev.to/t/react) — Articles and Q&A.
- [Hacker News](https://news.ycombinator.com) — For ecosystem trends and big releases.
- [Bluesky / X React community](https://bsky.app) — Follow Dan Abramov, Sophie Alpert, Andrew Clark, Sebastian Markbåge, Rick Hanlon, Ricky Hanlon, Theo, Jack Herrington, Kent C. Dodds, Lee Robinson.

---

## 72. Suggested Learning Paths

Three honest tracks depending on where you are.

**Brand new to React (and to web dev):**
1. Solid JS foundation first: Eloquent JavaScript or freeCodeCamp's JS cert.
2. Scrimba Learn React (free) for your first React experience.
3. Build two small projects from your own ideas (a todo app and something you actually want).
4. Read the official tutorial at react.dev/learn to fill gaps.
5. Pick a framework: Next.js docs.

**Comfortable with JS, new to React:**
1. Skim react.dev/learn to anchor the mental model.
2. Pick one paid course: The Joy of React if you want depth, Jonas Schmedtmann's Ultimate React Course if you want breadth.
3. Build a real project alongside the course.
4. Read Dan Abramov's "A Complete Guide to useEffect."
5. Add TypeScript using Matt Pocock's free content.

**Already shipping React, want to level up:**
1. Read Fluent React.
2. Follow Jack Herrington's channel for a few months.
3. Learn Server Components properly via Next.js docs and Lee Robinson's blog.
4. Pick one performance-focused topic (concurrent rendering, useTransition, virtualization) and build something that needs it.
5. Read tkdodo's blog top to bottom for React Query mastery.

---

## 73. React vs Alternatives

How React compares to the main alternatives in 2026. The honest version, not the marketing one.

**Quick comparison:**

| Framework | First Released | Approach | Bundle (gzipped) | Job Market | Sweet Spot |
|-----------|---------------|----------|------------------|------------|------------|
| **React** | 2013 | Virtual DOM, JSX, hooks | ~45 KB | Largest globally | Most product UIs |
| **Vue** | 2014 | Templates, reactive state | ~34 KB | Strong, huge in Asia | Smaller teams, gentler onramp |
| **Angular** | 2016 (v2+) | Full framework, TypeScript-first | ~130 KB baseline | Strong in enterprise | Strict, opinionated apps |
| **Svelte** | 2016 | Compile-time framework | Tiny runtime | Growing | Small to medium apps with performance focus |
| **Solid** | 2021 (1.0) | Fine-grained reactivity | ~7 KB | Niche | React-like syntax with better speed |
| **Qwik** | 2023 (1.0) | Resumability instead of hydration | Near-zero initial JS | Niche | SEO-critical e-commerce |
| **Preact** | 2015 | 3 KB React-compatible | ~3 KB | Small | Bundle-size-critical sites |
| **HTMX** | 2020 | Server-rendered hypermedia | ~14 KB | Growing | Server apps with light interactivity |

**Pick React when:** You care about job market size, you need the ecosystem (some niche library only exists for React), you're going cross-platform via React Native, or your company already uses it.

**Pick Vue when:** Your team prefers template syntax over JSX, you want a gentler learning curve, or you're working in a region where Vue is dominant.

**Pick Angular when:** You're in enterprise where opinionated structure is a feature, you want batteries-included (routing, forms, HTTP, DI), or the team already knows it.

**Pick Svelte when:** Bundle size and runtime performance matter, you want less code per feature, or you're building something small enough that ecosystem size doesn't bite you.

**Pick Solid when:** You like JSX but want better performance, and you're willing to accept a smaller ecosystem.

**Pick Qwik when:** You're building an SEO-critical e-commerce or marketing site where initial load time is the top metric.

**Pick Preact when:** You need React's API but can't afford React's bundle size.

**Pick HTMX when:** Your app is mostly server-rendered and a full SPA framework feels like overkill.

**Honest reality:** For most jobs in 2026, React wins not because it's technically superior to Svelte or Solid, but because of network effects. The ecosystem, the hiring pool, the tooling, and the AI assistants that know it best all reinforce each other. The "better" frameworks have to clear a high bar to dislodge it.

---

## 74. Migration Cheat Sheet: Class to Hooks

When you inherit a pre-2019 codebase, you'll see class components everywhere. Here's how to translate them.

**Side-by-side example:**

```jsx
// CLASS
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }
  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }
  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return <button onClick={this.increment}>{this.state.count}</button>;
  }
}

// HOOKS
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

**Translation table:**

| Class pattern | Hooks equivalent |
|---------------|------------------|
| `class extends React.Component` | `function MyComponent()` |
| `constructor` setting `this.state` | `const [x, setX] = useState(initial)` |
| `this.state = { a, b }` | one `useState` per piece, or `useReducer` for a group |
| `this.setState({ x: 1 })` | `setX(1)` |
| `this.setState(prev => ({ x: prev.x + 1 }))` | `setX(prev => prev + 1)` |
| `this.props.x` | destructure in params: `function Foo({ x })` |
| `componentDidMount` | `useEffect(() => {}, [])` |
| `componentDidUpdate(prevProps)` | `useEffect(() => {}, [deps])` |
| `componentWillUnmount` | cleanup function in `useEffect` |
| `getDerivedStateFromProps` | compute during render |
| `shouldComponentUpdate` | wrap with `React.memo` |
| `getSnapshotBeforeUpdate` | `useLayoutEffect` |
| `static contextType` / `Context.Consumer` | `useContext(Context)` |
| `this.refs.input` or `createRef` | `useRef` |
| `bind(this)` in constructor | unnecessary, no `this` to bind |
| Arrow class properties for methods | regular `const handle = () => {}` |
| `getDerivedStateFromError` / `componentDidCatch` | still class-only (error boundaries) |

**Gotchas during migration:**

- **`setState` merges, `useState` replaces.** `this.setState({ x: 1 })` keeps other state keys. `setX(1)` replaces the whole value. Use multiple `useState` calls, or spread for object state: `setForm({ ...form, x: 1 })`.
- **No more `this`.** No binding, no class properties, no `this.props`. Destructure props in the function signature.
- **Lifecycle is now effect-based.** `componentDidUpdate` checking `if (prevProps.x !== this.props.x)` becomes `useEffect(() => {}, [x])`. Cleaner.
- **Stale closures.** A function created during one render sees that render's values. Use functional setters (`setX(prev => ...)`) or include changing values in the dependency array.
- **Split effects by concern.** You no longer need one giant `componentDidMount`. Use multiple `useEffect`s for unrelated side effects.

**Order to migrate one component:**

1. Convert the class declaration to a function.
2. Move `this.state` to `useState` calls.
3. Replace `this.setState` with the setters.
4. Move lifecycle methods into one or more `useEffect`s.
5. Replace refs with `useRef`.
6. Run the tests. Add tests if you didn't have them.
7. Delete the class file once the function version is verified.

---

## 75. Common Interview Questions

The questions you'll actually be asked. Brief answers; expand based on the role.

### Fundamentals

**What is React?**
A JavaScript library for building UIs from composable components. Declarative, component-based, one-way data flow.

**What is JSX?**
HTML-like syntax that compiles to `React.createElement()` calls. Still JavaScript; embed expressions with `{}`.

**Props vs state?**
Props are inputs passed from a parent; read-only. State is data a component owns and can change. Both trigger re-renders when they change.

**What is the virtual DOM?**
An in-memory representation of the UI. React diffs the new tree against the previous one (reconciliation) and applies the minimum changes to the real DOM.

**Why are keys important in lists?**
Keys let React identify which items changed, were added, or removed. Without stable keys, React may reuse the wrong DOM nodes when items reorder.

**Controlled vs uncontrolled components?**
Controlled: React state owns the input value. Uncontrolled: DOM owns it, you read via a ref. Controlled is the default.

**What is one-way data flow?**
Data flows down via props. To send data up, a parent passes a callback the child calls.

### Hooks

**Rules of hooks?**
Only call at the top level of a component or another hook. No loops, conditions, or nested functions. React tracks hooks by call order.

**When does `useEffect` run?**
After every render by default. With `[]`: once after mount. With `[a, b]`: when `a` or `b` changed. Cleanup runs before the next effect or on unmount.

**`useMemo` vs `useCallback`?**
`useMemo` caches a value. `useCallback` caches a function. `useCallback(fn, deps)` is shorthand for `useMemo(() => fn, deps)`.

**`useState` vs `useReducer`?**
`useState` for simple values. `useReducer` when state has many action types or transitions you want to test independently.

**What's a custom hook?**
A function whose name starts with `use` that calls other hooks. Packages reusable stateful logic.

**What is `useRef` used for?**
Two things: referencing a DOM node, or holding any mutable value that persists between renders without triggering a re-render.

**What does `useContext` do?**
Reads a value from the nearest matching `Context.Provider` above in the tree. Avoids prop drilling.

### Performance

**What causes a component to re-render?**
Its state changed, its props changed, its parent re-rendered, a context it consumes changed, or a hook returned a new value.

**How do you prevent unnecessary re-renders?**
`React.memo` for pure components, `useMemo` for expensive values, `useCallback` for stable function references, splitting components, lifting state down.

**What's `React.memo`?**
A higher-order component that skips re-rendering when props haven't changed (shallow compare).

**What is reconciliation?**
The diffing process. React compares the new element tree to the previous one and applies the minimum DOM operations needed.

### Advanced

**What are Server Components?**
Components that render only on the server, ship zero JS to the client. Used in Next.js App Router and similar frameworks.

**What is Suspense?**
A boundary that shows a fallback UI while children are still loading (a lazy import, a promise via `use`, etc.).

**SSR vs SSG vs CSR?**
SSR builds HTML per request on the server. SSG builds HTML once at build time. CSR ships JS that builds HTML in the browser. Most apps mix all three.

**What is concurrent rendering?**
React's ability to start, pause, and discard render work. Activated via `useTransition`, `useDeferredValue`, and Suspense for data. Enabled by default in React 18+.

**How do error boundaries work?**
A class component implementing `getDerivedStateFromError` or `componentDidCatch` catches errors thrown during render in its subtree and shows fallback UI. Doesn't catch event handler or async errors.

**What is hydration?**
When the browser receives server-rendered HTML, React attaches event handlers and state to the existing DOM instead of re-rendering. Mismatches between server and client output cause hydration errors.

**What is automatic batching?**
React batches multiple state updates within a tick into a single re-render. Before 18 this worked only in React event handlers; since 18 it works everywhere including timeouts and promises.

**Synthetic events vs DOM events?**
React wraps native events in a cross-browser `SyntheticEvent` object. Same API as native events, with camelCase handler names. Event delegation happens at the React root, not `document` (since React 17).

### Coding exercises commonly asked

- Build a counter with increment, decrement, and reset.
- Build a todo list with add, complete, delete.
- Build a search-filterable list (controlled input filtering an array).
- Fetch and display data from an API with loading and error states.
- Implement a debounced search input.
- Write a custom hook: `useLocalStorage`, `useFetch`, or `useDebounce`.
- Build a modal using a portal with proper focus management.
- Build an infinite-scroll list or a paginated one.

### Behavioral questions tied to React

- Tell me about a tough bug you fixed. (Stale closures, infinite render loops, and hydration mismatches are good stories.)
- How do you decide where state should live? (Lift up when shared, push down when local.)
- When have you used `useMemo` or `useCallback` and why?
- Have you migrated a class component to hooks? Walk me through it.
- How do you approach performance issues in a React app? (Profiler first, then targeted optimizations.)

---

*MIT License. Free to share and adapt.*
