# 🧪 The Complete Frontend Interview Preparation Kit

> **390+ coding problems + 500+ real interview questions** covering JavaScript, React, CSS, TypeScript, System Design, Performance, and more — everything you need to crack frontend interviews at top companies.

---

## 📌 Table of Contents

- [What Is This?](#-what-is-this)
- [Repository Structure](#-repository-structure)
- [📋 Real Interview Questions](#-real-interview-questions-from-actual-interviews)
- [📝 150 Coding Practice Questions](#-150-coding-practice-questions)
- [🧩 JavaScript Logic Problems](#-javascript-logic-problems)
- [📊 Real-World Dataset Challenges](#-real-world-dataset-challenges)
- [How to Use](#-how-to-use)
- [Study Strategy](#-study-strategy)
- [Sources & Credits](#-sources--credits)
- [Connect With Me](#-connect-with-me)

---

## 🚀 What Is This?

This is a **hands-on, practice-first** frontend interview preparation repository. Instead of just reading theory, you solve real problems, practice real interview questions, and work with real-world datasets — exactly how companies test you.

**Built for:**

- Frontend developers preparing for interviews at **Flipkart, Razorpay, Swiggy, Google, Meta, Atlassian, Microsoft, CRED, Meesho, Walmart, Rippling** and more
- Anyone who wants to go beyond LeetCode and practice **actual interview patterns**
- Self-learners who want structured, progressive practice material

---

## 📁 Repository Structure

```
frontend-interview-mastery/
│
├── real-interview-questions/         # 🔥 500+ real interview questions (13 files)
│   ├── react.md
│   ├── javascript.md
│   ├── html.md
│   ├── css.md
│   ├── typescript.md
│   ├── performance.md
│   ├── accessibility.md
│   ├── system-design.md
│   ├── build-tools-devops.md
│   ├── auth-security.md
│   ├── debugging-devtools.md
│   ├── other.md
│   └── behavioral.md
│
├── 150-questions/                    # 📝 150 coding practice questions
│   ├── CODING-PRACTICE-150-QUESTIONS.md
│   └── polyfills/
│       ├── map.js
│       ├── filter.js
│       ├── reduce.js
│       └── includes.js
│
├── javascript-logic-problems/        # 🧩 45 JS logic problems with solutions
│   ├── JAVASCRIPT-LOGIC-PROBLEMS.md
│   ├── n-01-check-prime-number.js
│   ├── s-01-reverse-a-string.js
│   └── ... (45 solution files)
│
├── data-set-questions/               # 📊 5 real-world dataset challenges
│   ├── customer/                     #     40 questions on customer orders
│   ├── employee/                     #     50 questions on employee data
│   ├── hospital/                     #     50 questions on patient records
│   ├── job-board/                    #     50 questions on job/applicant data
│   └── students/                     #     50 questions on student records
│
├── Questions.txt                     # Raw interview questions source file
└── README.md                         # ← You are here
```

---

## 📋 Real Interview Questions (From Actual Interviews)

> **500+ unique questions** picked from real LinkedIn posts where developers shared their interview experiences at **IBM, EY, Deloitte, Intuit, Amazon, Coursera, fintech companies**, and more. Each question is unique — when the same question has been asked in multiple ways, alternate phrasings are shown as sub-bullets.

### Quick Navigation

| #   | File                                                                         | Category                                                    | Questions |
| --- | ---------------------------------------------------------------------------- | ----------------------------------------------------------- | :-------: |
| 1   | [⚛️ react.md](./real-interview-questions/react.md)                           | React, Next.js, State Management, Hooks, Patterns           |    131    |
| 2   | [🟡 javascript.md](./real-interview-questions/javascript.md)                 | JS Core, Closures, Event Loop, Prototypes, ES6+             |    107    |
| 3   | [🔵 html.md](./real-interview-questions/html.md)                             | Semantic HTML, Forms, Accessibility, Browser Parsing        |    12     |
| 4   | [🎨 css.md](./real-interview-questions/css.md)                               | Flexbox, Grid, Positioning, Animations, BEM, Design Systems |    22     |
| 5   | [🟢 typescript.md](./real-interview-questions/typescript.md)                 | Generics, Utility Types, Type vs Interface                  |     7     |
| 6   | [⚡ performance.md](./real-interview-questions/performance.md)               | Core Web Vitals, Optimization, Asset Loading, Monitoring    |    30     |
| 7   | [♿ accessibility.md](./real-interview-questions/accessibility.md)           | WCAG, ARIA, Keyboard Navigation, Screen Readers             |     9     |
| 8   | [🏗️ system-design.md](./real-interview-questions/system-design.md)           | Frontend System Design (Basic → Advanced)                   |    35     |
| 9   | [🛠️ build-tools-devops.md](./real-interview-questions/build-tools-devops.md) | Webpack, Vite, CI/CD, Monorepo, Babel                       |    25     |
| 10  | [🔐 auth-security.md](./real-interview-questions/auth-security.md)           | REST, GraphQL, OAuth, JWT, XSS/CSRF, HIPAA                  |    31     |
| 11  | [🔍 debugging-devtools.md](./real-interview-questions/debugging-devtools.md) | Chrome DevTools, React Profiler, Memory Leaks               |    16     |
| 12  | [🧩 other.md](./real-interview-questions/other.md)                           | NestJS, Electron, WebSocket, AI Integration, DSA            |    60     |
| 13  | [🧠 behavioral.md](./real-interview-questions/behavioral.md)                 | Leadership, Conflicts, Production Incidents, Career         |    21     |

### 🎯 Prep Priority (Recommended Order)

| Priority               | Topics                                             | Start Here                                                                                                                   |
| ---------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 🔴 **Must Do**         | JavaScript Fundamentals, React Core, CSS Layout    | [javascript.md](./real-interview-questions/javascript.md), [react.md](./real-interview-questions/react.md)                   |
| 🟡 **High**            | Performance, State Management, System Design       | [performance.md](./real-interview-questions/performance.md), [system-design.md](./real-interview-questions/system-design.md) |
| 🟢 **Good to Have**    | TypeScript, Auth, Build Tools, Behavioral          | [typescript.md](./real-interview-questions/typescript.md), [behavioral.md](./real-interview-questions/behavioral.md)         |
| 🔵 **Domain-specific** | NestJS, Electron, AI, HIPAA (prepare if on resume) | [other.md](./real-interview-questions/other.md)                                                                              |

### 💡 How to Use Interview Questions

1. **Pick a category** from the table above
2. **Read each question** — can you answer it confidently?
3. **Check alternate phrasings** — interviewers ask the same thing differently
4. **Practice explaining out loud** — if you can't explain clearly, revisit the concept
5. **Track your progress** — mark questions you're confident on vs need to review

---

## 📝 150 Coding Practice Questions

📂 **Location:** [`150-questions/`](./150-questions/)

A master list of **150 questions** organized into 7 sections with a priority system based on real interview frequency:

| Section | Category                       | Questions | Focus                                                                    |
| ------- | ------------------------------ | --------- | ------------------------------------------------------------------------ |
| 1A      | Array Prototype Polyfills      | Q1–Q10    | `map`, `filter`, `reduce`, `flat`, `flatMap`                             |
| 1B      | Function Utilities             | Q11–Q23   | `debounce`, `throttle`, `curry`, `compose`, `bind`, `call`, `apply`      |
| 1C      | Object Utilities               | Q24–Q36   | `deepClone`, `flattenObject`, `get`, `set`, `groupBy`, `chunk`           |
| 1D      | Promise / Async Polyfills      | Q37–Q46   | `Promise.all`, `Promise.race`, `retry`, `sleep`, task queues             |
| 1E      | DOM & EventEmitter             | Q47–Q53   | DOM APIs, pub/sub, `JSON.stringify`, virtual DOM                         |
| 2       | Array / Object Manipulation    | Q54–Q69   | Flatten, dedupe, anagrams, LRU cache, tree operations                    |
| 3       | Output-Based Questions         | Q71–Q94   | Closures, hoisting, event loop, `this`, type coercion, prototypes        |
| 4       | React Coding Problems          | Q95–Q111  | Custom hooks, bug fixes (`stale closure`, `infinite loop`, `React.memo`) |
| 5       | UI Machine Coding              | Q112–Q121 | Star rating, accordion, infinite scroll, file explorer, autocomplete     |
| 6       | Algorithms (Frontend-Relevant) | Q122–Q137 | Two Sum, palindrome, BFS/DFS, binary search, linked lists, Trie          |
| 7       | JS Concepts (Explain + Code)   | Q138–Q150 | Hoisting, TDZ, closures, event loop, prototypes, generators, Proxy       |

**Includes:** 🔴🟡🟢 Priority labels · Company-specific focus areas · 3-week study schedule · Polyfill implementations in `polyfills/`

👉 [**Open the full question bank →**](./150-questions/CODING-PRACTICE-150-QUESTIONS.md)

---

## 🧩 JavaScript Logic Problems

📂 **Location:** [`javascript-logic-problems/`](./javascript-logic-problems/)

**45 solved problems** with clean, well-commented JavaScript solutions covering:

| Category                              | Problems | Examples                                                                        |
| ------------------------------------- | :------: | ------------------------------------------------------------------------------- |
| 🔢 **Number Problems** (n-01 to n-15) |    15    | Prime check, Fibonacci, Factorial, Armstrong, GCD, Roman numerals               |
| 🔤 **String Problems** (s-01 to s-30) |    30    | Reverse, Palindrome, Anagram, Frequency map, Caesar cipher, Decode string, atoi |

Each file is self-contained with the problem, approach, and solution.

👉 [**Open the problem bank →**](./javascript-logic-problems/JAVASCRIPT-LOGIC-PROBLEMS.md)

---

## 📊 Real-World Dataset Challenges

📂 **Location:** [`data-set-questions/`](./data-set-questions/)

Each module contains a **rich, realistic dataset** (`data.js`), a **detailed question bank** (`QUESTION.MD`), and **clean solution code** (`answer.js`).

| Module                                                   | Dataset                                            | Questions | Difficulty  |
| -------------------------------------------------------- | -------------------------------------------------- | :-------: | ----------- |
| [🛒 Customer Orders](./data-set-questions/customer/)     | 50 customers · ~200 orders · 4 regions · 3 tiers   |    40     | 🟢→🟡→🔴    |
| [👔 Employee Management](./data-set-questions/employee/) | 25 employees · 8 departments · skills & certs      |    50     | 🟢→🟡→🔴→🔥 |
| [🏥 Hospital Records](./data-set-questions/hospital/)    | 30 patients · 3 hospitals · billing & insurance    |    50     | 🟢→🟡→🔴    |
| [💼 Job Board](./data-set-questions/job-board/)          | 10 companies · 18 jobs · 30 applicants             |    50     | 🟢→🟡→🔴    |
| [🎓 Student Records](./data-set-questions/students/)     | 25 students · Grades 10–12 · Science/Commerce/Arts |    50     | 🟢→🟡→🔴→🔥 |

---

## 🏁 How to Use

### 1. Clone the Repository

```bash
git clone https://github.com/goswamikaushik/frontend-interview-mastery.git
cd frontend-interview-mastery
```

### 2. Pick Your Path

| Your Level               | Start Here                                               |
| ------------------------ | -------------------------------------------------------- |
| **Beginner**             | `data-set-questions/customer/` → Easy questions (Q1–Q12) |
| **Intermediate**         | `150-questions/` → P1 priority questions first           |
| **Advanced**             | `real-interview-questions/` → React + JS + System Design |
| **Pre-Interview Sprint** | `150-questions/` → Follow the 3-week schedule            |

### 3. Load & Solve

**Browser Console:**

```js
// Copy-paste the contents of data.js into your browser console
// Then start solving questions
```

**Node.js:**

```bash
cd data-set-questions/customer
node data.js
node answer.js
```

**Your IDE:**

```js
const data = require("./data");
// Start solving!
```

### 4. Verify Your Solutions

Each `QUESTION.MD` file includes ✅ Expected output · 💡 Hints · 📝 Constraints

---

## 🎯 Study Strategy

### The 3-Week Plan

```
WEEK 1 — Foundation (Polyfills + Output Questions)
  Day 1–2:  Array polyfills (map, filter, reduce, forEach, find)
  Day 3–4:  Function utilities (debounce, throttle, curry, bind)
  Day 5–6:  Output-based questions (closures, hoisting, event loop)
  Day 7:    Promise polyfills (Promise.all, retry, sleep)

WEEK 2 — Core Skills (Data Manipulation + React)
  Day 8–9:  Object utilities (deepClone, flattenObject, groupBy)
  Day 10–11: Pick any dataset module → solve Easy + Medium
  Day 12–13: React coding problems (custom hooks, bug fixes)
  Day 14:   Real interview questions → JS + React files

WEEK 3 — Hard + Machine Coding + Interview Prep
  Day 15–16: UI machine coding (star rating, accordion, tabs)
  Day 17–18: System Design questions + Performance questions
  Day 19–20: Pick another dataset module → solve Hard questions
  Day 21:    Behavioral questions + revisit weak spots
```

### Minimum Bar Before Interviewing

- ✅ All P1 questions from `150-questions/` (57 questions)
- ✅ All output-based questions (Q71–Q94)
- ✅ At least 8 React questions solved
- ✅ At least 2 UI components built from scratch
- ✅ Complete Easy + Medium from at least 2 dataset modules
- ✅ Can answer 70%+ of `real-interview-questions/javascript.md` confidently

---

## 🔑 Key JavaScript Concepts Covered

| Concept                              | Where It's Tested                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------------- |
| `map`, `filter`, `reduce`, `flatMap` | Every dataset module + 150-questions                                                   |
| Closures & Scope                     | Output questions (Q71–Q79) + [javascript.md](./real-interview-questions/javascript.md) |
| `this` keyword                       | Output questions (Q85–Q87) + [javascript.md](./real-interview-questions/javascript.md) |
| Promises & async/await               | Polyfills (Q37–Q46) + Output (Q80–Q84)                                                 |
| Event Loop (micro/macro tasks)       | Output questions (Q80, Q81, Q84)                                                       |
| Prototypes & Inheritance             | Output questions (Q92–Q94)                                                             |
| React Hooks & Patterns               | React section (Q95–Q111) + [react.md](./real-interview-questions/react.md)             |
| DOM Manipulation                     | Machine coding (Q112–Q121)                                                             |
| Data Structures                      | Algorithms section (Q122–Q137)                                                         |

---

## 📚 Sources & Credits

> **Transparency Note:** This repository is built using a combination of sources to ensure comprehensive, real-world interview coverage.

| Source                         | What It Contributed                                                                                                                                                                                                                                 |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🤖 **AI Agents (Claude, GPT)** | All coding questions, datasets, expected outputs, solution approaches, and structured question organization were generated and refined with the assistance of AI agents. Datasets are synthetic — no real personal data is used.                    |
| 💼 **LinkedIn Posts**          | Real interview questions in the `real-interview-questions/` folder were curated from actual interview experience posts shared by developers on LinkedIn. Companies include IBM, EY, Deloitte, Intuit, Amazon, Coursera, fintech startups, and more. |
| 📝 **Personal Experience**     | Questions are structured to mirror actual interview patterns reported from companies like Flipkart, Google, Meta, Atlassian, Microsoft, CRED, Meesho, Walmart, and Rippling.                                                                        |

---

## 🤝 Contributing

Found a bug in an expected output? Have a better solution approach? Want to add more questions?

1. Fork this repository
2. Create your branch (`git checkout -b feature/better-solution`)
3. Commit your changes (`git commit -m 'Add optimized Q15 solution'`)
4. Push to the branch (`git push origin feature/better-solution`)
5. Open a Pull Request

---

## ⭐ Support

If this helped your interview preparation, please consider:

- ⭐ **Starring** this repository
- 🔄 **Sharing** it with your network

---

## 📬 Connect With Me

- 💼 **LinkedIn:** [linkedin.com/in/goswamikaushik](https://www.linkedin.com/in/goswamikaushik/)
- 🌐 **Portfolio:** [goswamikaushik.dev](https://goswamikaushik.dev/)
- 🐙 **GitHub:** [github.com/goswamikaushik](https://github.com/goswamikaushik)

---

<p align="center">
  <strong>Built with ☕ and late nights · Good luck with your interviews! 🎉</strong>
</p>
