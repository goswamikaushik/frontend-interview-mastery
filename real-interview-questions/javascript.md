# 🟡 JavaScript — Real Interview Questions

> Curated from real interview experiences shared on LinkedIn.
> Similar questions are grouped together — alternate phrasings shown as sub-bullets.

---

## 🔹 Execution Model & Engine Internals

1. **What is an Execution Context in JavaScript?**
   - _Also asked as:_ Explain the JavaScript execution context, call stack, and memory creation phase.
   - _Also asked as:_ What is the difference between Memory Creation Phase vs Execution Phase?

2. **What is the Call Stack?**
   - _Also asked as:_ How does the call stack relate to execution contexts?

3. **What is Lexical Environment and Variable Environment?**

4. **How does Garbage Collection work in JavaScript?**

5. **What is Stack Memory and Heap Memory?**
   - _Also asked as:_ How does JavaScript store primitives and objects internally?

6. **Primitive vs Reference Data Types — what's the difference?**
   - _Also asked as:_ How are objects stored differently from primitives?

---

## 🔹 Closures & Scope

6. **What are Closures? Explain with a real-world example.**
   - _Also asked as:_ Closures and lexical scope explained with real examples.
   - _Also asked as:_ Closures & real-life use cases.

7. **What is Scope in JavaScript?**
   - _Also asked as:_ Functions, scope, closures, and the `this` keyword.

8. **What is Scope Chain and Variable Shadowing?**
   - _Also asked as:_ How does the scope chain resolve variables?

---

## 🔹 `this` Keyword & Context

9. **Explain the `this` keyword behavior in JavaScript.**
   - _Also asked as:_ How does `this` differ in arrow functions vs regular functions?
   - _Also asked as:_ Default binding, Implicit binding, Explicit binding, Arrow function binding.

10. **What are call, apply, and bind? How do they differ?**
    - _Also asked as:_ Write a bind polyfill from scratch.

---

## 🔹 Functions

9. **Function declaration vs function expression — what's the difference?**

10. **Arrow functions vs normal functions — key differences.**
    - _Also asked as:_ Difference between arrow functions vs normal functions.

11. **What are First-class functions?**

12. **What are Higher-order functions?**

13. **What is a Callback function?**
    - _Also asked as:_ Explain Callback functions in JavaScript.
    - _Also asked as:_ What is Callback hell and Inversion of control?

14. **What is an IIFE (Immediately Invoked Function Expression)?**

15. **What are Pure vs Impure functions?**

16. **What is Currying? Explain with an example.**

17. **What is Partial Application?**

18. **What is the use of the `new` operator in JavaScript?**
    - _Also asked as:_ What happens if you use `new` with an arrow function?

---

## 🔹 Event Loop & Async JavaScript

18. **How does the Event Loop work?**
    - _Also asked as:_ Event loop — microtasks vs macrotasks.
    - _Also asked as:_ Explain how JavaScript async behavior and event loop work.

19. **What are Microtasks vs Macrotasks?**
    - _Also asked as:_ setTimeout vs Promise vs queueMicrotask — order of execution?
    - _Also asked as:_ What is MutationObserver?

20. **Event Loop & Promise execution flow — explain step by step.**

---

## 🔹 Promises & Async/Await

21. **What is a Promise? Explain promise states.**
    - _Also asked as:_ Promise chaining, `.then`, `.catch`, `.finally`.
    - _Also asked as:_ Promise error propagation.

22. **What are Promise methods? (Promise.all, Promise.race, Promise.allSettled, Promise.any)**
    - _Also asked as:_ Why do we use each Promise method?

23. **How do async functions work internally?**
    - _Also asked as:_ Await pause behavior explained.
    - _Also asked as:_ Sequential vs parallel awaits.

24. **Promises and async JavaScript concepts.**

25. **Write a Promise.all polyfill.**

---

## 🔹 Hoisting

28. **What is Hoisting in JavaScript?**
    - _Also asked as:_ Hoisting behavior of var vs let/const.
    - _Also asked as:_ What is the Temporal Dead Zone (TDZ)?

---

## 🔹 Prototypes & Inheritance

27. **What is Prototypal Inheritance?**
    - _Also asked as:_ Prototype with practical examples.
    - _Also asked as:_ Prototype chain, `__proto__`, `prototype` vs `__proto__`.

28. **What are Constructor functions?**

29. **Inheritance in JS — how does it work?**

---

## 🔹 Classes (ES6)

30. **What are ES6 Classes?**
    - _Also asked as:_ `extends`, `super`, method overriding.
    - _Also asked as:_ Private fields (`#`) in classes.

31. **Prototypes & Classes — what's the relationship?**
    - _Also asked as:_ Prototypal inheritance and ES6 classes.

---

## 🔹 Objects

32. **Object creation patterns in JavaScript.**

33. **What are Property Descriptors?**

34. **Object.freeze vs Object.seal vs Object.preventExtensions — differences?**

35. **Object.keys, Object.values, Object.entries — when to use each?**

---

## 🔹 Shallow vs Deep Copy

36. **What is the difference between Shallow Copy and Deep Copy?**
    - _Also asked as:_ Object.assign vs spread operator.
    - _Also asked as:_ How would you implement a deep clone without external libraries?

---

## 🔹 Arrays & Iteration

37. **Explain map, filter, reduce.**
    - _Also asked as:_ Array methods such as map(), filter(), reduce(), and concat().

38. **forEach vs map — what's the difference?**

39. **find, some, every — explain each.**

40. **Difference between find() and filter() methods.**

41. **What is for...of vs for...in?**

42. **Implement map manually (polyfill).**

43. **Implement reduce manually (polyfill).**

44. **Flatten array polyfill implementation.**

45. **What are Iterators and the Iterable protocol?**

46. **What are Generators in JavaScript? How do they work?**
    - _Also asked as:_ Generators & Iterators — what's the relationship?

47. **Data Structures in JavaScript — Maps and Sets.**
    - _Also asked as:_ Arrays, objects, maps, sets — when to use which?

---

## 🔹 ES6+ Features

46. **What are the major ES6 Features?**
    - _Also asked as:_ Arrow functions, destructuring, spread/rest, template literals.

47. **What is Array Destructuring?**

48. **Rest vs Spread operators — explain with examples.**

49. **What is Optional Chaining?**

50. **What is Nullish Coalescing?**

51. **What is the difference between `null` and `undefined`?**

---

## 🔹 Comparison & Type Coercion

51. **Comparison operators: == vs === — what's the difference?**

52. **Value comparison vs Reference comparison (objects in memory).**

53. **if-else based output prediction questions.**

---

## 🔹 Debouncing & Throttling

54. **What is Debouncing? Where have you used it?**
    - _Also asked as:_ Debouncing & throttling — explain both.
    - _Also asked as:_ Debouncing polyfill implementation.

55. **What is Throttling?**

56. **Debouncing user input for performance.**

---

## 🔹 Memoization & Polyfills

59. **What is Memoization in JavaScript?**

60. **What are Polyfills? Why are they asked frequently?**
    - _Also asked as:_ Write polyfills for map, filter, reduce, bind, Promise.all from scratch.
    - _Also asked as:_ Implement filter polyfill manually.

---

## 🔹 Error Handling

59. **How does try/catch work?**
    - _Also asked as:_ Using try…catch effectively.

60. **What is throw and how does error propagation work in promises?**

61. **What is an Unhandled Promise Rejection?**

62. **How do you create Custom Errors?**

---

## 🔹 Modules & Code Organization

64. **ES Modules (import/export) — explain.**
    - _Also asked as:_ Named vs default exports.
    - _Also asked as:_ CommonJS vs ES modules.
    - _Also asked as:_ What about AMD modules?

64. **What is Module Scope?**

65. **What is Tree Shaking?**
    - _Also asked as:_ Tree shaking — what actually gets removed?

66. **What is Dynamic Import?**

---

## 🔹 DOM & Events

67. **What is the DOM tree and how does DOM traversal work?**
    - _Also asked as:_ Working effectively with the Document Object Model.

68. **What is Event Bubbling and Event Capturing?**
    - _Also asked as:_ Event propagation — bubbling vs capturing.

69. **What is Event Delegation?**

70. **stopPropagation vs preventDefault — difference?**

71. **addEventListener and event handling — explain.**
    - _Also asked as:_ Event listeners, delegation, event object.

---

## 🔹 Browser Storage

72. **localStorage vs sessionStorage vs cookies — differences?**
    - _Also asked as:_ Session Storage vs Local Storage.
    - _Also asked as:_ What types of Web Storage are available in browsers?

73. **IndexedDB vs localStorage vs sessionStorage.**

---

## 🔹 Network & APIs

74. **How does the Fetch API work?**
    - _Also asked as:_ AJAX & Fetch API — making asynchronous HTTP requests.

75. **How does CORS actually work?**
    - _Also asked as:_ What are Preflight requests?

76. **JSON — parsing and stringifying data.**

77. **What happens when you type a URL in the browser and hit Enter?**
    - _Also asked as:_ What is CRP (Critical Rendering Path)?
    - _Also asked as:_ What events can we use when a website is loading?

78. **What are render-blocking resources?**

79. **What is the use of Headers in HTTP requests?**

80. **What are ETag, Cache-Control, and Document Fragment?**

81. **What is Prerender? How does it differ from Preload and Prefetch?**

---

## 🔹 Memory & Performance

77. **What causes Memory Leaks in JavaScript?**
    - _Also asked as:_ Detached DOM nodes.
    - _Also asked as:_ Closures causing leaks.

78. **What is Reflow & Repaint?**
    - _Also asked as:_ Reflow vs repaint in the browser and when they happen.

79. **Web Workers — basic idea and when to use.**
    - _Also asked as:_ Web Workers for heavy computation.

80. **What are Streams, backpressure, and how do they relate to the event loop?**
    - _Also asked as:_ Performance de-optimization — why deleting object properties can hurt performance.

81. **What algorithm does Array.prototype.sort() use? What's the output of `[1, null, 5, 2, undefined]`?**

---

## 🔹 Design Patterns

80. **JavaScript Design Patterns — Singleton, Observer, Module.**

81. **How do we use OOP in JavaScript?**
    - _Also asked as:_ What are the SOLID Principles in frontend?

82. **Difference between Map and Object in JavaScript.**
    - _Also asked as:_ When would you use a Map over a plain object?

83. **Can you bind `this` in an arrow function? What happens if you use `new` with an arrow function?**

84. **Difference between Prototypal and Classical Inheritance in JavaScript.**

---

## 🔹 Security

81. **XSS prevention techniques.**
    - _Also asked as:_ What is Cross-Site Scripting?

82. **CSRF tokens and why they matter.**

83. **Input sanitization strategies.**

84. **Third-party script risks.**

85. **Content Security Policy (CSP) explained.**

---

## 🔹 Advanced Concepts

88. **What is `var` vs `let` vs `const`?**
    - _Also asked as:_ Variables, data types, operators.

89. **What are String Methods in JavaScript?**

90. **What are WeakMap, WeakSet, and WeakRef?**
    - _Also asked as:_ When would you use WeakMap over Map?

91. **What is Symbol in JavaScript? What are its use cases?**

92. **What are Proxy and Reflect in JavaScript?**
    - _Also asked as:_ How do you intercept object operations using Proxy?

89. **Find top-k elements in an array (DSA).**

90. **Hash map problem (DSA).**

91. **Remove duplicate elements from an array without extra space.**

92. **Find the first non-repeating character in a string (optimized approach).**

---

## 🔹 Tooling & Ecosystem

93. **Integrating external APIs in JavaScript.**

94. **Writing clear and maintainable documentation.**

95. **Task runners — Gulp, Grunt — when are they used?**

96. **Web APIs concept — what are they?**

97. **What is the Rendering Queue in the Event Loop?**
    - _Also asked as:_ Call stack → Web APIs → Callback queue → Microtask queue → Rendering queue — explain the full flow.

98. **How does the browser rendering pipeline work?**
    - _Also asked as:_ HTML → CSS → Layout → Paint → Composite — explain each step.
