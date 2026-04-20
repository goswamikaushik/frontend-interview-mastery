# 🎓 VidyaPath Academy — JS Interview Practice (50 Questions)

### Dataset: `studentData.js` — 25 students across standards 10–12, Science/Commerce/Arts

> **How to use:** Load `studentData.js` in your browser console or Node.js.
> Each question has exact **Expected Output** to verify your solution.
> Difficulty: Easy (1–15) → Medium (16–32) → Hard (33–44) → Expert (45–50)

---

## 📁 Quick Dataset Overview

```
students[] → 25 records
Each student has:
  id, name, age, gender, standard (10/11/12), class, section
  category: "Science" | "Commerce" | "Arts"
  city, state, feeStatus: "paid" | "pending"
  scholarshipHolder: true | false
  attendance: { total, present, percentage }
  subjects: [{ code, name, marks, maxMarks, grade, isPassed, examDate }]
  performance: { rating }
  extracurricular: [array of activity strings]
  behaviorScore: (1–10)
  guardian: { name, relation, contact }
```

---

# 🟢 EASY (Questions 1–15)

---

### Q1 — Get All Student Names

**Task:** Return an array of all student names.

```js
// Your code here
```

**Constraints:** Use `.map()`

**Expected Output:**

```js
["Aarav Shah", "Priya Verma", "Rohan Patel", ...] // 25 names
```

---

### Q2 — Count Students Per Standard

**Task:** Return how many students are in each standard (10, 11, 12).

```js
// Your code here
```

**Constraints:** Use `.reduce()`

**Expected Output:**

```js
{ 10: 7, 11: 8, 12: 10 }
```

---

### Q3 — Find All Failed Students (Any Subject)

**Task:** Return students who have failed in at least one subject.

```js
// Your code here
```

**Constraints:** Use `.filter()` + `.some()`

**Expected Output:**

```js
// STU003 Rohan Patel, STU007 Amit Sharma, STU013 Harsh Malhotra,
// STU017 Dev Arora, STU023 Rahul Saxena
// Return full student objects
```

---

### Q4 — Get All Students With Pending Fees

**Task:** Return `{ name, standard, feeStatus }` for students with pending fees.

```js
// Your code here
```

**Constraints:** Use `.filter()` + `.map()`

**Expected Output:**

```js
[
  { name: "Rohan Patel", standard: 10, feeStatus: "pending" },
  { name: "Amit Sharma", standard: 12, feeStatus: "pending" },
  { name: "Harsh Malhotra", standard: 12, feeStatus: "pending" },
  { name: "Dev Arora", standard: 10, feeStatus: "pending" },
  { name: "Rahul Saxena", standard: 10, feeStatus: "pending" },
];
```

---

### Q5 — Find All Scholarship Holders

**Task:** Return names and classes of all scholarship holders.

```js
// Your code here
```

**Constraints:** Use `.filter()` + `.map()`

**Expected Output:**

```js
[
  { name: "Aarav Shah", class: "12A" },
  { name: "Sneha Joshi", class: "12B" },
  { name: "Divya Nair", class: "10A" },
  { name: "Ananya Gupta", class: "12A" },
  { name: "Nikhil Rao", class: "12C" },
  { name: "Sanya Kapoor", class: "11C" },
  { name: "Anita Pillai", class: "10C" },
  { name: "Pooja Menon", class: "12C" },
];
```

---

### Q6 — Calculate Each Student's Total Marks and Percentage

**Task:** Return `{ name, totalMarks, percentage }` for all students.

```js
// Your code here
```

**Constraints:**

- Use `.map()` with inner `.reduce()`
- percentage = (totalMarks / 500) \* 100, rounded to 2 decimal places

**Expected Output (partial):**

```js
[
  { name: "Aarav Shah", totalMarks: 420, percentage: 84.0 },
  { name: "Priya Verma", totalMarks: 415, percentage: 83.0 },
  { name: "Sneha Joshi", totalMarks: 477, percentage: 95.4 },
  // ...
];
```

---

### Q7 — Find Students With 100% Attendance (present === total)

**Task:** Return names of students with perfect attendance.

```js
// Your code here
```

**Constraints:** Use `.filter()`

**Expected Output:**

```js
[]; // No student has 100% — closest is Sneha Joshi at 99.09%
```

---

### Q8 — Get Students Sorted by Attendance Percentage (Descending)

**Task:** Return `{ name, attendance.percentage }` sorted highest to lowest.

```js
// Your code here
```

**Constraints:** Use `.map()` + `.sort()` — do NOT mutate original

**Expected Output (top 5):**

```js
[
  { name: "Sneha Joshi", percentage: 99.09 },
  { name: "Sanya Kapoor", percentage: 98.57 },
  { name: "Divya Nair", percentage: 98.0 },
  { name: "Anita Pillai", percentage: 97.0 },
  { name: "Pooja Menon", percentage: 97.72 },
  // ...
];
```

---

### Q9 — Count Students Per Category (Science / Commerce / Arts)

**Task:** Return object with count per stream/category.

```js
// Your code here
```

**Constraints:** Use `.reduce()`

**Expected Output:**

```js
{ Science: 10, Commerce: 8, Arts: 5, General: 7 }
```

---

### Q10 — Find Students With No Extracurricular Activities

**Task:** Return names of students with empty `extracurricular` array.

```js
// Your code here
```

**Constraints:** Use `.filter()` + `.map()`

**Expected Output:**

```js
["Dev Arora", "Rahul Saxena"];
```

---

### Q11 — Check if ALL Scholarship Holders Passed Every Subject

**Task:** Return `true` if every scholarship holder passed all subjects.

```js
// Your code here
```

**Constraints:** Use `.filter()` + `.every()`

**Expected Output:**

```js
true;
```

---

### Q12 — Find the Student With the Highest Behavior Score

**Task:** Return the student with `behaviorScore === 10`.

```js
// Your code here
```

**Constraints:** Use `.filter()` — there may be multiple

**Expected Output:**

```js
[
  { id: "STU004", name: "Sneha Joshi", behaviorScore: 10 },
  { id: "STU016", name: "Sanya Kapoor", behaviorScore: 10 },
  { id: "STU024", name: "Pooja Menon", behaviorScore: 10 },
];
```

---

### Q13 — Get All Unique Subjects Across the School

**Task:** Return a sorted list of all unique subject names taught.

```js
// Your code here
```

**Constraints:** Use `.flatMap()` + `Set`

**Expected Output:**

```js
[
  "Accountancy",
  "Biology",
  "Business Studies",
  "Chemistry",
  "Economics",
  "English",
  "Geography",
  "Hindi",
  "History",
  "Mathematics",
  "Physics",
  "Political Science",
  "Psychology",
  "Science",
  "Social Studies",
];
```

---

### Q14 — Find Students With Attendance Below 75%

**Task:** Return `{ name, standard, attendancePercentage }` for students with attendance < 75%.

```js
// Your code here
```

**Constraints:** Use `.filter()` + `.map()`

**Expected Output:**

```js
[
  { name: "Amit Sharma", standard: 12, attendancePercentage: 72.72 },
  { name: "Rahul Saxena", standard: 10, attendancePercentage: 65.0 },
];
```

---

### Q15 — Get Subject-wise Marks for a Given Student

**Task:** Write `getStudentReport(studentId)` that returns their subject results.

```js
function getStudentReport(studentId) {
  // Your code
}
getStudentReport("STU004");
```

**Expected Output:**

```js
{
  name: "Sneha Joshi",
  class: "12B",
  subjects: [
    { subject: "Physics",     marks: 97, grade: "A+", passed: true },
    { subject: "Chemistry",   marks: 94, grade: "A+", passed: true },
    { subject: "Mathematics", marks: 99, grade: "A+", passed: true },
    { subject: "Biology",     marks: 96, grade: "A+", passed: true },
    { subject: "English",     marks: 91, grade: "A+", passed: true }
  ]
}
```

---

# 🟡 MEDIUM (Questions 16–32)

---

### Q16 — Class Topper Per Standard

**Task:** Find the student with the highest total marks in each standard (10, 11, 12).

```js
// Your code here
```

**Constraints:** Use `.reduce()` to group, then find max per group

**Expected Output:**

```js
{
  10: { name: "Divya Nair",   totalMarks: 437 },
  11: { name: "Sanya Kapoor", totalMarks: 456 },
  12: { name: "Sneha Joshi",  totalMarks: 477 }
}
```

---

### Q17 — Subject Toppers Across the School

**Task:** For each subject name, find the student who scored highest marks.

```js
// Your code here
```

**Constraints:**

- Use `.flatMap()` to get all `{ studentName, subjectName, marks }` records
- Then `.reduce()` to find max per subject

**Expected Output:**

```js
{
  Mathematics:      { student: "Sneha Joshi",  marks: 99 },
  Physics:          { student: "Sneha Joshi",  marks: 97 },
  Biology:          { student: "Sneha Joshi",  marks: 96 },
  Chemistry:        { student: "Sneha Joshi",  marks: 94 },
  English:          { student: "Pooja Menon",  marks: 95 },
  Accountancy:      { student: "Sanya Kapoor", marks: 95 },
  "Political Science": { student: "Pooja Menon", marks: 93 },
  // ...
}
```

---

### Q18 — Average Marks Per Subject (School-wide)

**Task:** Return the school-wide average marks for each subject.

```js
// Your code here
```

**Constraints:**

- Only average across students who took that subject (not all 25)
- Use `.flatMap()` + `.reduce()`
- Round to 2 decimal places

**Expected Output (partial):**

```js
{
  Mathematics:   68.44,
  English:       72.48,
  Physics:       79.33,
  Chemistry:     77.0,
  // ...
}
```

---

### Q19 — Grade Distribution (How Many A+, A, B+, B, C, D, F)

**Task:** Return a count of how many times each grade appears across ALL subjects of ALL students.

```js
// Your code here
```

**Constraints:** Use `.flatMap()` + `.reduce()`

**Expected Output:**

```js
{
  "A+": 28,
  "A":  32,
  "B+": 12,
  "B":  28,
  "C":  14,
  "D":  8,
  "F":  8
}
```

---

### Q20 — Students Who Failed in 2 or More Subjects

**Task:** Return students with 2+ failed subjects, showing which subjects they failed.

```js
// Your code here
```

**Constraints:** Use `.filter()` + `.map()`

**Expected Output:**

```js
[
  {
    name: "Harsh Malhotra",
    failedSubjects: ["Economics", "Mathematics"],
    failCount: 2,
  },
  {
    name: "Rahul Saxena",
    failedSubjects: ["Mathematics", "Science", "English"],
    failCount: 3,
  },
];
```

---

### Q21 — Group Students by City

**Task:** Return an object keyed by city, value = array of student names in that city.

```js
// Your code here
```

**Constraints:** Use `.reduce()`

**Expected Output (partial):**

```js
{
  Ahmedabad:   ["Aarav Shah", "Karan Mehta", "Tanvi Bhatt"],
  Surat:       ["Priya Verma", "Pooja Desai"],
  Mumbai:      ["Divya Nair", "Sanya Kapoor"],
  Chennai:     ["Ravi Kumar", "Kavya Iyer"],
  // ...
}
```

---

### Q22 — Find Students Eligible for Merit Certificate

**Task:** A student is eligible if: percentage >= 85% AND attendance >= 90% AND no failed subjects.

```js
// Your code here
```

**Constraints:** Use `.filter()`

**Expected Output:**

```js
[
  { name: "Aarav Shah", percentage: 84.0 }, // excluded: percentage < 85
  { name: "Sneha Joshi", percentage: 95.4 }, // ✓ included
  { name: "Ananya Gupta", percentage: 89.2 }, // ✓ included
  { name: "Sanya Kapoor", percentage: 91.2 }, // ✓ included
  { name: "Tanvi Bhatt", percentage: 84.6 }, // excluded: percentage < 85
  // ... return full objects
];
```

---

### Q23 — Count How Many Students Are in Each Extracurricular Activity

**Task:** Return `{ activityName: studentCount }` for all activities.

```js
// Your code here
```

**Constraints:** Use `.flatMap()` + `.reduce()`

**Expected Output (partial):**

```js
{
  "Debate Club":       5,
  "Science Olympiad":  4,
  "Student Council":   3,
  "Cricket Team":      3,
  "Football Team":     3,
  "Dance Team":        3,
  // ...
}
```

---

### Q24 — State-wise Student Count and Average Performance

**Task:** For each state, return `{ studentCount, avgPercentage }`.

```js
// Your code here
```

**Constraints:** Use `.reduce()` — compute both in one pass per state

**Expected Output (partial):**

```js
{
  Gujarat:         { studentCount: 8, avgPercentage: 82.4 },
  Maharashtra:     { studentCount: 4, avgPercentage: 78.5 },
  "Tamil Nadu":    { studentCount: 4, avgPercentage: 86.2 },
  Kerala:          { studentCount: 4, avgPercentage: 88.1 },
  // ...
}
```

---

### Q25 — Find Students Who Improved in English vs Mathematics

**Task:** Return students where English marks > Mathematics marks.

```js
// Your code here
```

**Constraints:** Use `.filter()` with inner `.find()`

**Expected Output:**

```js
[
  { name: "Priya Verma", englishMarks: 80, mathMarks: 72 },
  { name: "Pooja Desai", englishMarks: 82, mathMarks: 72 },
  { name: "Amit Sharma", englishMarks: 44, mathMarks: 38 }, // both low but Eng > Math
  // ...
];
```

---

### Q26 — Identify At-Risk Students (3 criteria)

**Task:** A student is "at-risk" if they meet 2 or more of:

- attendance < 80%
- failed 1+ subjects
- behaviorScore < 6

```js
// Your code here
```

**Constraints:** Use `.filter()` + score each condition

**Expected Output:**

```js
[
  { name: "Rohan Patel", riskFlags: ["attendance < 80%", "failed subject"] },
  {
    name: "Amit Sharma",
    riskFlags: ["attendance < 80%", "failed subject", "behavior < 6"],
  },
  { name: "Harsh Malhotra", riskFlags: ["failed subject", "behavior < 6"] },
  { name: "Dev Arora", riskFlags: ["attendance < 80%", "failed subject"] },
  {
    name: "Rahul Saxena",
    riskFlags: ["attendance < 80%", "failed subject", "behavior < 6"],
  },
];
```

---

### Q27 — Section-wise Topper (A, B, C)

**Task:** For each section (A, B, C), return the student with highest total marks.

```js
// Your code here
```

**Constraints:** Use `.reduce()` to group and find max

**Expected Output:**

```js
{
  A: { name: "Sneha Joshi",  section: "A", standard: 12, totalMarks: 477 },
  // wait — Sneha is section B. Recalculate:
  A: { name: "Ananya Gupta", section: "A", standard: 12, totalMarks: 446 },
  B: { name: "Sneha Joshi",  section: "B", standard: 12, totalMarks: 477 },
  C: { name: "Sanya Kapoor", section: "C", standard: 11, totalMarks: 456 }
}
```

---

### Q28 — Guardian Contact List for Failing Students

**Task:** Return `{ studentName, guardianName, contact, failedSubjects[] }` for students who failed any subject.

```js
// Your code here
```

**Constraints:** Use `.filter()` + `.map()`

**Expected Output:**

```js
[
  {
    studentName: "Rohan Patel",
    guardianName: "Mahesh Patel",
    contact: "+91-9876503000",
    failedSubjects: ["Mathematics"],
  },
  {
    studentName: "Amit Sharma",
    guardianName: "Vijay Sharma",
    contact: "+91-9876507000",
    failedSubjects: ["Political Science"],
  },
  {
    studentName: "Harsh Malhotra",
    guardianName: "Sunil Malhotra",
    contact: "+91-9876513000",
    failedSubjects: ["Economics", "Mathematics"],
  },
  {
    studentName: "Dev Arora",
    guardianName: "Sanjeev Arora",
    contact: "+91-9876517000",
    failedSubjects: ["Science"],
  },
  {
    studentName: "Rahul Saxena",
    guardianName: "Deepak Saxena",
    contact: "+91-9876523000",
    failedSubjects: ["Mathematics", "Science", "English"],
  },
];
```

---

### Q29 — Compute Grade Point Average (GPA) Per Student

**Task:** Map grades to grade points and compute GPA for each student.

```js
// Grade scale:
// A+ = 10, A = 9, B+ = 8, B = 7, C = 6, D = 5, F = 0
```

**Constraints:** Use `.map()` with inner `.reduce()`, round to 2 decimal places

**Expected Output (partial):**

```js
[
  { name: "Sneha Joshi", gpa: 10.0 },
  { name: "Sanya Kapoor", gpa: 9.8 },
  { name: "Pooja Menon", gpa: 9.8 },
  { name: "Aarav Shah", gpa: 8.6 },
  // ...
  { name: "Rahul Saxena", gpa: 2.8 },
];
```

---

### Q30 — Find Students Who Participated in the Most Activities

**Task:** Return top 5 students by number of extracurricular activities.

```js
// Your code here
```

**Constraints:** Use `.map()` + `.sort()`

**Expected Output:**

```js
[
  {
    name: "Sneha Joshi",
    activityCount: 3,
    activities: ["Science Olympiad", "Robotics Club", "Student Council"],
  },
  {
    name: "Tanvi Bhatt",
    activityCount: 3,
    activities: ["Debate Club", "Theatre Club", "Student Council"],
  },
  {
    name: "Sanya Kapoor",
    activityCount: 3,
    activities: ["Commerce Club", "Student Council", "Quiz Team"],
  },
  {
    name: "Pooja Menon",
    activityCount: 3,
    activities: ["Literary Club", "Debate Club", "Theatre Club"],
  },
  {
    name: "Divya Nair",
    activityCount: 3,
    activities: ["Dance Team", "Art Club", "Student Council"],
  },
];
```

---

### Q31 — Fee Collection Summary

**Task:** Return `{ totalPaid, totalPending, paidCount, pendingCount }`.

```js
// Your code here
```

**Constraints:** Use a single `.reduce()` call

**Expected Output:**

```js
{ paidCount: 20, pendingCount: 5 }
// (fee amounts not in dataset — count only)
```

---

### Q32 — Find Students Who Are Both Scholarship Holders AND Have Pending Fees

**Task:** Return any contradiction — scholarship holders with pending fees.

```js
// Your code here
```

**Constraints:** Use `.filter()`

**Expected Output:**

```js
[]; // No scholarship holder has pending fees — data is clean
```

---

# 🔴 HARD (Questions 33–44)

---

### Q33 — Full Result Card Generator

**Task:** Write `generateResultCard(studentId)` that returns a formatted result object.

```js
function generateResultCard(studentId) {
  // Your code
}
generateResultCard("STU001");
```

**Output must include:**

```js
{
  studentInfo:  { id, name, class, category },
  subjectResults: [{ subject, marks, maxMarks, grade, status: "Pass"/"Fail" }],
  totalMarks:   420,
  percentage:   84.0,
  overallGrade: "A",        // based on percentage: 90+=A+, 80-89=A, 70-79=B+...
  result:       "PASS",     // PASS if no failed subjects
  rank:         null,       // compute rank among same standard
  attendance:   "93.18%",
  behaviorScore: 9
}
```

---

### Q34 — Rank Students Within Their Standard

**Task:** Assign rank 1, 2, 3... to each student within their standard based on total marks.

```js
// Your code here
```

**Constraints:**

- Use `.reduce()` to group by standard
- `.sort()` within each group
- Return flat array with `{ name, standard, totalMarks, rank }`

**Expected Output (Standard 12, top 3):**

```js
{ name: "Sneha Joshi",  standard: 12, totalMarks: 477, rank: 1 },
{ name: "Ananya Gupta", standard: 12, totalMarks: 446, rank: 2 },
{ name: "Kavya Iyer",   standard: 12, totalMarks: 443, rank: 3 },
// ...
```

---

### Q35 — Subject Pass Rate Analysis

**Task:** For each subject, calculate the pass rate (% of students who passed it).

```js
// Your code here
```

**Constraints:**

- Only include students who actually took that subject
- Use `.flatMap()` + `.reduce()`
- Return `{ subject, totalTook, passCount, passRate }` sorted by passRate ascending

**Expected Output:**

```js
[
  { subject: "Mathematics", totalTook: 18, passCount: 14, passRate: "77.78%" },
  {
    subject: "Political Science",
    totalTook: 5,
    passCount: 4,
    passRate: "80.0%",
  },
  // ...
  { subject: "English", totalTook: 25, passCount: 23, passRate: "92.0%" },
];
```

---

### Q36 — Improvement Potential Score

**Task:** Calculate "improvement potential" for each student: the sum of marks they are short of 100 in subjects they passed (subjects they failed don't count — they need remedial help, not improvement).

```js
function improvementPotential(students) {
  // Your code
}
```

**Constraints:** Use `.map()` with inner `.filter()` + `.reduce()`

**Expected Output (partial):**

```js
[
  { name: "Sneha Joshi", potential: 23 }, // 3+6+1+4+9 = 23 marks gap in passed subjects
  { name: "Rahul Saxena", potential: 105 }, // only SST(55) + HIN(50) = 55+50 passed; gaps = 45+50 = 95
  // ...
];
```

---

### Q37 — Predict Stream for Standard 10 Students

**Task:** Based on their strongest subject group, predict which stream (Science/Commerce/Arts) a Std 10 student should choose.

```js
// Science subjects in std 10: Mathematics, Science
// Commerce subjects in std 10: Mathematics, Social Studies
// Arts subjects in std 10: Social Studies, Hindi, English
// Pick the stream where the student's average in those subjects is highest
```

```js
function predictStream(students) {
  // Your code — only process standard === 10 students
}
```

**Expected Output:**

```js
[
  {
    name: "Rohan Patel",
    predictedStream: "Arts",
    reasoning: "avg Arts subjects: 54.33",
  },
  {
    name: "Divya Nair",
    predictedStream: "Science",
    reasoning: "avg Science subjects: 91.0",
  },
  {
    name: "Vikram Singh",
    predictedStream: "Arts",
    reasoning: "avg Arts subjects: 66.67",
  },
  {
    name: "Anita Pillai",
    predictedStream: "Science",
    reasoning: "avg Science subjects: 89.0",
  },
  // ...
];
```

---

### Q38 — Attendance vs Performance Correlation Buckets

**Task:** Group students into 4 buckets based on attendance AND performance:

```
- "Star":      attendance >= 90% AND percentage >= 80%
- "Diligent":  attendance >= 90% AND percentage < 80%
- "Talented":  attendance < 90%  AND percentage >= 80%
- "Struggling":attendance < 90%  AND percentage < 80%
```

```js
// Your code here
```

**Constraints:** Use `.reduce()` — group students into 4 buckets

**Expected Output:**

```js
{
  Star:      ["Sneha Joshi", "Ananya Gupta", "Sanya Kapoor", "Tanvi Bhatt", "Meera Reddy", "Divya Nair", "Anita Pillai", "Pooja Menon", "Nikhil Rao", "Ravi Kumar", "Kavya Iyer", "Pooja Desai", "Aarav Shah"],
  Diligent:  ["Priya Verma", "Meera Reddy"],
  Talented:  ["Saurabh Jain", "Gaurav Tiwari"],
  Struggling: ["Rohan Patel", "Amit Sharma", "Harsh Malhotra", "Dev Arora", "Vikram Singh", "Rahul Saxena", "Karan Mehta", "Arjun Nambiar", "Gaurav Tiwari"]
}
```

---

### Q39 — Subject Difficulty Index

**Task:** Calculate a "difficulty index" for each subject = `(number of students who failed it) / (total students who took it)`. Higher = harder subject.

```js
// Your code here
```

**Constraints:** Use `.flatMap()` + `.reduce()`

**Expected Output:**

```js
[
  { subject: "Mathematics", difficultyIndex: 0.222 }, // 4 fails / 18 took
  { subject: "Science (Std 10)", difficultyIndex: 0.167 },
  { subject: "Political Science", difficultyIndex: 0.2 },
  // sorted by difficultyIndex desc
];
```

---

### Q40 — Build a Students-to-Activities Matrix

**Task:** Create a lookup: `{ activityName: [studentNames] }` — each activity mapped to all students who participate.

```js
// Your code here
```

**Constraints:**

- Use `.reduce()` on `.flatMap()` output
- Sort student names alphabetically within each activity

**Expected Output (partial):**

```js
{
  "Debate Club":      ["Ananya Gupta", "Kavya Iyer", "Pooja Menon", "Priya Verma", "Tanvi Bhatt"],
  "Science Olympiad": ["Aarav Shah", "Ananya Gupta", "Anita Pillai", "Sneha Joshi"],
  "Student Council":  ["Divya Nair", "Sanya Kapoor", "Sneha Joshi", "Tanvi Bhatt"],
  // ...
}
```

---

### Q41 — Generate School Report Card (Full Analytics Object)

**Task:** Using a single `.reduce()`, generate the school's full analytics.

```js
function schoolReport(students) {
  return students.reduce((acc, student) => {
    // Everything in one pass
  }, {});
}
```

**Must include:**

```js
{
  totalStudents:       25,
  passedAll:           N,      // students with zero failed subjects
  failedAny:           N,
  scholarshipCount:    N,
  pendingFeesCount:    N,
  avgAttendance:       N,      // school-wide average attendance %
  avgPercentage:       N,      // school-wide average marks %
  topStudent:          { name, percentage },
  weakestStudent:      { name, percentage },
  streamBreakdown:     { Science: N, Commerce: N, Arts: N, General: N },
  behaviorAvg:         N,
  totalAbsences:       N       // sum of (total - present) for all students
}
```

---

### Q42 — Find Students Who Scored Higher Than Class Average in Every Subject

**Task:** First compute class average per subject, then find students who beat the average in ALL their subjects.

```js
// Your code here
```

**Constraints:**

- Step 1: compute avg marks per subject using `.flatMap()` + `.reduce()`
- Step 2: use `.filter()` + `.every()` to find students above average in all

---

### Q43 — Normalize Marks (Min-Max Scaling) Per Subject

**Task:** For each subject, normalize all student marks to a 0–100 scale using:
`normalizedMark = ((mark - min) / (max - min)) * 100`

```js
function normalizeMarks(students) {
  // Return new array with normalized marks — do NOT mutate original
}
```

**Constraints:**

- Use `.map()` — return entirely new student objects
- Compute min/max per subject across all students who took it

---

### Q44 — Detect Anomalies (Outlier Marks)

**Task:** A mark is an "outlier" if it's more than 2 standard deviations below the subject mean. Find all such anomalous marks.

```js
function detectAnomalies(students) {
  // Your code
}
```

**Constraints:**

- Calculate mean and stdDev per subject
- Flag marks where `mark < mean - 2*stdDev`
- Return `{ studentName, subject, marks, mean, stdDev, deviation }`

---

# ⚫ EXPERT (Questions 45–50)

---

### Q45 — Simulate Scholarship Renewal

**Task:** Scholarship is renewed if: percentage >= 80% AND attendance >= 85% AND behaviorScore >= 7. For current non-scholarship holders who meet criteria, grant scholarship. For current holders who don't, revoke it.

```js
function simulateScholarshipRenewal(students) {
  // Return new array — DO NOT mutate original
  // Return only students whose scholarship status CHANGED
}
```

**Expected Output:**

```js
[
  { name: "Ravi Kumar", action: "GRANTED", reason: "Meets all criteria" },
  { name: "Priya Verma", action: "GRANTED", reason: "Meets all criteria" },
  { name: "Meera Reddy", action: "GRANTED", reason: "Meets all criteria" },
  // Any current holders who fail criteria → "REVOKED"
];
```

---

### Q46 — Generate a Personalized Improvement Plan Per Student

**Task:** For each student, generate a personalized plan object.

```js
function generateImprovementPlan(student) {
  return {
    studentName: ...,
    prioritySubjects: [],  // subjects where marks < 60, sorted by marks asc
    strengthSubjects: [],  // subjects where marks >= 80
    attendanceAlert: bool, // true if attendance < 85%
    recommendedActivities: [], // suggest 2 activities they're NOT already in
    overallAdvice: "string"    // one-line advice based on their profile
  }
}
```

**Constraints:**

- Use `.filter()`, `.sort()`, `.map()`
- `recommendedActivities` — pick 2 from a predefined list not in their current list

---

### Q47 — Class Seat Allocation Optimizer

**Task:** Given 3 sections (A, B, C), redistribute students so each section has balanced:

1. Equal gender ratio
2. Equal average performance
3. Max 10 students per section

```js
function optimizeSeatAllocation(students) {
  // Return new allocation: { A: [studentIds], B: [studentIds], C: [studentIds] }
}
```

**Constraints:**

- Sort students by performance
- Distribute using snake-draft order (1→A, 2→B, 3→C, 4→C, 5→B, 6→A...)
- Return new section assignments with summary stats

---

### Q48 — Full-Text Search Engine for Students

**Task:** Build a search index that can query across all student fields.

```js
function buildStudentSearch(students) {
  // Pre-build index
  return function search(query) {
    // Return matching students
  };
}

const search = buildStudentSearch(students);
search("Gujarat"); // → students from Gujarat
search("Science"); // → students in Science stream
search("failed"); // → students who failed any subject
search("scholarship"); // → scholarship holders
search("Chess"); // → students in Chess Club
```

**Constraints:**

- Pre-build index at O(n) — search must be O(1)/O(k)
- Case-insensitive
- Support partial matches

---

### Q49 — Academic Trend Prediction (Simple Linear Scoring)

**Task:** Given that each student has 5 subjects with an implicit "difficulty order" (exam dates), predict whether their performance "improved", "declined", or "stayed consistent" across the exam sequence.

```js
function analyzePerformanceTrend(student) {
  // Sort subjects by examDate
  // Calculate if marks trend upward, downward, or flat
  // Use simple linear regression slope or just avg of first half vs second half
  return {
    studentName: ...,
    trend: "improving" | "declining" | "consistent",
    slope: N,  // positive = improving, negative = declining
    subjectSequence: [{ subject, marks, examDate }] // sorted by date
  }
}
```

---

### Q50 — School Leaderboard with Full Stats (Single Pass)

**Task:** In one `.reduce()`, compute the complete leaderboard AND school-wide stats simultaneously.

```js
function buildLeaderboard(students) {
  const result = students.reduce(
    (acc, student) => {
      // Single pass — compute BOTH leaderboard entry AND running stats
    },
    {
      leaderboard: [],
      schoolStats: {
        /* initial */
      },
    },
  );

  result.leaderboard.sort(/* by percentage */);
  return result;
}
```

**Output:**

```js
{
  leaderboard: [
    { rank: 1, name: "Sneha Joshi",  standard: 12, percentage: 95.4,  grade: "A+", scholarshipHolder: true },
    { rank: 2, name: "Sanya Kapoor", standard: 11, percentage: 91.2,  grade: "A+", scholarshipHolder: true },
    // ...all 25 students ranked
  ],
  schoolStats: {
    avgPercentage:    N,
    highestScore:     { name, percentage },
    lowestScore:      { name, percentage },
    passRate:         "N%",     // students with no failed subjects
    scholarshipRate:  "N%",
    avgBehaviorScore: N,
    totalAbsenceDays: N,
    streamToppers: {
      Science:  { name, percentage },
      Commerce: { name, percentage },
      Arts:     { name, percentage },
      General:  { name, percentage }
    }
  }
}
```

---

## 🎯 Bonus — Real Interview Simulation (45 Minutes)

Solve all 5 in one go, no hints:

1. Find the student who has the **best balance** of marks AND attendance (highest combined z-score)
2. Return a list of `{ subject, avgMarks }` only for **Science stream students**
3. Find all students who **share the same extracurricular activity** — return pairs: `[studentA, studentB, sharedActivity]`
4. Build a function `promoteAll(students)` — returns updated students where `standard` is incremented by 1 (10→11→12), **excluding** students who failed any subject
5. Return `{ city: topStudentName }` — city-wise best performer by percentage

---

## 📌 Methods Reference

| Method                  | Used In                                                       |
| ----------------------- | ------------------------------------------------------------- |
| `.map()`                | Q1, Q6, Q8, Q15, Q29, Q30, Q33                                |
| `.filter()`             | Q3, Q4, Q5, Q7, Q10, Q11, Q14, Q22, Q25, Q26, Q28, Q32        |
| `.reduce()`             | Q2, Q9, Q16, Q17, Q18, Q19, Q21, Q23, Q24, Q27, Q31, Q34, Q41 |
| `.flatMap()`            | Q13, Q17, Q18, Q19, Q23, Q35, Q39, Q40                        |
| `.some()`               | Q3                                                            |
| `.every()`              | Q11, Q42                                                      |
| `.sort()`               | Q8, Q30, Q34                                                  |
| `.find()`               | Q25                                                           |
| `Set`                   | Q13                                                           |
| `new Date()`            | Q49                                                           |
| Single-pass `.reduce()` | Q41, Q50                                                      |
| Linear Regression       | Q49                                                           |
| Search Index            | Q48                                                           |

---

_Practice schedule: Day 1 → Q1–15 | Day 2 → Q16–32 | Day 3 → Q33–44 | Day 4 → Q45–50 + Bonus 🚀_
