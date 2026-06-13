# 🧪 JS Interview Lab — The Complete JavaScript Interview Preparation Kit

> **390+ carefully curated questions** covering JavaScript fundamentals, data manipulation, React patterns, algorithms, polyfills, and real-world dataset challenges — everything you need to crack frontend interviews at top companies.

## 🚀 What Is This?

This is a **hands-on, practice-first** JavaScript interview preparation repository. Instead of reading theory, you solve real problems using real-world datasets — exactly how companies test you.

**Built for:**

- Frontend developers preparing for interviews at **Flipkart, Razorpay, Swiggy, Google, Meta, Atlassian, Microsoft, CRED, Meesho, Walmart, Rippling** and more
- Anyone who wants to go beyond LeetCode and practice **actual interview patterns**
- Self-learners who want structured, progressive practice material

---

## 📦 What's Inside

### 📋 150 Coding Practice Questions (`150-questions/`)

A master list of **150 questions** organized into 7 sections with a priority system based on real interview frequency data:

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

**Includes:**

- 🔴🟡🟢 Priority labels (P1 = must know, P2 = important, P3 = bonus)
- Company-specific focus areas (who asks what)
- 3-week study schedule
- Scoring guide and minimum bar before interviews
- Polyfill implementations (`map`, `filter`, `reduce`, `includes`) in `polyfills/`

---

### 📊 5 Real-World Dataset Challenges

Each module contains a **rich, realistic dataset** (`data.js`), a **detailed question bank** (`QUESTION.MD`), and **clean solution code** (`answer.js`).

#### 🛒 Customer Orders Dataset (`customer/`)

- **50 customers** · ~200 orders · 4 regions · 3 tiers
- Nested orders → items → payments → delivery → reviews
- **40 questions**: Revenue calculations, coupon analysis, anomaly detection, date operations
- Difficulty: 🟢 Easy (Q1–Q12) → 🟡 Medium (Q13–Q28) → 🔴 Hard (Q29–Q40)

#### 👔 Employee Management Dataset (`employee/`)

- **25 employees** across 8 departments · multiple roles & regions
- Projects, skills, certifications, performance reviews, leave data
- **50 questions**: Salary analysis, manager mapping, skill frequency, workload analytics
- Difficulty: 🟢 Easy (Q1–Q15) → 🟡 Medium (Q16–Q32) → 🔴 Hard (Q33–Q44) → 🔥 Expert (Q45–Q50)

#### 🏥 Hospital Records Dataset (`hospital/`)

- **30 patients** · 3 hospitals · multiple doctors & departments
- Admissions, tests, medications, billing, insurance, reviews
- **50 questions**: Revenue per hospital, risk scores, readmission analysis, fraud detection
- Difficulty: 🟢 Easy (Q1–Q15) → 🟡 Medium (Q16–Q35) → 🔴 Hard (Q36–Q50)

#### 💼 Job Board Dataset (`job-board/`)

- **10 companies** · 18 jobs · 30 applicants across industries
- Skills, salary ranges, hiring pipelines, source channels
- **50 questions**: Conversion rates, skill gaps, salary analysis, ghost job detection
- Difficulty: 🟢 Easy (Q1–Q15) → 🟡 Medium (Q16–Q35) → 🔴 Hard (Q36–Q50)

#### 🎓 Student Records Dataset (`student/`)

- **25 students** · Standards 10–12 · Science/Commerce/Arts
- Subjects, grades, attendance, extracurriculars, behavior scores
- **50 questions**: Toppers, GPA computation, at-risk analysis, merit certificates
- Difficulty: 🟢 Easy (Q1–Q15) → 🟡 Medium (Q16–Q32) → 🔴 Hard (Q33–Q44) → 🔥 Expert (Q45–Q50)

---

## 📁 Repository Structure

```
js-interview-lab/
│
├── 150-questions/
│   ├── CODING-PRACTICE-150-QUESTIONS.md    # Master question bank
│   └── polyfills/
│       ├── map.js                           # Array.prototype.map polyfill
│       ├── filter.js                        # Array.prototype.filter polyfill
│       ├── reduce.js                        # Array.prototype.reduce polyfill
│       └── includes.js                      # Array.prototype.includes polyfill
│
├── customer/
│   ├── QUESTION.MD                          # 40 questions (Easy → Hard)
│   ├── data.js                              # 50 customers dataset (~2600 lines)
│   └── answer.js                            # Solutions with multiple approaches
│
├── employee/
│   ├── QUESTION.MD                          # 50 questions (Easy → Expert)
│   ├── data.js                              # 25 employees dataset
│   └── answer.js                            # Solutions
│
├── hospital/
│   ├── QUESTION.MD                          # 50 questions (Easy → Hard)
│   ├── data.js                              # 30 patients dataset
│   └── answer.js                            # Solutions
│
├── job-board/
│   ├── QUESTION.MD                          # 50 questions (Easy → Hard)
│   ├── data.js                              # 10 companies, 18 jobs dataset
│   └── answer.js                            # Solutions
│
├── student/
│   ├── QUESTION.MD                          # 50 questions (Easy → Expert)
│   ├── data.js                              # 25 students dataset
│   └── answer.js                            # Solutions
│
└── README.md
```

---

## 🏁 How to Use

### 1. Clone the Repository

```bash
git clone https://github.com/goswamikaushik/js-interview-lab.git
cd js-interview-lab
```

### 2. Pick a Module

Start with whichever fits your current prep stage:

| Your Level               | Start Here                                           |
| ------------------------ | ---------------------------------------------------- |
| **Beginner**             | `customer/` → Easy questions (Q1–Q12)                |
| **Intermediate**         | `150-questions/` → P1 priority questions first       |
| **Advanced**             | `employee/` or `hospital/` → Hard & Expert questions |
| **Pre-Interview Sprint** | `150-questions/` → Follow the 3-week schedule        |

### 3. Load the Dataset & Solve

**Option A — Browser Console:**

```js
// Copy-paste the contents of data.js into your browser console
// Then start solving questions
```

**Option B — Node.js:**

```bash
# Navigate to any module
cd customer

# Run the dataset
node data.js

# Run solutions to verify
node answer.js
```

**Option C — Your IDE:**

```js
// In any .js file
const data = require("./data");

// Start solving!
// Q1: Count total customers per region
const result = data.reduce((acc, c) => {
  acc[c.region] = (acc[c.region] || 0) + 1;
  return acc;
}, {});
```

### 4. Verify Your Solutions

Each `QUESTION.MD` file includes:

- ✅ **Expected output** for every question
- 💡 **Hints** to guide your approach
- 📝 **Constraints** (which methods to use, edge cases to handle)

Compare your solutions against `answer.js` for reference implementations.

---

## 🎯 Study Strategy

### The 3-Week Plan (from `150-questions/`)

```
WEEK 1 — Foundation (Focus: Polyfills + Output Questions)
  Day 1–2:  Array polyfills (map, filter, reduce, forEach, find)
  Day 3–4:  Function utilities (debounce, throttle, curry, bind)
  Day 5–6:  Output-based questions (closures, hoisting, event loop)
  Day 7:    Promise polyfills (Promise.all, retry, sleep)

WEEK 2 — Core Skills (Focus: Data Manipulation + React)
  Day 8–9:  Object utilities (deepClone, flattenObject, groupBy)
  Day 10–11: Pick any dataset module → solve Easy + Medium
  Day 12–13: React coding problems (custom hooks, bug fixes)
  Day 14:   DOM polyfills + EventEmitter

WEEK 3 — Hard + Machine Coding
  Day 15–16: UI machine coding (star rating, accordion, tabs)
  Day 17–18: Algorithms (Two Sum, BFS/DFS, binary search)
  Day 19–20: Pick another dataset module → solve Hard questions
  Day 21:    Revisit weak spots + JS concepts
```

### Minimum Bar Before Interviewing

- ✅ All P1 questions from `150-questions/` (57 questions)
- ✅ All output-based questions (Q71–Q94)
- ✅ At least 8 React questions solved
- ✅ At least 2 UI components built from scratch
- ✅ Complete Easy + Medium from at least 2 dataset modules

---

## 🔑 Key JavaScript Concepts Covered

| Concept                              | Where It's Tested                      |
| ------------------------------------ | -------------------------------------- |
| `map`, `filter`, `reduce`, `flatMap` | Every dataset module + 150-questions   |
| Closures & Scope                     | Output questions (Q71–Q79)             |
| `this` keyword                       | Output questions (Q85–Q87)             |
| Promises & async/await               | Polyfills (Q37–Q46) + Output (Q80–Q84) |
| Event Loop (micro/macro tasks)       | Output questions (Q80, Q81, Q84)       |
| Prototypes & Inheritance             | Output questions (Q92–Q94)             |
| Type Coercion                        | Output questions (Q88–Q91)             |
| Hoisting & TDZ                       | Output questions (Q75–Q79)             |
| React Hooks & Patterns               | React section (Q95–Q111)               |
| DOM Manipulation                     | Machine coding (Q112–Q121)             |
| Data Structures                      | Algorithms section (Q122–Q137)         |
| Object.groupBy, structuredClone      | Dataset answer files                   |

---

## 🤖 AI-Assisted Content

> **Transparency Note:** All questions, datasets, expected outputs, and solution approaches in this repository were generated with the assistance of **Claude** (Anthropic's AI). The datasets are synthetic and designed specifically for interview practice — they do not contain any real personal data. Each question has been structured to mirror actual interview patterns reported from companies like Flipkart, Google, Meta, Atlassian, and others.

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
