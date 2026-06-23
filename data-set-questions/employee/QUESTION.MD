# 🚀 NexaCorp JS Interview Practice — 50 Questions

### Dataset: `employeeData.js` — 25 employees across departments, regions, roles, projects, skills

> **How to use:** Copy the dataset into your browser console or a `.js` file.  
> Solve each question, then verify your output matches the **Expected Output** section.  
> Questions go from Easy → Medium → Hard → Expert.

---

## 📁 Quick Dataset Overview

```
employees[] → 25 records
Each employee has:
  id, name, age, gender, department, role, title, region
  location: { city, state, country, remote }
  status: "active" | "inactive" | "on_leave" | "probation" | "terminated"
  salary: { base, bonus, currency, payGrade }
  skills: [array of strings]
  projects: [{ id, name, status, hoursLogged, budget }]
  performance: { rating, year, promotionEligible, reviewDate }
  leaves: { total, used, pending }
  certifications: [{ name, issuer, year }]
  manager: "EMP_ID"
  teamSize: number | null
  joinedAs: role string
```

---

# 🟢 EASY (Questions 1–15)

---

### Q1 — Get All Employee Names

**Task:** Return an array of all employee full names.

```js
// Your code here
```

**Constraints:**

- Use `.map()`
- Output must be a plain array of strings

**Expected Output:**

```js
["Aarav Mehta", "Priya Sharma", "Rohan Verma", ...]  // 25 names
```

---

### Q2 — Count Employees Per Department

**Task:** Return an object showing how many employees are in each department.

```js
// Your code here
```

**Constraints:**

- Use `.reduce()`
- Keys = department names, values = count

**Expected Output:**

```js
{
  Engineering: 8,
  Sales: 3,
  Marketing: 3,
  HR: 2,
  Finance: 3,
  Operations: 3,
  Design: 2,
  Legal: 1
}
```

---

### Q3 — Find All Remote Employees

**Task:** Return the list of employees who work remotely.

```js
// Your code here
```

**Constraints:**

- Use `.filter()`
- Return full employee objects

**Expected Output:**

```js
// employees where location.remote === true
// EMP003, EMP006, EMP011, EMP013, EMP016, EMP019, EMP023
```

---

### Q4 — Get All Unique Skills Across All Employees

**Task:** Return a sorted array of all unique skills used in the company.

```js
// Your code here
```

**Constraints:**

- Use `.flatMap()` + `Set` or `.reduce()`
- No duplicates, sorted A–Z

**Expected Output:**

```js
[
  "AWS",
  "Docker",
  "Excel",
  "Figma",
  "GraphQL",
  "JavaScript",
  "MongoDB",
  "Node.js",
  "Python",
  "React",
  "Redis",
  "SAP",
  "SQL",
  "Salesforce",
  "TypeScript",
];
```

---

### Q5 — Get Employees on Leave or Inactive

**Task:** Find all employees whose status is `"on_leave"` or `"inactive"`.

```js
// Your code here
```

**Constraints:**

- Use `.filter()`
- Return only `id`, `name`, `status` for each

**Expected Output:**

```js
[
  { id: "EMP007", name: "Amit Joshi", status: "on_leave" },
  { id: "EMP021", name: "Ravi Kumar", status: "inactive" },
];
```

---

### Q6 — Total Salary Bill (Base + Bonus)

**Task:** Calculate total monthly salary expense (base + bonus) for the entire company.

```js
// Your code here
```

**Constraints:**

- Use `.reduce()`
- Return a single number

**Expected Output:**

```js
5761000; // sum of all (base + bonus)
```

---

### Q7 — Find the Youngest and Oldest Employee

**Task:** Return an object with `youngest` and `oldest` employee objects.

```js
// Your code here
```

**Constraints:**

- Do NOT use `.sort()` — use `.reduce()` only

**Expected Output:**

```js
{
  youngest: { id: "EMP013", name: "Harsh Malhotra", age: 22 },
  oldest:   { id: "EMP025", name: "Suresh Nambiar", age: 52 }
}
```

---

### Q8 — List Employees With No Certifications

**Task:** Return the names of employees who have zero certifications.

```js
// Your code here
```

**Constraints:**

- Use `.filter()` + `.map()`

**Expected Output:**

```js
[
  "Rohan Verma",
  "Harsh Malhotra",
  "Saurabh Gupta",
  "Gaurav Saxena",
  "Dev Arora",
];
```

---

### Q9 — Get All Employees in a Given Region

**Task:** Write a function `getByRegion(region)` that returns employees in that region.

```js
function getByRegion(region) {
  // Your code
}
getByRegion("South");
```

**Constraints:**

- Case-insensitive match
- Return array of `{ name, title, city }` objects

**Expected Output for "South":**

```js
[
  { name: "Divya Nair", title: "UI/UX Designer", city: "Bangalore" },
  { name: "Vikram Reddy", title: "Tech Lead", city: "Hyderabad" },
  { name: "Meera Iyer", title: "Senior HR Business Partner", city: "Chennai" },
  { name: "Anjali Menon", title: "Design Lead", city: "Kochi" },
  { name: "Nikhil Rao", title: "Full Stack Developer", city: "Bangalore" },
  { name: "Sunita Pillai", title: "HR Director", city: "Chennai" },
  { name: "Kavya Bhat", title: "Financial Analyst", city: "Mangalore" },
  {
    name: "Suresh Nambiar",
    title: "Chief Operating Officer",
    city: "Bangalore",
  },
];
```

---

### Q10 — Sort Employees by Base Salary (Descending)

**Task:** Return all employees sorted from highest to lowest base salary.

```js
// Your code here
```

**Constraints:**

- Use `.sort()` — do NOT mutate the original array
- Return array of `{ name, salary.base, department }`

**Expected Output (top 5):**

```js
[
  { name: "Suresh Nambiar", base: 800000, department: "Operations" },
  { name: "Anita Choudhary", base: 500000, department: "Sales" },
  { name: "Nisha Kapoor", base: 450000, department: "Engineering" },
  { name: "Rahul Tiwari", base: 320000, department: "Marketing" },
  { name: "Sunita Pillai", base: 300000, department: "HR" },
  // ...
];
```

---

### Q11 — Check if Any Engineer Knows GraphQL

**Task:** Return `true` if any Engineering employee has `"GraphQL"` in their skills.

```js
// Your code here
```

**Constraints:**

- Use `.some()` — single chained expression preferred

**Expected Output:**

```js
true; // EMP010 Nisha Kapoor has GraphQL
```

---

### Q12 — Check if ALL Directors Are Active

**Task:** Return `true` only if every employee with `role === "Director"` has `status === "active"`.

```js
// Your code here
```

**Constraints:**

- Use `.every()`

**Expected Output:**

```js
true;
```

---

### Q13 — Get Average Performance Rating by Department

**Task:** Return an object with each department's average performance rating (rounded to 2 decimal places).

```js
// Your code here
```

**Constraints:**

- Use `.reduce()` — group then average

**Expected Output:**

```js
{
  Engineering: 4.09,
  Sales:       4.37,
  Marketing:   4.10,
  HR:          4.50,
  Finance:     4.23,
  Operations:  4.30,
  Design:      4.50,
  Legal:       4.60
}
```

---

### Q14 — Find All Projects Across the Company (No Duplicates)

**Task:** Return all unique projects as an array of `{ id, name, status }` objects.

```js
// Your code here
```

**Constraints:**

- Use `.flatMap()` + deduplicate by project `id`
- 18 unique projects total

**Expected Output (partial):**

```js
[
  { id: "PRJ101", name: "Portal Redesign", status: "completed" },
  { id: "PRJ102", name: "API Migration", status: "in_progress" },
  { id: "PRJ103", name: "Q4 Sales Drive", status: "in_progress" },
  // ... 18 total
];
```

---

### Q15 — Get Leave Balance for Each Employee

**Task:** Return an array of `{ name, leaveBalance }` where balance = total - used.

```js
// Your code here
```

**Constraints:**

- Use `.map()`
- Sort by leaveBalance descending

**Expected Output (top 5):**

```js
[
  { name: "Harsh Malhotra", leaveBalance: 5 },
  { name: "Divya Nair", leaveBalance: 16 },
  { name: "Saurabh Gupta", leaveBalance: 13 },
  // ...
];
```

---

# 🟡 MEDIUM (Questions 16–32)

---

### Q16 — Group Employees by Role Level

**Task:** Group all employees into an object keyed by `role`.

```js
// Your code here
```

**Constraints:**

- Use `.reduce()`
- Each key = role name, value = array of employee names

**Expected Output:**

```js
{
  Intern:    ["Harsh Malhotra"],
  Junior:    ["Rohan Verma", "Saurabh Gupta", "Tanvi Bhatt", ...],
  Mid:       ["Divya Nair", ...],
  Senior:    ["Aarav Mehta", "Priya Sharma", ...],
  Lead:      ["Vikram Reddy", "Amit Joshi", "Anjali Menon"],
  Manager:   ["Priya Sharma"],
  Director:  ["Karan Singh", "Rahul Tiwari", ...],
  VP:        ["Nisha Kapoor", "Anita Choudhary"],
  "C-Suite": ["Suresh Nambiar"]
}
```

---

### Q17 — Employees Eligible for Promotion With Rating > 4.0

**Task:** Return employees where `promotionEligible === true` AND `rating > 4.0`.

```js
// Your code here
```

**Constraints:**

- Use `.filter()`
- Return `{ name, department, rating, role }`

**Expected Output:**

```js
[
  {
    name: "Aarav Mehta",
    department: "Engineering",
    rating: 4.5,
    role: "Senior",
  },
  { name: "Priya Sharma", department: "Sales", rating: 4.8, role: "Manager" },
  { name: "Sneha Patel", department: "Marketing", rating: 4.1, role: "Senior" },
  { name: "Meera Iyer", department: "HR", rating: 4.2, role: "Senior" },
  {
    name: "Vikram Reddy",
    department: "Engineering",
    rating: 4.6,
    role: "Lead",
  },
  { name: "Divya Nair", department: "Design", rating: 4.3, role: "Mid" },
  { name: "Anjali Menon", department: "Design", rating: 4.7, role: "Lead" },
  { name: "Nikhil Rao", department: "Engineering", rating: 4.0, role: "Mid" }, // exactly 4.0 excluded
  { name: "Tanvi Bhatt", department: "Sales", rating: 4.4, role: "Senior" },
  { name: "Pooja Desai", department: "Legal", rating: 4.6, role: "Senior" },
  { name: "Kavya Bhat", department: "Finance", rating: 4.0, role: "Mid" }, // exactly 4.0 excluded
  {
    name: "Leela Krishnamurthy",
    department: "Operations",
    rating: 4.6,
    role: "Director",
  },
];
```

---

### Q18 — Total Hours Logged Per Project

**Task:** Return an object with each project name → total hours logged across ALL employees.

```js
// Your code here
```

**Constraints:**

- Same project appears in multiple employees — SUM all hours
- Use `.flatMap()` + `.reduce()`

**Expected Output (partial):**

```js
{
  "Portal Redesign":        1050,  // 340+280+30+400 = 1050
  "API Migration":           380,  // 120+60+200
  "Microservices Refactor":  1030, // 500+80+250+150+50(EMP025)
  // ...
}
```

---

### Q19 — Find Manager → Direct Reports Mapping

**Task:** Build a map of manager ID → array of their direct reports' names.

```js
// Your code here
```

**Constraints:**

- Use `.reduce()`
- Only include managers who have at least 1 direct report in this dataset

**Expected Output (partial):**

```js
{
  "EMP001": ["Rohan Verma", "Dev Arora"],
  "EMP002": ["Tanvi Bhatt"],
  "EMP009": ["Saurabh Gupta", "Nikhil Rao", "Ravi Kumar"],
  "EMP010": ["Aarav Mehta", "Vikram Reddy", "Anjali Menon"],
  // ...
}
```

---

### Q20 — Top 3 Highest Bonus Receivers Per Department

**Task:** For each department, find the employee with the highest bonus.

```js
// Your code here
```

**Constraints:**

- Use `.reduce()` to group, then find max per group
- Return `{ department, name, bonus }`

**Expected Output:**

```js
[
  { department: "Engineering", name: "Nisha Kapoor", bonus: 150000 },
  { department: "Sales", name: "Anita Choudhary", bonus: 200000 },
  { department: "Finance", name: "Karan Singh", bonus: 80000 },
  // ...
];
```

---

### Q21 — Skill Frequency Map

**Task:** Return an object showing how many employees have each skill, sorted by count descending.

```js
// Your code here
```

**Constraints:**

- Use `.flatMap()` + `.reduce()`
- Sort entries by count descending and return as array of `[skill, count]`

**Expected Output:**

```js
[
  ["Excel", 13],
  ["SQL", 12],
  ["JavaScript", 10],
  ["React", 9],
  ["Python", 6],
  ["SAP", 5],
  // ...
];
```

---

### Q22 — Employees Who Joined More Than 5 Years Ago

**Task:** Return employees whose `hireDate` is more than 5 years before today (April 18, 2026).

```js
// Your code here
```

**Constraints:**

- Parse dates using `new Date()`
- Use `.filter()`
- Return `{ name, hireDate, yearsAtCompany }` sorted by most senior first

**Expected Output (partial):**

```js
[
  { name: "Suresh Nambiar", hireDate: "2006-04-01", yearsAtCompany: 20 },
  { name: "Anita Choudhary", hireDate: "2008-11-01", yearsAtCompany: 17 },
  { name: "Sunita Pillai", hireDate: "2009-05-05", yearsAtCompany: 16 },
  // ...
];
```

---

### Q23 — Find Employees Working on the Most Projects

**Task:** Return the top 3 employees with the highest number of active (`in_progress`) projects.

```js
// Your code here
```

**Constraints:**

- Use `.map()` + `.sort()`
- Return `{ name, activeProjectCount, projectNames[] }`

**Expected Output:**

```js
[
  {
    name: "Vikram Reddy",
    activeProjectCount: 2,
    projectNames: ["Microservices Refactor", "API Migration"],
  },
  {
    name: "Nikhil Rao",
    activeProjectCount: 1,
    projectNames: ["Microservices Refactor"],
  },
  // ... (several tied at 1)
];
```

---

### Q24 — Department-wise Remote vs Office Count

**Task:** For each department, return how many employees work remotely vs in-office.

```js
// Your code here
```

**Constraints:**

- Use `.reduce()`
- Output: `{ [department]: { remote: N, office: N } }`

**Expected Output:**

```js
{
  Engineering: { remote: 3, office: 5 },
  Sales:        { remote: 0, office: 3 },
  Marketing:    { remote: 1, office: 2 },
  // ...
}
```

---

### Q25 — Calculate Total Budget Per Project Status

**Task:** Sum up total budget for projects grouped by status: `completed`, `in_progress`, `planning`.

```js
// Your code here
```

**Constraints:**

- Projects appear in multiple employees but budget is the same per project ID
- Deduplicate by project ID before summing

**Expected Output:**

```js
{
  completed:   3650000,
  in_progress: 10800000,
  planning:    12000000
}
```

---

### Q26 — Find Employees With Overdue Leaves (pending > 0 AND used >= total)

**Task:** Find employees who have pending leave requests but have already exhausted their total leave.

```js
// Your code here
```

**Constraints:**

- Use `.filter()`
- Return `{ name, leaves }`

**Expected Output:**

```js
[{ name: "Amit Joshi", leaves: { total: 24, used: 24, pending: 5 } }];
```

---

### Q27 — Certifications Leaderboard

**Task:** Return a sorted list of employees by number of certifications (most to least).

```js
// Your code here
```

**Constraints:**

- Use `.map()` + `.sort()`
- Show employees with 0 certs at the bottom
- Return `{ name, certCount, certNames[] }`

**Expected Output (top 5):**

```js
[
  { name: "Karan Singh", certCount: 2, certNames: ["CFA Level 3", "CPA"] },
  {
    name: "Nisha Kapoor",
    certCount: 2,
    certNames: ["AWS Solutions Architect Professional", "PMP"],
  },
  {
    name: "Vikram Reddy",
    certCount: 2,
    certNames: [
      "AWS Solutions Architect Professional",
      "Kubernetes Administrator",
    ],
  },
  { name: "Sunita Pillai", certCount: 2, certNames: ["SHRM-SCP", "SPHR"] },
  {
    name: "Suresh Nambiar",
    certCount: 2,
    certNames: ["PMP", "Six Sigma Black Belt"],
  },
  // ... then 1 cert, then 0 cert employees
];
```

---

### Q28 — Find Employees Whose Role Has Changed Since Joining

**Task:** Find employees whose current `role` is different from their `joinedAs` field.

```js
// Your code here
```

**Constraints:**

- Use `.filter()`
- Return `{ name, joinedAs, currentRole: role }`

**Expected Output:**

```js
[
  { name: "Aarav Mehta", joinedAs: "Mid", currentRole: "Senior" },
  { name: "Priya Sharma", joinedAs: "Junior", currentRole: "Manager" },
  { name: "Vikram Reddy", joinedAs: "Junior", currentRole: "Lead" },
  { name: "Nisha Kapoor", joinedAs: "Senior", currentRole: "VP" },
  { name: "Anita Choudhary", joinedAs: "Senior", currentRole: "VP" },
  { name: "Divya Nair", joinedAs: "Junior", currentRole: "Mid" },
  { name: "Nikhil Rao", joinedAs: "Junior", currentRole: "Mid" },
  { name: "Tanvi Bhatt", joinedAs: "Junior", currentRole: "Senior" },
  { name: "Leela Krishnamurthy", joinedAs: "Senior", currentRole: "Director" },
  { name: "Anjali Menon", joinedAs: "Mid", currentRole: "Lead" },
  { name: "Suresh Nambiar", joinedAs: "Director", currentRole: "C-Suite" },
];
```

---

### Q29 — Total Hours Each Employee Has Logged Across All Projects

**Task:** Return each employee's total hours logged across all their projects, sorted descending.

```js
// Your code here
```

**Constraints:**

- Use `.map()` with inner `.reduce()`
- Return `{ name, totalHours }`

**Expected Output (top 5):**

```js
[
  { name: "Karan Singh", totalHours: 700 },
  { name: "Vikram Reddy", totalHours: 700 },
  { name: "Anjali Menon", totalHours: 600 },
  { name: "Leela Krishnamurthy", totalHours: 350 },
  { name: "Nisha Kapoor", totalHours: 250 },
  // ...
];
```

---

### Q30 — Average Age By Department

**Task:** Return the average age of employees per department.

```js
// Your code here
```

**Constraints:**

- Use `.reduce()` to group and accumulate, then compute average
- Round to 1 decimal place

**Expected Output:**

```js
{
  Engineering: 30.6,
  Sales:       36.3,
  Marketing:   32.3,
  HR:          36.0,
  Finance:     35.0,
  Operations:  38.7,
  Design:      32.0,
  Legal:       36.0
}
```

---

### Q31 — Find All Employees Managed by a Given Manager (by ID)

**Task:** Write `getDirectReports(managerId)` that returns all direct reports for a manager.

```js
function getDirectReports(managerId) {
  // Your code
}
getDirectReports("EMP010");
```

**Constraints:**

- Return `{ name, title, department }` of each report

**Expected Output for "EMP010":**

```js
[
  {
    name: "Aarav Mehta",
    title: "Senior Software Engineer",
    department: "Engineering",
  },
  { name: "Vikram Reddy", title: "Tech Lead", department: "Engineering" },
  { name: "Anjali Menon", title: "Design Lead", department: "Design" },
];
```

---

### Q32 — Salary Band Distribution

**Task:** Categorize employees into salary bands and count how many fall in each.

```js
// Bands: "0–75k", "75k–125k", "125k–200k", "200k–400k", "400k+"
// Use base salary only
```

**Constraints:**

- Use `.reduce()`
- Return `{ bandName: count }`

**Expected Output:**

```js
{
  "0–75k":      5,
  "75k–125k":   8,
  "125k–200k":  6,
  "200k–400k":  4,
  "400k+":      2
}
```

---

# 🔴 HARD (Questions 33–44)

---

### Q33 — Build Full Org Tree

**Task:** Build a nested org tree starting from the CEO (EMP030, not in dataset, treat as root). Each employee node should contain `{ id, name, title, reports: [] }`.

```js
function buildOrgTree(employees) {
  // Your code
}
```

**Constraints:**

- Use `.reduce()` to build a lookup map first
- Recursively nest children under their manager
- Employees whose manager is not in the dataset become top-level nodes

**Expected Output (structure):**

```js
// Top-level (manager not in dataset): EMP010, EMP020, EMP025
// Under EMP010: EMP001, EMP009, EMP016
//   Under EMP001: EMP003, EMP023
//     Under EMP003: EMP013
//   Under EMP009: EMP011, EMP017, EMP021
// ...
```

---

### Q34 — Cross-Department Skill Gap Analysis

**Task:** For each department, find which skills are used by MORE THAN ONE other department but NOT by this department.

```js
// Your code here
```

**Constraints:**

- First build a `{ skill: Set<department> }` map
- Then for each department, find skills present in 2+ other departments but missing from theirs

**Expected Output (partial):**

```js
{
  Legal: ["AWS", "Docker", "Figma", "GraphQL", "JavaScript", "MongoDB",
          "Node.js", "Python", "React", "Redis", "Salesforce", "TypeScript"],
  // ...
}
```

---

### Q35 — Monthly Salary Cost Projection (6 months with 10% raise for eligible)

**Task:** Calculate projected monthly salary costs for the next 6 months. Employees eligible for promotion get a 10% base salary raise starting month 3.

```js
// Your code here
```

**Constraints:**

- Use `.reduce()` + `.map()`
- Return array of 6 objects: `{ month: N, totalCost: N }`
- Months 1–2: current salaries; Months 3–6: 10% raise for `promotionEligible === true`

**Expected Output:**

```js
[
  { month: 1, totalCost: 5761000 },
  { month: 2, totalCost: 5761000 },
  { month: 3, totalCost: 6031450 }, // eligible employees get +10%
  { month: 4, totalCost: 6031450 },
  { month: 5, totalCost: 6031450 },
  { month: 6, totalCost: 6031450 },
];
```

---

### Q36 — Find Employees With Overlapping Projects

**Task:** Two employees "overlap" if they share at least one project. Return all pairs of employees who share a project.

```js
// Your code here
```

**Constraints:**

- Use nested `.flatMap()` or double loop with `.filter()`
- Each pair should appear only once: `[empA, empB]` not also `[empB, empA]`
- Return `{ employees: [name1, name2], sharedProjects: [...] }`

**Expected Output (partial):**

```js
[
  {
    employees: ["Aarav Mehta", "Vikram Reddy"],
    sharedProjects: ["API Migration"],
  },
  {
    employees: ["Aarav Mehta", "Nisha Kapoor"],
    sharedProjects: ["Portal Redesign", "API Migration (indirect)"],
  },
  // ...
];
```

---

### Q37 — Performance Rank Within Department

**Task:** For each department, assign rank 1, 2, 3... to employees by performance rating (highest = rank 1).

```js
// Your code here
```

**Constraints:**

- Use `.reduce()` to group, `.sort()` to rank
- Return flat array: `{ name, department, rating, rank }`

**Expected Output (Engineering):**

```js
{ name: "Nisha Kapoor", department: "Engineering", rating: 4.9, rank: 1 },
{ name: "Vikram Reddy", department: "Engineering", rating: 4.6, rank: 2 },
{ name: "Aarav Mehta",  department: "Engineering", rating: 4.5, rank: 3 },
{ name: "Nikhil Rao",   department: "Engineering", rating: 4.0, rank: 4 },
// ...
```

---

### Q38 — Detect Employees With More Pending Leaves Than Available

**Task:** Find employees where `used + pending > total` — they are in a leave deficit.

```js
// Your code here
```

**Constraints:**

- Use `.filter()`
- Return `{ name, deficit: (used + pending - total) }`

**Expected Output:**

```js
[
  { name: "Amit Joshi", deficit: 5 }, // 24+5 - 24 = 5
  { name: "Ravi Kumar", deficit: 8 }, // 24+8 - 24 = 8
  { name: "Anita Choudhary", deficit: -2 }, // NOT included — 28+0 = 28 which is < 30
];
// Only Amit Joshi: used(24)+pending(5) = 29 > total(24) ✓ deficit = 5
// Ravi Kumar: used(24)+pending(8) = 32 > total(24) ✓ deficit = 8
```

---

### Q39 — Project ROI Score (Hours per Budget Rupee)

**Task:** For each unique project, calculate an "efficiency score" = `hoursLogged / budget`. Return sorted by most efficient.

```js
// Your code here
```

**Constraints:**

- Aggregate total hours across all employees for each project
- Use the project's budget (same across all employees for same project ID)
- Return `{ projectName, totalHours, budget, efficiencyScore }` sorted by score desc

**Expected Output (partial):**

```js
[
  {
    projectName: "Employee Wellness Program",
    totalHours: 60,
    budget: 150000,
    efficiencyScore: 0.0004,
  },
  // sorted by hours/budget ratio
];
```

---

### Q40 — Find Employees With All Skills of Their Manager

**Task:** Find employees who have ALL the skills their manager has (manager must be in dataset).

```js
// Your code here
```

**Constraints:**

- First build an `id → skills` lookup map
- Use `.every()` for skill subset check
- Return `{ employee, manager, sharedSkills[] }`

**Expected Output:**

```js
// Example: if EMP001's manager is EMP010, check if EMP010's skills ⊆ EMP001's skills
[
  // Any employee whose skills are a superset of their manager's skills
];
```

---

### Q41 — Generate a Department Summary Report Object

**Task:** For each department, produce a rich summary object.

```js
// Your code here
```

**Constraints:**

- Use `.reduce()`
- Each department summary must include:
  - `headcount`
  - `avgRating`
  - `totalSalaryCost` (base + bonus)
  - `remoteCount`
  - `topPerformer` (name of highest rated)
  - `skillsUsed` (unique, sorted)
  - `promotionEligibleCount`

**Expected Output (Engineering):**

```js
{
  headcount: 8,
  avgRating: 4.09,
  totalSalaryCost: 1220000,
  remoteCount: 3,
  topPerformer: "Nisha Kapoor",
  skillsUsed: ["AWS", "Docker", "GraphQL", "JavaScript", "MongoDB", "Node.js", "Python", "React", "Redis", "TypeScript"],
  promotionEligibleCount: 4
}
```

---

### Q42 — Multi-Skill Employee Finder (employees with N+ specific skills)

**Task:** Write `findEmployeesBySkills(skills, minMatch)` — returns employees who have at least `minMatch` of the given skills.

```js
function findEmployeesBySkills(skills, minMatch) {
  // Your code
}
findEmployeesBySkills(["JavaScript", "React", "TypeScript", "GraphQL"], 3);
```

**Constraints:**

- Use `.filter()` with inner `.filter()` or `.reduce()`
- Return `{ name, matchedSkills[], matchCount }`

**Expected Output:**

```js
[
  {
    name: "Aarav Mehta",
    matchedSkills: ["JavaScript", "React", "TypeScript"],
    matchCount: 3,
  },
  {
    name: "Nisha Kapoor",
    matchedSkills: ["JavaScript", "GraphQL"],
    matchCount: 2,
  }, // excluded
  {
    name: "Dev Arora",
    matchedSkills: ["JavaScript", "React", "TypeScript", "GraphQL"],
    matchCount: 4,
  },
  {
    name: "Anjali Menon",
    matchedSkills: ["JavaScript", "React", "GraphQL"],
    matchCount: 3,
  },
];
```

---

### Q43 — Flatten and Reconstruct Employee-Project Matrix

**Task:** Create a 2D matrix (array of arrays) where rows = employees, columns = projects. Cell value = hours logged (0 if not on that project).

```js
// Your code here
// Return: { headers: ["EMP", "PRJ101", "PRJ102", ...], rows: [[name, 0, 120, ...], ...] }
```

**Constraints:**

- All 18 unique projects as columns
- All 25 employees as rows
- Use `.map()` and `.find()`

---

### Q44 — Chain of Command Lookup

**Task:** Given an employee ID, return their full management chain from their direct manager up to the highest manager in the dataset.

```js
function getManagementChain(employeeId, employees) {
  // Your code — iterative or recursive
}
getManagementChain("EMP003", employees);
```

**Expected Output:**

```js
[
  { id: "EMP001", name: "Aarav Mehta", title: "Senior Software Engineer" },
  { id: "EMP010", name: "Nisha Kapoor", title: "VP of Engineering" },
  // EMP010's manager EMP030 is not in dataset — stop here
];
```

---

# ⚫ EXPERT (Questions 45–50)

---

### Q45 — Simulate Promotion Cycle

**Task:** Run a simulated promotion cycle: any employee with `promotionEligible: true` AND `rating >= 4.5` moves up one role level. Return the new state of affected employees.

```js
const roleOrder = [
  "Intern",
  "Junior",
  "Mid",
  "Senior",
  "Lead",
  "Manager",
  "Director",
  "VP",
  "C-Suite",
];

function runPromotionCycle(employees) {
  // Your code — do NOT mutate original
}
```

**Constraints:**

- Use `.map()` — return new array, don't mutate
- Update: `role`, `salary.base` (+15%), `performance.promotionEligible = false`
- Return only the employees that were promoted

---

### Q46 — Budget Allocation Optimizer

**Task:** Given a total budget of `₹5,000,000`, find the optimal combination of `in_progress` projects (by unique project) that maximizes `totalHoursLogged` without exceeding the budget.

```js
// This is a 0/1 Knapsack problem using JS
function optimizeProjectBudget(employees, totalBudget) {
  // Your code
}
```

**Constraints:**

- Deduplicate projects by `id` first
- Use dynamic programming or greedy approach
- Return `{ selectedProjects[], totalBudget, totalHours }`

---

### Q47 — Detect Reporting Loops (Circular Manager References)

**Task:** Check if any employee is directly or indirectly their own manager (circular reference detection).

```js
function detectReportingLoops(employees) {
  // Your code
}
```

**Constraints:**

- Use DFS or Floyd's cycle detection via manager chain traversal
- Return `[]` if no loops, or array of employee IDs involved in a loop

**Expected Output:**

```js
[]; // This dataset has no loops — but write code that would catch it
```

---

### Q48 — Build a Search Index for Employees

**Task:** Build an inverted index: given any search term (partial name, skill, city, department, title), return matching employees instantly.

```js
function buildSearchIndex(employees) {
  // Returns a search function
  return function search(term) {
    /* ... */
  };
}

const search = buildSearchIndex(employees);
search("react"); // → employees with React skill
search("mumbai"); // → employees in Mumbai
search("lead"); // → employees with Lead role or "Lead" in title
```

**Constraints:**

- Pre-build the index once (O(n) build time)
- Search must be O(1) or O(k) lookup, not O(n)
- Case-insensitive matching
- Return matching employee objects

---

### Q49 — Employee Attrition Risk Score

**Task:** Calculate an attrition risk score (0–100) for each employee based on these weighted factors:

```
- Low performance rating (< 3.5):            +30 points
- Status is inactive/on_leave/probation:     +25 points
- Leave deficit (used + pending > total):    +20 points
- No certifications:                         +15 points
- No salary bonus:                           +10 points
```

```js
function calculateAttritionRisk(employees) {
  // Your code
}
```

**Constraints:**

- Use `.map()` with accumulator logic
- Cap score at 100
- Return `{ name, score, riskLevel }` where riskLevel = "Low" (<30), "Medium" (30–59), "High" (60+)
- Sort by score descending

**Expected Output (top 3):**

```js
[
  { name: "Ravi Kumar", score: 100, riskLevel: "High" }, // inactive + deficit + no bonus
  { name: "Amit Joshi", score: 65, riskLevel: "High" }, // on_leave + deficit
  { name: "Rohan Verma", score: 50, riskLevel: "Medium" }, // probation + no certs + no bonus
  // ...
];
```

---

### Q50 — Generate a Full Company Analytics Dashboard Object

**Task:** In a single pass over the data (one `.reduce()` call), compute ALL of the following and return as one object:

```js
function generateDashboard(employees) {
  return employees.reduce(
    (acc, emp) => {
      // Your code — compute EVERYTHING in one pass
    },
    {
      /* initial state */
    },
  );
}
```

**The dashboard object must include:**

```js
{
  totalHeadcount: N,
  activeCount: N,
  avgSalaryBase: N,
  totalSalaryBill: N,         // base + bonus for all
  avgPerformanceRating: N,
  topPerformer: { name, rating },
  departmentBreakdown: { [dept]: count },
  regionBreakdown: { [region]: count },
  remoteVsOffice: { remote: N, office: N },
  skillFrequency: { [skill]: count },
  promotionEligibleCount: N,
  avgLeaveUtilization: N,     // (used/total)*100, averaged
  highestPaidEmployee: { name, totalComp },   // base + bonus
  lowestPaidEmployee:  { name, totalComp },
  avgTenureYears: N,          // years since hireDate, averaged
  certifiedEmployeeCount: N,  // employees with at least 1 cert
  totalProjectBudget: N,      // unique projects only
}
```

**Constraints:**

- Compute everything in a SINGLE `.reduce()` — no second pass over employees
- For unique project budget, deduplicate by project ID inside the reducer
- All values must match individual question results above

---

## 🎯 Bonus Challenge — Real Interview Simulation

**You have 45 minutes. Complete ALL of these:**

1. From the dataset, find the department with the **highest average bonus-to-base ratio**
2. Find the employee who has **logged the most hours per project they're on** (average hours per project)
3. Return a flat list of all `{ employeeName, projectName, hoursLogged }` records, sorted by hoursLogged desc
4. Find which **city has the most employees** who are `active` and `promotionEligible`
5. Build a function `transferEmployee(id, newDepartment, newManager)` that returns an updated employee object (immutably)

---

## 📌 Methods Reference Cheat Sheet

| Method                  | Used In                                                 |
| ----------------------- | ------------------------------------------------------- |
| `.map()`                | Q1, Q10, Q15, Q17, Q23, Q27, Q28, Q29                   |
| `.filter()`             | Q3, Q5, Q8, Q9, Q11, Q12, Q17, Q22, Q26, Q28, Q38       |
| `.reduce()`             | Q2, Q6, Q7, Q13, Q16, Q18, Q19, Q20, Q21, Q24, Q30, Q32 |
| `.flatMap()`            | Q4, Q14, Q18, Q21, Q36                                  |
| `.some()`               | Q11                                                     |
| `.every()`              | Q12, Q40                                                |
| `.sort()`               | Q10, Q15, Q23, Q27, Q29, Q37                            |
| `.find()`               | Q43                                                     |
| `Set`                   | Q4, Q14, Q34                                            |
| `new Date()`            | Q22                                                     |
| Recursion               | Q33, Q44                                                |
| DP/Greedy               | Q46                                                     |
| Inverted Index          | Q48                                                     |
| Single-pass `.reduce()` | Q50                                                     |

---

_Good luck! 🚀 — Practice daily, one section per day: Easy → Medium → Hard → Expert_
