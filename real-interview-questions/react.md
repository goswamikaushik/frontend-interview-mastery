# ⚛️ React — Real Interview Questions

> Curated from real interview experiences shared on LinkedIn.
> Similar questions are grouped together — alternate phrasings shown as sub-bullets.

---

## 🔹 Virtual DOM & Reconciliation

1. **What is the Virtual DOM and how does React use it?**
   - _Also asked as:_ Virtual DOM vs Real DOM — what's the difference?
   - _Also asked as:_ How does React's Virtual DOM creation work?

2. **How does React reconciliation work?**
   - _Also asked as:_ Explain the React reconciliation algorithm.
   - _Also asked as:_ How does React decide what to re-render?

3. **What is React Fiber architecture?**
   - _Also asked as:_ How does React Fiber and reconciliation scheduling improve rendering efficiency?

4. **How does React batch state updates (React 18)?**
   - _Also asked as:_ What is state batching in React?

---

## 🔹 Rendering & Lifecycle

5. **How does React's rendering process work?**
   - _Also asked as:_ Explain the React rendering cycle.
   - _Also asked as:_ How does React render and commit?

6. **What is the difference between CSR, SSR, and SSG?**
   - _Also asked as:_ Was your project CSR or SSR? Why?
   - _Also asked as:_ Why would an e-commerce platform choose CSR over SSR?

7. **Without Next.js, how would you implement SSR in React?**

8. **What is Concurrent Rendering in React?**
   - _Also asked as:_ Explain the concurrent rendering mental model.

9. **What is the difference between useTransition and useDeferredValue?**

10. **What are React Server Components? Explain.**
    - _Also asked as:_ What is the difference between Server Components and Client Components?

11. **What is Suspense boundaries and streaming SSR?**
    - _Also asked as:_ What is Streaming SSR?

12. **What is Hydration and Partial Hydration?**
    - _Also asked as:_ How does hydration work in SSR frameworks?

13. **What is Edge Rendering?**
    - _Also asked as:_ How does edge rendering differ from traditional SSR?

---

## 🔹 Hooks

12. **What are hooks, and why were they introduced?**
    - _Also asked as:_ Explain React Hooks. Which hooks have you used?

13. **What is the difference between useEffect and useLayoutEffect?**
    - _Also asked as:_ When do you use useLayoutEffect vs useEffect?

14. **How do useEffect dependencies work?**
    - _Also asked as:_ What are dependency arrays in React?

15. **When would you use useState vs useReducer?**
    - _Also asked as:_ useState vs useReducer — practical scenarios?

16. **What is useRef vs useState?**
    - _Also asked as:_ When would you use refs?

17. **What are Custom Hooks? Have you created any?**
    - _Also asked as:_ What are custom hooks anti-patterns?
    - _Also asked as:_ Examples: useDebounce, useFetch, useClickOutside, usePrevious.

18. **Explain useContext, useReducer, and useLayoutEffect hooks.**

19. **Have you ever faced an infinite re-render issue? How did you fix it?**

---

## 🔹 Memoization & Performance

20. **What is memoization in React?**
    - _Also asked as:_ When would you use React.memo, useMemo, and useCallback?
    - _Also asked as:_ useMemo and when to use it?
    - _Also asked as:_ useCallback vs normal functions?

21. **What is React.memo? When does it help and when doesn't it?**

22. **What causes unnecessary re-renders and how do you prevent them?**
    - _Also asked as:_ Preventing unnecessary re-renders with memoization.
    - _Also asked as:_ How do you prevent unnecessary re-renders at scale?

23. **How do you optimize performance in React apps?**
    - _Also asked as:_ Performance optimization strategies in large React apps.
    - _Also asked as:_ What React performance optimization techniques have you used?
    - _Also asked as:_ How did you improve performance in a React app?

24. **What tools do you use to debug performance issues?**
    - _Also asked as:_ How would you identify and fix a performance bottleneck using React DevTools or browser profiling?
    - _Also asked as:_ How would you identify and fix performance issues in a React application?

25. **How would you optimize a React app that renders 100k+ items in a list?**
    - _Also asked as:_ How do you render large datasets without blocking the main thread?
    - _Also asked as:_ Big list rendering optimization (windowing / virtualization)?

26. **What concrete steps would you take to cut React initial load time significantly?**
    - _Also asked as:_ What techniques would you use to improve page load time for a global audience?

27. **Code splitting & lazy loading — how do you implement them in React?**
    - _Also asked as:_ Lazy loading and code splitting in React.
    - _Also asked as:_ What is lazy loading in React?

---

## 🔹 State Management

28. **What's the difference between state and props?**
    - _Also asked as:_ How do you pass data from Parent → Child and Child → Parent?

29. **When should you lift state up?**

30. **How do you manage complex state in an application?**
    - _Also asked as:_ How do you manage state in a large app to avoid unnecessary re-renders?

31. **What is prop drilling and how do you avoid it?**
    - _Also asked as:_ Props drilling vs Context API.

32. **Context API vs Redux — when would you use each?**
    - _Also asked as:_ Redux Toolkit vs Context API vs TanStack Query.
    - _Also asked as:_ Difference between Redux and Context API.

33. **How do you manage shared state across components?**
    - _Also asked as:_ How do you handle shared state across deeply nested components?
    - _Also asked as:_ What is your model for global state when multiple teams ship features in parallel?

34. **What is Redux and why is it used?**
    - _Also asked as:_ Explain Redux Store, Actions, and Reducers.
    - _Also asked as:_ Redux architecture & Redux Thunk.
    - _Also asked as:_ What is the Flux pattern?
    - _Also asked as:_ Redux middleware — thunk vs saga?

35. **How many stores should be used in a Redux application?**

36. **Why Redux Toolkit over plain Redux?**
    - _Also asked as:_ What is a slice in Redux Toolkit?

37. **What is RTK Query and how does it cache data?**
    - _Also asked as:_ RTK Query vs React Query — key differences?

38. **How do you handle optimistic updates with RTK Query?**
    - _Also asked as:_ What are optimistic update patterns?

39. **Server state vs client state separation — explain.**
    - _Also asked as:_ React Query/SWR internals.

40. **Atomic state (Jotai/Recoil) vs Redux — when to use which?**
    - _Also asked as:_ Zustand / Recoil / Jotai — when to use these modern alternatives?

41. **When NOT to use global state?**

42. **State machines (XState) use cases.**

---

## 🔹 Components & Patterns

43. **Controlled vs uncontrolled components — what's the difference?**

44. **Functional vs Class components differences.**
    - _Also asked as:_ React class component lifecycle and hooks behavior.

45. **How do you design reusable components?**
    - _Also asked as:_ Create a reusable Button component with variants and sizes (like MUI).
    - _Also asked as:_ Where do you store shared components across multiple projects?

46. **What is the Compound Components pattern?**

47. **Render props vs HOCs — when to use what?**
    - _Also asked as:_ What are Higher Order Components (HOC)? Give a real example.

48. **Ref forwarding and imperative handles — explain.**

49. **What is the importance of key in lists?**
    - _Also asked as:_ What are React keys and why do they matter?

50. **What is the difference between presentational and container components?**

51. **What is React Suspense and Error Boundaries?**
    - _Also asked as:_ How do Error Boundaries work in React?

52. **What is React Portal?**
    - _Also asked as:_ When would you use React Portal?

53. **What is React Strict Mode? What does it do?**
    - _Also asked as:_ Why does React Strict Mode cause double renders?

---

## 🔹 Forms & Data Handling

51. **How do you handle forms and validations?**

52. **How do you handle API calls in React?**
    - _Also asked as:_ How do you make API calls in React?
    - _Also asked as:_ Rendering items from API response.

53. **How do you manage loading, error, and success states?**
    - _Also asked as:_ How do you handle API errors and loading states?

54. **API Caching, Retries & Background Sync — explain.**
    - _Also asked as:_ How would you design frontend caching + retry + error boundary strategy together?

55. **Implementing concurrent API calls based on IDs from the first API.**

---

## 🔹 Routing

56. **What is Routing in React?**
    - _Also asked as:_ How does routing work in a React SPA?

---

## 🔹 React Architecture & Scaling

57. **How do you structure a scalable React application?**
    - _Also asked as:_ How do you organize a growing React codebase so it stays maintainable and scalable?
    - _Also asked as:_ How do you structure a large-scale React project?
    - _Also asked as:_ What is separation of concerns in React?

58. **What does component-driven architecture mean?**

59. **Monolith vs modular frontend — when do you choose which?**

60. **Explain Micro Frontend Architecture.**
    - _Also asked as:_ How do you technically load one micro frontend into another?
    - _Also asked as:_ Module federation? iframe? Web components?
    - _Also asked as:_ How do you ensure shared dependencies don't conflict across MFEs?
    - _Also asked as:_ Would you use single or multiple repositories for Micro Frontends? Why?

61. **Monorepo or separate shared library for shared components?**
    - _Also asked as:_ How do you publish and import a shared component library?

62. **How do you handle real-time updates efficiently in a React application?**
    - _Also asked as:_ How would you build a real-time dashboard displaying live data updates?
    - _Also asked as:_ WebSockets vs Polling — when to use which?

---

## 🔹 Security in React

63. **How do you secure a React application?**
    - _Also asked as:_ What security practices do you follow in React applications?
    - _Also asked as:_ How do you ensure secure handling of sensitive data on the client side?

64. **Authentication implementation in React applications.**
    - _Also asked as:_ React authentication strategies.
    - _Also asked as:_ Role-Based Access Control (RBAC) in React.

---

## 🔹 Testing

65. **How do you test React components?**
    - _Also asked as:_ How do you write test cases for React applications?
    - _Also asked as:_ Which testing tools/frameworks have you used?

66. **How would you write a Jest test case for a button click event?**

67. **Writing basic unit tests for components.**
    - _Also asked as:_ Debugging React rendering issues.

---

## 🔹 Next.js

68. **Why use Next.js when React already exists?**
    - _Also asked as:_ Next.js optimizations (SSR, code splitting, image optimization, caching).

69. **What is ISR (Incremental Static Regeneration)?**

70. **When do you choose SSR over SSG?**

71. **What is middleware in Next.js?**

72. **App Router vs Pages Router — what changed?**

73. **How do you handle SEO metadata in Next.js?**
    - _Also asked as:_ How did you handle SEO?

74. **How does Next.js Image component help performance?**

---

## 🔹 Advanced / Scenario-Based

75. **You suspect a memory leak in a React app — how do you isolate and resolve it?**
    - _Also asked as:_ You discover a memory leak in a production SPA — how do you debug and fix it?

76. **A component breaks after a library upgrade — how do you manage dependencies safely?**

77. **How would you implement light/dark theme switching at scale without repaint cost spikes?**

78. **A heavy analytics dashboard slows down on filtering — how do you profile and optimize?**

79. **How would you implement A/B testing without negatively impacting users?**

80. **How do you build accessibility-first UIs and meet WCAG requirements?**

81. **Users report inconsistent UI issues across browsers — how do you troubleshoot?**
    - _Also asked as:_ How do you guarantee layout and behavior consistency across browsers and screen sizes?

82. **A critical UI feature fails during peak traffic — what's your immediate mitigation strategy?**

83. **How would you build frontend monitoring and logging for production issues?**

84. **How would you migrate a legacy frontend to a modern framework with minimal risk?**

85. **What was the hardest bug you fixed in React?**

86. **Tell me about a complex UI you built.**

87. **Have you used Storybook?**

88. **What is Atomic Design methodology?**
    - _Also asked as:_ How does Atomic Design relate to component structure?

88. **Build a React list with collapse/expand feature.**

89. **Build React-like class components from scratch (ES5).**

90. **Write a Promise polyfill with real use cases.**

91. **Implement an async scheduler with max concurrency.**

92. **Redux and Redux performance optimization.**

93. **useState and useEffect hooks — explain basics.**

94. **Manipulating API response data in React.**
    - _Also asked as:_ Fetch data from a public API and display it; on click, show details.

95. **Context API and its use cases.**
    - _Also asked as:_ What is Context API? How does it work?

---

## 🔹 Why React?

96. **Why React.js?**
    - _Also asked as:_ What are the latest React features and updates?

---

## 🔹 Stale Closures & React-JS Bridge

97. **Why does React re-render?**
    - _Also asked as:_ Referential equality & shallow comparison in React.

98. **What are stale closures in React?**
    - _Also asked as:_ Closures causing issues in React hooks.

99. **Immutability — why does it matter in React?**
    - _Also asked as:_ Functional updates in React state.

---

## 🔹 Scalability & Domain-Specific (Resume-Based)

100. **How did your app perform with 8,000+ concurrent users?**

101. **What was your biggest performance bottleneck?**

102. **How do you handle high-frequency state updates from real-time data?**

103. **How do you load test a frontend application?**

104. **How do you design for scalability from day one?**

105. **If you're selling one product, what's your core site architecture?**

---

## 🔹 Backtesting Feature (Resume-Based)

106. **How did you architect the backtesting feature on the frontend?**

107. **How did you support 6 market types with one unified interface?**

108. **What is a candle interval in trading?**

109. **How did you implement stop-loss and take-profit logic on the frontend?**

110. **How did you manage session state across a long backtesting run?**

111. **How did you handle configurable sessions on the UI side?**

112. **How did you stream backtesting data to UI progressively?**
