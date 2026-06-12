# ⚡ Frontend Developer — 150 Coding Practice Questions
## What Companies Actually Ask (2025 Research)

> Sources: GreatFrontEnd, Frontend Interview Handbook, Devtools Tech (200+ real questions),
> GeeksforGeeks Machine Coding, real reports from Flipkart, Razorpay, Google, Meta,
> Atlassian, Microsoft, Walmart, Rippling, CRED, Swiggy, Meesho

---

## How Many Questions Do You Need?

| Category | Count | Why |
|---|---|---|
| JS Utility / Polyfills | 53 | Asked at EVERY company. Debounce alone = 60%+ of rounds |
| Array / Object Manipulation | 16 | Indian startup bread and butter |
| Output-Based (what does this print?) | 24 | Fast filter questions. Companies use these in screening |
| React Coding Problems | 17 | Custom hooks, fix bugs, optimize |
| UI Component Machine Coding | 10 | 30–60 min builds. Atlassian, Microsoft, CRED |
| Algorithms (frontend-relevant) | 16 | Easier than LeetCode but still asked |
| JS Concepts (explain + code) | 14 | Verbal or written in screening rounds |

**Total: 150 questions**
**Realistic prep: 3–4 hours/day × 3 weeks = interview-ready**

---

## Priority System

```
🔴 P1 — Must know. Asked everywhere. Do these first.
🟡 P2 — Important. Asked at mid-to-senior level rounds.
🟢 P3 — Senior/hard level. Bonus points. Do after P1 + P2.
```

---

## Companies and Their Focus

| Company | What They Heavily Test |
|---|---|
| Flipkart | Debounce, array methods, React optimization, machine coding |
| Razorpay | Promise polyfills, price calculators, clean JS |
| Swiggy / Zomato | Machine coding (build a UI), React hooks, performance |
| CRED | Advanced JS patterns, closures, this, prototype chain |
| Meesho | Data manipulation, algorithms, custom hooks |
| Atlassian | File explorer, tree structures, complex DOM manipulation |
| Microsoft | Country capital game, algorithmic thinking, React |
| Meta / Facebook | EventEmitter, virtual DOM, React internals |
| Google | Deep JS knowledge, async, algorithmic complexity |
| Walmart | Throttle, debounce, async queues, clean architecture |
| Rippling | Async task runner with concurrency control, complex state |

---

## 3-Week Practice Schedule

```
WEEK 1 — Foundation
  Day 1–2:  Section 1A  (Array polyfills Q1–Q10)
  Day 3–4:  Section 1B  (Function utilities Q11–Q23)
  Day 5–6:  Section 3   (ALL output questions Q71–Q94)
  Day 7:    Section 1D  (Promise polyfills Q37–Q46)

WEEK 2 — Core Skills
  Day 8–9:  Section 1C  (Object utilities Q25–Q36)
  Day 10–11: Section 2  (Array/object manipulation Q54–Q70)
  Day 12–13: Section 4  (React hooks + fix bugs Q95–Q111)
  Day 14:   Section 1E  (DOM polyfills + EventEmitter Q47–Q53)

WEEK 3 — Hard + Machine Coding
  Day 15–16: Section 5  (UI machine coding Q112–Q121)
  Day 17–18: Section 6  (Algorithms Q122–Q137)
  Day 19–20: Section 1B (compose, pipe, curry Q16–Q23 — revisit)
  Day 21:   Section 7   (JS concepts Q138–Q150 — revisit weak spots)
```

---

## Scoring Guide

```
✅ Solved correctly, clean code, handled edge cases  → move on
⚠️  Solved but messy / missed edge cases             → revisit in 2 days
❌  Couldn't solve or wrong answer                   → mark for deep study
```

**Minimum bar before interview:**
- ✅ on ALL Section 1 questions (Q1–Q53)
- ✅ on ALL output questions (Q71–Q94)
- ✅ on at least 8 React questions (Q95–Q111)
- At least 2 UI machine coding components built (Q112–Q121)

---
---

# SECTION 1 — JavaScript Utility / Polyfill Questions
### The most asked category. Master these first.

**Rule:** Implement from scratch without using the native method.
Every array polyfill must attach to `Array.prototype` and handle:
- `thisArg` parameter in callback
- Callback receives `(element, index, array)`
- Sparse arrays

---

## 1A — Array Prototype Polyfills

| # | Question | Priority | Asked By |
|---|---|---|---|
| Q1 | Implement `Array.prototype.map()` | 🔴 P1 | Everyone |
| Q2 | Implement `Array.prototype.filter()` | 🔴 P1 | Everyone |
| Q3 | Implement `Array.prototype.reduce()` | 🔴 P1 | Everyone |
| Q4 | Implement `Array.prototype.forEach()` | 🔴 P1 | Everyone |
| Q5 | Implement `Array.prototype.find()` | 🔴 P1 | Flipkart, Meesho |
| Q6 | Implement `Array.prototype.findIndex()` | 🔴 P1 | Flipkart |
| Q7 | Implement `Array.prototype.every()` | 🟡 P2 | Mid-level rounds |
| Q8 | Implement `Array.prototype.some()` | 🟡 P2 | Mid-level rounds |
| Q9 | Implement `Array.prototype.flat(depth)` | 🟡 P2 | Swiggy, CRED |
| Q10 | Implement `Array.prototype.flatMap()` | 🟡 P2 | CRED, Meesho |

---

## 1B — Function Utilities

| # | Question | Priority | Asked By |
|---|---|---|---|
| Q11 | Implement `debounce(fn, delay)` — fires fn only after user stops calling for `delay` ms | 🔴 P1 | Flipkart, Swiggy, everywhere |
| Q12 | Implement `throttle(fn, delay)` — fires fn at most once per `delay` ms | 🔴 P1 | Walmart, Meesho |
| Q13 | Implement `once(fn)` — fn can only be called once, subsequent calls return first result | 🔴 P1 | Razorpay, CRED |
| Q14 | Implement `memoize(fn)` — cache results by arguments, same args = return cached | 🔴 P1 | Google, CRED |
| Q15 | Implement `debounce` with leading + trailing options | 🟡 P2 | Google, advanced rounds |
| Q16 | Implement `compose(...fns)` — `compose(f,g,h)(x)` = `f(g(h(x)))` right to left | 🟡 P2 | CRED, senior rounds |
| Q17 | Implement `pipe(...fns)` — `pipe(f,g,h)(x)` = `h(g(f(x)))` left to right | 🟡 P2 | CRED, senior rounds |
| Q18 | Implement `curry(fn)` — `curry(add)(1)(2)(3)` works same as `add(1,2,3)` | 🟡 P2 | Flipkart, Razorpay |
| Q19 | Implement infinite currying — `add(1)(2)(3)()` call with no args to get result | 🟢 P3 | Advanced rounds |
| Q20 | Implement `partial(fn, ...args)` — `partial(add, 5)` returns fn that adds 5 | 🟡 P2 | Senior rounds |
| Q21 | Implement `Function.prototype.bind()` from scratch | 🔴 P1 | Everyone |
| Q22 | Implement `Function.prototype.call()` from scratch | 🔴 P1 | Everyone |
| Q23 | Implement `Function.prototype.apply()` from scratch | 🔴 P1 | Everyone |

---

## 1C — Object Utilities

| # | Question | Priority | Asked By |
|---|---|---|---|
| Q24 | Implement `Object.assign()` from scratch | 🔴 P1 | Common |
| Q25 | Implement `deepClone(obj)` — handles nested objects, arrays, null, primitives | 🔴 P1 | Meta, Flipkart, everyone |
| Q26 | Implement `isEqual(a, b)` — deep equality check | 🟡 P2 | CRED, Google |
| Q27 | Implement `flattenObject(obj)` — `{a:{b:{c:1}}}` → `{"a.b.c": 1}` | 🟡 P2 | Atlassian, AWS |
| Q28 | Implement `get(obj, path, default)` — safe deep access like Lodash `_.get` | 🔴 P1 | AWS, Flipkart |
| Q29 | Implement `set(obj, path, value)` — deep set, creates nested keys if needed | 🟡 P2 | AWS, senior rounds |
| Q30 | Implement `groupBy(arr, key)` — Lodash `_.groupBy()` | 🔴 P1 | Meesho, Razorpay |
| Q31 | Implement `chunk(arr, size)` — `[1,2,3,4,5]` → `[[1,2],[3,4],[5]]` | 🔴 P1 | Lodash polyfill round |
| Q32 | Implement `pick(obj, keys)` — `pick({a,b,c}, ["a","c"])` → `{a,c}` | 🟡 P2 | Rippling, LinkedIn |
| Q33 | Implement `omit(obj, keys)` — `omit({a,b,c}, ["b"])` → `{a,c}` | 🟡 P2 | LinkedIn |
| Q34 | Convert all object keys to `camelCase` recursively | 🟡 P2 | Atlassian, API-heavy companies |
| Q35 | Convert all object keys to `snake_case` recursively | 🟡 P2 | Atlassian |
| Q36 | Implement deep merge of two objects — `{a:{b:1}}` + `{a:{c:2}}` → `{a:{b:1,c:2}}` | 🟡 P2 | Senior rounds |

---

## 1D — Promise / Async Polyfills

| # | Question | Priority | Asked By |
|---|---|---|---|
| Q37 | Implement `Promise.all(promises)` — resolves when ALL resolve, rejects on first failure | 🔴 P1 | Google, Meta, everywhere |
| Q38 | Implement `Promise.allSettled(promises)` — resolves with `[{status, value/reason}]` | 🔴 P1 | Mid-senior rounds |
| Q39 | Implement `Promise.race(promises)` — resolves/rejects with FIRST settled | 🟡 P2 | Senior rounds |
| Q40 | Implement `Promise.any(promises)` — first fulfilled wins, all reject = AggregateError | 🟡 P2 | Senior rounds |
| Q41 | Implement `retry(fn, times)` — retries async function up to N times before throwing | 🔴 P1 | Razorpay, Swiggy |
| Q42 | Implement `sleep(ms)` — returns a promise that resolves after ms milliseconds | 🔴 P1 | Common warm-up |
| Q43 | Implement `timeout(promise, ms)` — rejects with "Timeout" if not resolved within ms | 🟡 P2 | Razorpay |
| Q44 | Implement async task queue with concurrency limit — run max N tasks at once | 🟢 P3 | Rippling |
| Q45 | Implement `Promise.allWithConcurrencyLimit(promises, limit)` | 🟢 P3 | Advanced rounds |
| Q46 | Implement a basic Promise class from scratch — `.then()`, `.catch()`, `.finally()`, chaining | 🟢 P3 | Google, FAANG |

---

## 1E — DOM API Polyfills + EventEmitter

| # | Question | Priority | Asked By |
|---|---|---|---|
| Q47 | Implement `document.getElementsByClassName()` from scratch | 🟡 P2 | Frontend handbook standard |
| Q48 | Implement `document.getElementsByTagName()` from scratch | 🟡 P2 | Frontend handbook standard |
| Q49 | Implement `document.querySelector()` — simplified version | 🟢 P3 | Advanced DOM rounds |
| Q50 | Implement `EventEmitter` class — `.on()`, `.off()`, `.emit()`, `.once()` | 🔴 P1 | Meta/Facebook, everywhere |
| Q51 | Implement a pub/sub system — `subscribe()`, `publish()`, `unsubscribe()` | 🟡 P2 | Senior rounds |
| Q52 | Implement `JSON.stringify()` from scratch — objects, arrays, null, primitives | 🟡 P2 | Google, FAANG |
| Q53 | Implement virtual DOM `render()` — `render({tag, props, children})` → real DOM node | 🟢 P3 | Meta, advanced |

---
---

# SECTION 2 — Array / Object Manipulation
### Indian startup favorite. Your dataset practice directly applies here.

| # | Question | Priority | What to implement |
|---|---|---|---|
| Q54 | Flatten a deeply nested array to any depth | 🔴 P1 | `[1,[2,[3]]]` → `[1,2,3]` |
| Q55 | Remove duplicates from an array (3 approaches) | 🔴 P1 | Set, filter+indexOf, reduce |
| Q56 | Find the most frequent element in an array | 🔴 P1 | Frequency map approach |
| Q57 | Group anagrams together | 🟡 P2 | `["eat","tea","tan"]` → `[["eat","tea"],["tan"]]` |
| Q58 | Find all pairs in array that sum to target | 🔴 P1 | Two-pointer or Map approach |
| Q59 | Move all zeroes to end, preserve order, in-place | 🔴 P1 | `[0,1,0,3]` → `[1,3,0,0]` |
| Q60 | Find intersection of two arrays without Set | 🟡 P2 | Map-based approach |
| Q61 | Sort array of objects by multiple keys | 🟡 P2 | Sort by `lastName` then `firstName` on tie |
| Q62 | Find duplicates in array of objects by a key | 🟡 P2 | `groupBy` then filter length > 1 |
| Q63 | Convert flat parent-child array to nested tree | 🟡 P2 | `[{id,parent}]` → `{id, children:[...]}` |
| Q64 | Convert nested tree back to flat parent-child array | 🟡 P2 | Reverse of Q63 |
| Q65 | Implement LRU Cache — `get(key)`, `set(key, value)` | 🟢 P3 | Map + doubly linked list |
| Q66 | Implement a simple observable — subscribers notified on value change | 🟢 P3 | Pattern: pub/sub on variable |
| Q67 | Find longest word chain — each word starts with last letter of previous | 🟢 P3 | Graph/DFS approach |
| Q68 | Serialize a tree to a string and deserialize back | 🟢 P3 | BFS serialization |
| Q69 | Given a nested comment thread (Reddit-style), render in order with depth | 🟡 P2 | Recursive flatten with depth tracking |

---
---

# SECTION 3 — Output-Based Questions
### Answer in your head first. Then verify. Fast practice, huge return.

---

## 3A — Closures + Scope

**Q71 — The Classic Loop Bug** 🔴 P1
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000)
}
// What prints? Why? How do you fix it with let? How with IIFE?
```

---

**Q72 — Closure Memory** 🔴 P1
```js
function makeAdder(x) {
  return function(y) { return x + y }
}
const add5 = makeAdder(5)
console.log(add5(3))   // ?
console.log(add5(10))  // ?
```

---

**Q73 — this in setTimeout with regular function** 🔴 P1
```js
const obj = {
  name: "Kaushik",
  greet: function() {
    setTimeout(function() {
      console.log("Hello " + this.name)
    }, 100)
  }
}
obj.greet()
// What prints? Why? How do you fix it?
```

---

**Q74 — this in setTimeout with arrow function** 🔴 P1
```js
const obj = {
  name: "Kaushik",
  greet: function() {
    setTimeout(() => {
      console.log("Hello " + this.name)
    }, 100)
  }
}
obj.greet()
// What prints? Why is this different from Q73?
```

---

## 3B — Hoisting

**Q75 — var hoisting** 🔴 P1
```js
console.log(a)
var a = 5
console.log(a)
// What prints on each line?
```

---

**Q76 — let hoisting (TDZ)** 🔴 P1
```js
console.log(b)
let b = 5
// What happens?
```

---

**Q77 — Function declaration hoisting** 🔴 P1
```js
foo()
function foo() { console.log("foo") }
// Works or throws? Why?
```

---

**Q78 — Function expression hoisting** 🔴 P1
```js
bar()
var bar = function() { console.log("bar") }
// Works or throws? Why is this different from Q77?
```

---

**Q79 — var inside function** 🟡 P2
```js
var x = 1
function test() {
  console.log(x)
  var x = 2
  console.log(x)
}
test()
// What prints on each line?
```

---

## 3C — Event Loop + Async Order

**Q80 — The Classic Event Loop** 🔴 P1
```js
console.log("1")
setTimeout(() => console.log("2"), 0)
Promise.resolve().then(() => console.log("3"))
console.log("4")
// What is the order? Why?
// Answer: 1, 4, 3, 2
// Microtask queue (Promise) runs before macrotask queue (setTimeout)
```

---

**Q81 — async/await order** 🔴 P1
```js
async function main() {
  console.log("A")
  await Promise.resolve()
  console.log("B")
  await Promise.resolve()
  console.log("C")
}
console.log("X")
main()
console.log("Y")
// Order?
// Answer: X, A, Y, B, C
```

---

**Q82 — Promise chaining output** 🟡 P2
```js
Promise.resolve(1)
  .then(x => { console.log(x); return x + 1 })
  .then(x => { console.log(x); return x + 1 })
  .then(x => console.log(x))
// Output?
// Answer: 1, 2, 3
```

---

**Q83 — async function return type** 🟡 P2
```js
async function fetchData() {
  return 42
}
fetchData().then(console.log)
// Output? What type does fetchData() return?
// Answer: 42 — async always returns a Promise
```

---

**Q84 — microtask vs macrotask** 🔴 P1
```js
setTimeout(() => console.log("timeout"), 0)
Promise.resolve().then(() => console.log("promise"))
queueMicrotask(() => console.log("microtask"))
console.log("sync")
// Order?
// Answer: sync, promise, microtask, timeout
// Both Promise.then and queueMicrotask are microtasks — run before setTimeout
```

---

## 3D — `this` Keyword

**Q85 — method vs arrow** 🔴 P1
```js
const person = {
  name: "Kaushik",
  getName: function() { return this.name },
  getNameArrow: () => this.name
}
console.log(person.getName())        // ?
console.log(person.getNameArrow())   // ?
// getName → "Kaushik"
// getNameArrow → undefined (arrow has no own this, inherits global/undefined in strict)
```

---

**Q86 — method extracted from object** 🔴 P1
```js
const greet = person.getName
console.log(greet())
// What prints? Why is this different from person.getName()?
// Answer: undefined — this is now global/undefined when called without object
```

---

**Q87 — this in class with callback** 🟡 P2
```js
function Counter() {
  this.count = 0
  setInterval(function() {
    this.count++
    console.log(this.count)
  }, 1000)
}
new Counter()
// What happens? How do you fix it?
// Bug: this inside setInterval callback is window/undefined
// Fix: arrow function OR save this to const self = this
```

---

## 3E — Type Coercion + Equality

**Q88 — Abstract equality edge cases** 🔴 P1
```js
console.log([] == ![])     // ?  → true
console.log([] + [])       // ?  → ""
console.log([] + {})       // ?  → "[object Object]"
console.log({} + [])       // ?  → 0 (when {} is a block) OR "[object Object]" as expression
```

---

**Q89 — == vs ===** 🔴 P1
```js
console.log(0 == "0")          // ?  → true
console.log(0 === "0")         // ?  → false
console.log(null == undefined) // ?  → true
console.log(null === undefined)// ?  → false
console.log(NaN === NaN)       // ?  → false (only value not equal to itself)
```

---

**Q90 — typeof edge cases** 🔴 P1
```js
console.log(typeof null)         // ?  → "object" (historical bug in JS)
console.log(typeof undefined)    // ?  → "undefined"
console.log(typeof NaN)          // ?  → "number"
console.log(typeof function(){}) // ?  → "function"
console.log(typeof [])           // ?  → "object"
```

---

**Q91 — string + number coercion** 🔴 P1
```js
console.log(1 + "2" + 3)   // ?  → "123"  (left to right, + with string = concat)
console.log(1 + 2 + "3")   // ?  → "33"   (1+2=3 first, then 3+"3"="33")
console.log("3" - 1)       // ?  → 2      (- forces numeric conversion)
console.log("3" * "2")     // ?  → 6      (* forces numeric conversion)
console.log(true + true)   // ?  → 2      (true = 1)
```

---

## 3F — Prototype + Inheritance

**Q92 — own vs inherited property** 🟡 P2
```js
function Animal(name) {
  this.name = name
}
Animal.prototype.speak = function() {
  return `${this.name} speaks`
}
const dog = new Animal("Rex")
console.log(dog.speak())                    // ?  → "Rex speaks"
console.log(dog.hasOwnProperty("name"))     // ?  → true
console.log(dog.hasOwnProperty("speak"))    // ?  → false (it's on prototype)
```

---

**Q93 — instanceof and prototype chain** 🟡 P2
```js
const arr = [1, 2, 3]
console.log(arr instanceof Array)    // ?  → true
console.log(arr instanceof Object)   // ?  → true
// Why both true? Because Array.prototype is in Object's prototype chain
```

---

**Q94 — missing super in class** 🟡 P2
```js
class A {
  constructor() { this.x = 1 }
}
class B extends A {
  constructor() {
    this.y = 2   // super() missing
  }
}
const b = new B()
// What happens?
// Answer: ReferenceError — must call super() before using this in derived class
```

---
---

# SECTION 4 — React Coding Problems
### Custom hooks, broken code fixes, optimization patterns

| # | Question | Priority | Concept |
|---|---|---|---|
| Q95 | Implement `useDebounce(value, delay)` custom hook | 🔴 P1 | useEffect + setTimeout |
| Q96 | Implement `useThrottle(value, delay)` custom hook | 🟡 P2 | useRef + setTimeout |
| Q97 | Implement `useLocalStorage(key, initialValue)` hook — reads on mount, syncs on change | 🔴 P1 | useState + useEffect |
| Q98 | Implement `useFetch(url)` hook — returns `{data, loading, error}`, cancels on unmount | 🔴 P1 | useEffect + AbortController |
| Q99 | Implement `usePrevious(value)` hook — returns previous render's value | 🟡 P2 | useRef |
| Q100 | Implement `useWindowSize()` hook — `{width, height}`, updates on resize | 🟡 P2 | useState + event listener cleanup |
| Q101 | Implement `useOnClickOutside(ref, handler)` hook — fires handler on click outside ref | 🟡 P2 | useEffect + document event |
| Q102 | Implement `useIntersectionObserver(ref)` hook — returns `isIntersecting` boolean | 🟢 P3 | IntersectionObserver API |
| Q103 | Fix bug — stale closure in `setInterval` inside `useEffect` | 🔴 P1 | Functional update `setCount(c => c+1)` |
| Q104 | Fix bug — infinite render loop from `useEffect` dependency | 🔴 P1 | Dependency array rules |
| Q105 | Fix bug — `React.memo` component still re-renders. Why? Fix it. | 🔴 P1 | `useCallback` on handler passed as prop |
| Q106 | Build reusable `Pagination` component — `{totalItems, perPage, currentPage, onChange}` | 🔴 P1 | Derived pages, no library |
| Q107 | Build reusable `Modal` component — Escape key, backdrop click, focus trap, `createPortal` | 🟡 P2 | ReactDOM.createPortal, keyboard events |
| Q108 | Implement `useForm(initialValues, validate)` hook — values, touched, errors, handleSubmit | 🟡 P2 | Controlled form pattern |
| Q109 | Implement HOC `withLogger(Component)` — logs mount, update with prev/next props | 🟢 P3 | Higher-order component pattern |
| Q110 | Implement context + reducer global store — `createStore(reducer, initialState)` | 🟢 P3 | Context + useReducer combined |
| Q111 | Build `useReducerWithMiddleware` — useReducer + middleware support (logging, analytics) | 🟢 P3 | Middleware pattern |

---

### Q103 Expanded — Stale Closure Bug 🔴 P1

```jsx
// BUG — count is always 0 inside setInterval
function Counter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1)   // ← stale closure: count captured at 0
    }, 1000)
    return () => clearInterval(id)
  }, [])                    // ← empty deps = never re-runs = count stays 0
  return <div>{count}</div>
}

// FIX — use functional update form
useEffect(() => {
  const id = setInterval(() => {
    setCount(c => c + 1)   // ← no closure on count — always uses latest
  }, 1000)
  return () => clearInterval(id)
}, [])
```

---

### Q104 Expanded — Infinite Loop Bug 🔴 P1

```jsx
// BUG — setData triggers re-render, re-render triggers useEffect, loop
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    setData([1, 2, 3])
  }, [data])               // ← data changes every render = infinite
  return <div>{data.join(",")}</div>
}

// FIX 1 — empty deps (run once)
useEffect(() => { setData([1, 2, 3]) }, [])

// FIX 2 — if you need to react to data, add a condition
useEffect(() => {
  if (data.length === 0) setData([1, 2, 3])
}, [data])
```

---

### Q105 Expanded — React.memo Still Re-renders 🔴 P1

```jsx
// BUG — handleDelete is recreated every Parent render
// React.memo compares props shallowly — new function reference = re-render
function Parent() {
  const [count, setCount] = useState(0)
  const handleDelete = (id) => { /* delete */ }   // ← new ref every render

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <ProductList products={products} onDelete={handleDelete} />
    </>
  )
}

// FIX — useCallback makes the function reference stable
const handleDelete = useCallback((id) => { /* delete */ }, [])
// Now React.memo works — ProductList skips re-render when count changes
```

---
---

# SECTION 5 — UI Component Machine Coding
### 30–60 min builds. Asked by Atlassian, Microsoft, CRED, Meesho

| # | Question | Priority | Key Constraints |
|---|---|---|---|
| Q112 | Build a Star Rating component | 🔴 P1 | Clickable, hoverable, supports half-stars |
| Q113 | Build an Accordion component | 🔴 P1 | Only 1 panel open at a time, smooth animation |
| Q114 | Build an Infinite Scroll list | 🟡 P2 | IntersectionObserver, fetch next page on bottom |
| Q115 | Build a multi-level Dropdown Menu | 🟡 P2 | From JSON config, close on outside click, keyboard nav |
| Q116 | Build a Tabs component | 🔴 P1 | Controlled + uncontrolled, keyboard accessible |
| Q117 | Build a Toast / Notification system | 🟡 P2 | Stack toasts, auto-dismiss, multiple types |
| Q118 | Build a File Explorer (VS Code sidebar style) | 🟢 P3 | Expand/collapse, from nested JSON — Atlassian |
| Q119 | Build a drag-to-reorder list | 🟢 P3 | Plain JS mouse events only, no library |
| Q120 | Build an autocomplete / typeahead input | 🟡 P2 | Debounced API, keyboard nav, highlight matching text |
| Q121 | Build concurrent Progress Bars with concurrency limit | 🟡 P2 | N bars, max 3 running at once, pause/resume |

---
---

# SECTION 6 — Algorithms (Frontend-Relevant Only)
### Easier than LeetCode backend rounds. Focus on these patterns only.

| # | Question | Priority | Pattern |
|---|---|---|---|
| Q122 | Two Sum — find pair that adds to target | 🔴 P1 | HashMap O(n) |
| Q123 | Reverse a string — multiple approaches | 🔴 P1 | Two pointer, spread+reverse |
| Q124 | Palindrome check | 🔴 P1 | Two pointer |
| Q125 | Valid parentheses — `()[]{}` check | 🔴 P1 | Stack |
| Q126 | Implement a stack using only 2 queues | 🟡 P2 | Queue simulation |
| Q127 | Implement a queue using only 2 stacks | 🟡 P2 | Stack simulation |
| Q128 | Fibonacci with memoization | 🔴 P1 | Recursion + cache |
| Q129 | Count ways to climb N stairs (1 or 2 steps) | 🟡 P2 | Dynamic programming |
| Q130 | Binary search — iterative + recursive | 🔴 P1 | Divide and conquer |
| Q131 | Merge two sorted arrays into one sorted array | 🟡 P2 | Two pointer |
| Q132 | Tree traversal: BFS and DFS on DOM-like object | 🔴 P1 | Queue for BFS, recursion for DFS |
| Q133 | Find the deepest node in a tree | 🟡 P2 | BFS level tracking |
| Q134 | Serialize and deserialize a binary tree | 🟢 P3 | BFS + split string |
| Q135 | Detect cycle in a linked list | 🟡 P2 | Floyd's two-pointer |
| Q136 | Reverse a linked list — iterative + recursive | 🟡 P2 | Pointer manipulation |
| Q137 | Implement a Trie (prefix tree) — insert, search, startsWith | 🟢 P3 | Useful for autocomplete |

---
---

# SECTION 7 — JavaScript Concepts (Explain + Code)
### Asked verbally or as written output in screening rounds.

| # | Question | Priority | What to demonstrate |
|---|---|---|---|
| Q138 | Explain hoisting — var, let, const, function declarations | 🔴 P1 | Code demo all 4 cases |
| Q139 | Explain Temporal Dead Zone (TDZ) | 🔴 P1 | let/const before declaration |
| Q140 | Explain closure with a real use case (not just "inner accesses outer") | 🔴 P1 | Counter, memoize, module pattern |
| Q141 | Explain: call stack → callback queue → microtask queue → event loop | 🔴 P1 | Code demo with console.logs |
| Q142 | Demonstrate Promise vs setTimeout execution order | 🔴 P1 | Same as Q80 but explain WHY |
| Q143 | Explain prototype chain — how property lookup works | 🔴 P1 | Draw/write the chain |
| Q144 | Write 5 surprising `==` vs `===` examples | 🔴 P1 | null==undefined, []==false, etc. |
| Q145 | Write a generator function — implement a `range(start, end, step)` generator | 🟡 P2 | `function*`, `yield` |
| Q146 | Explain WeakMap vs Map — when to use WeakMap | 🟡 P2 | Garbage collection, DOM node cache |
| Q147 | Implement a validation Proxy on an object | 🟡 P2 | `new Proxy(obj, handler)` |
| Q148 | Explain structuredClone vs JSON.parse(JSON.stringify()) — key differences | 🟡 P2 | Handles Date, undefined, circular |
| Q149 | Write a tagged template literal that sanitizes HTML | 🟢 P3 | Template tag function |
| Q150 | Explain CommonJS vs ESM — 3 key differences with examples | 🟡 P2 | require vs import, sync vs async, static vs dynamic |

---
---

## Quick Reference — P1 Questions Only (Do These Before Anything Else)

```
Section 1A: Q1, Q2, Q3, Q4, Q5, Q6
Section 1B: Q11, Q12, Q13, Q14, Q21, Q22, Q23
Section 1C: Q24, Q25, Q28, Q30, Q31
Section 1D: Q37, Q38, Q41, Q42
Section 1E: Q50
Section 2:  Q54, Q55, Q56, Q58, Q59
Section 3:  Q71, Q72, Q73, Q74, Q75, Q76, Q77, Q78, Q80, Q81, Q84, Q85, Q86, Q88, Q89, Q90, Q91
Section 4:  Q95, Q97, Q98, Q103, Q104, Q105, Q106
Section 5:  Q112, Q113, Q116
Section 6:  Q122, Q123, Q124, Q125, Q128, Q130, Q132
Section 7:  Q138, Q139, Q140, Q141, Q142, Q143, Q144
```

**P1 count: 57 questions — do these in Week 1 + Week 2**
**P2 count: 63 questions — Week 2 + Week 3**
**P3 count: 30 questions — Week 3, interview-bonus level**

---

*Total: 150 questions across 7 sections*
*Estimated total practice time: 60–80 hours*
*3–4 hours per day × 3 weeks = interview-ready*
