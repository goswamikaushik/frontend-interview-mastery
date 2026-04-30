# Hospital Dataset — 50 Interview Questions

> Dataset: `hospital-dataset.js` · Import: `hospitalData`, `doctors`  
> Difficulty: Easy (Q1–Q15) · Medium (Q16–Q35) · Hard (Q36–Q50)

---

## EASY — Q1 to Q15

_Basic filter, map, count, flat access_

---

### Q1 — Total number of patients

**Task:** Return the total patient count in the dataset.  
**Constraints:** Simple count.  
**Expected output:** `30`

---

### Q2 — Patients with no admissions

**Task:** Return array of `{ patientId, name }` for patients who have ZERO admissions.  
**Constraints:** Filter on `admissions.length === 0`.  
**Expected output:**

```js
[{ patientId: "PT026", name: "Zara Khan" }];
```

---

### Q3 — All unique hospitals

**Task:** Return a sorted array of unique hospital names.  
**Constraints:** No duplicates, alphabetical order.  
**Expected output:**

```js
["Apollo Medical Centre", "City General Hospital", "Sunrise Health Institute"];
```

---

### Q4 — Patients grouped by blood group

**Task:** Return object where keys are blood groups and values are patient counts.  
**Constraints:** Count all patients per blood group.  
**Expected output shape:**

```js
{ "A+": 10, "B+": 7, "O+": 6, ... }
```

---

### Q5 — Patients from each hospital

**Task:** Return `{ hospitalName: count }` of patients per hospital.  
**Constraints:** Count distinct patients, not admissions.  
**Expected output:**

```js
{
  "City General Hospital": 11,
  "Apollo Medical Centre": 10,
  "Sunrise Health Institute": 9
}
```

---

### Q6 — List all unique diagnoses

**Task:** Return a sorted array of all unique diagnosis strings across all admissions.  
**Constraints:** Flatten all admissions, extract diagnosis, deduplicate, sort.  
**Expected output shape:** `["Angina", "Appendicitis", "Arrhythmia", ...]`

---

### Q7 — Patients who have insurance

**Task:** Return count of patients where `insuranceCovered` is `true`.  
**Constraints:** Count only.  
**Expected output:** `22`

---

### Q8 — Average age of all patients

**Task:** Return average age of all patients, rounded to 1 decimal place.  
**Constraints:** Use `toFixed(1)` or `Math.round` to 1 decimal.  
**Expected output:** `48.1` _(verify against dataset)_

---

### Q9 — Patients with critical admissions

**Task:** Return `{ patientId, name }` for all patients who had AT LEAST ONE admission with `severity: "critical"`.  
**Constraints:** Patient may appear once even if multiple critical admissions.  
**Expected output shape:** Array of `{ patientId, name }`

---

### Q10 — Total number of tests conducted

**Task:** Count every test object across all admissions across all patients.  
**Constraints:** Flatten all admissions → flatten all tests → count.  
**Expected output:** `75` _(verify against dataset)_

---

### Q11 — Patients who left reviews

**Task:** Return count of patients who left AT LEAST ONE review.  
**Constraints:** Filter on `reviews.length > 0`.  
**Expected output:** `19`

---

### Q12 — Most common insurance provider

**Task:** Return the name of the most-used insurance provider (ignore `null`).  
**Constraints:** Count by `insuranceProvider`, find max, return provider name.  
**Expected output:** `"StarHealth"`

---

### Q13 — Patients above age 60

**Task:** Return `{ patientId, name, age }` for all patients older than 60.  
**Constraints:** `age > 60` strictly.  
**Expected output shape:** Array of `{ patientId, name, age }` sorted by age descending.

---

### Q14 — All departments used across all admissions

**Task:** Return a sorted list of unique department names used across all admissions.  
**Constraints:** Flatten, deduplicate, sort alphabetically.  
**Expected output shape:** `["Cardiology", "Dermatology", "Emergency", ...]`

---

### Q15 — Patients who paid out-of-pocket (no insurance)

**Task:** Return `{ patientId, name, city }` for all patients where `insuranceCovered === false`.  
**Constraints:** Direct filter.  
**Expected output shape:** Array of `{ patientId, name, city }`

---

## MEDIUM — Q16 to Q35

_Aggregation, grouping, cross-referencing, multi-condition logic_

---

### Q16 — Total revenue per hospital

**Task:** Sum up `totalBill` across all admissions grouped by hospital.  
**Constraints:** Group by `patient.hospital`, sum all `totalBill` per group. Round final values.  
**Expected output shape:**

```js
{
  "City General Hospital": 456000,
  "Apollo Medical Centre": 530000,
  "Sunrise Health Institute": 665000
}
```

---

### Q17 — Doctor with most patients treated

**Task:** Count how many UNIQUE patients each doctor treated. Return `{ doctorId, name, patientCount }` for the top doctor.  
**Constraints:** Cross-reference `doctors` array for name. Count unique `patientId` per `doctorId`.  
**Expected output shape:** `{ doctorId: "DR001", name: "Dr. Suresh Malhotra", patientCount: 7 }`

---

### Q18 — Average rating per doctor

**Task:** Return `{ doctorId, name, avgRating, reviewCount }` for each doctor who has AT LEAST ONE review. Sort by `avgRating` descending.  
**Constraints:** Flatten all `reviews` arrays from all patients. Average the `rating` values per `doctorId`. Round to 2 decimals.  
**Expected output shape:** Array sorted by avgRating desc.

---

### Q19 — Total amount paid out-of-pocket (no insurance) by city

**Task:** Sum `patientPaid` for patients with `insuranceCovered === false`, grouped by city.  
**Constraints:** Only uninsured patients. Sum `patientPaid` across ALL their admissions per city.  
**Expected output shape:** `{ "Mumbai": 59000, "Bangalore": 107000, ... }`

---

### Q20 — Readmission rate per hospital

**Task:** For each hospital, calculate `readmittedCount / totalAdmissions * 100` as a percentage.  
**Constraints:** Count admissions where `readmitted === true`. Round to 1 decimal.  
**Expected output shape:**

```js
{
  "City General Hospital": "15.4%",
  "Apollo Medical Centre": "14.3%",
  "Sunrise Health Institute": "11.1%"
}
```

---

### Q21 — Top 3 most expensive tests

**Task:** Return the top 3 tests by `cost`, with patient name and admission.  
**Constraints:** Flatten all tests, sort by cost descending, return top 3 with `{ testName, cost, patientName, admissionId }`.  
**Expected output shape:** Array of 3 objects.

---

### Q22 — Most prescribed medication

**Task:** Return the medication name that appears most frequently across all admissions.  
**Constraints:** Flatten all `medications` arrays, count by `name`, return the top one with count.  
**Expected output shape:** `{ medicationName: "Amlodipine", count: 4 }`

---

### Q23 — Patients with multiple admissions

**Task:** Return `{ patientId, name, admissionCount }` for all patients with MORE THAN ONE admission. Sort by count descending.  
**Constraints:** Filter `admissions.length > 1`.  
**Expected output shape:** Array sorted by `admissionCount` desc.

---

### Q24 — Insurance coverage gap analysis

**Task:** For each patient with insurance, calculate `gapAmount = totalBill - insurancePaid` summed across all admissions. Return top 5 patients with highest gap.  
**Constraints:** Only `insuranceCovered === true`. Sum both fields across all admissions. Return `{ patientId, name, totalBill, totalInsurancePaid, gap }`.  
**Expected output shape:** Top 5 sorted by gap descending.

---

### Q25 — Department with highest average bill

**Task:** Calculate average `totalBill` per department and return the department with the highest average.  
**Constraints:** Group admissions by department, average `totalBill`, round to 0 decimals.  
**Expected output shape:** `{ department: "Oncology", averageBill: 161667 }`

---

### Q26 — Monthly admission trend (2024)

**Task:** Return `{ month: "January", count: X }` for each month that had admissions in 2024.  
**Constraints:** Parse `admittedAt`, group by month name, count admissions. Months with 0 admissions can be excluded.  
**Expected output shape:** Array of `{ month, count }` in calendar order.

---

### Q27 — Patients who had abnormal test results

**Task:** Return `{ patientId, name, testName, result }` for every test where `result` contains the word "abnormal", "elevated", "positive", or "high".  
**Constraints:** Case-insensitive partial match on result string. One row per test, not per patient.  
**Expected output shape:** Array of `{ patientId, name, testName, result }`

---

### Q28 — Gender breakdown per department

**Task:** For each department, return count of Male vs Female patients.  
**Constraints:** One admission = one department. If patient admitted to same dept twice, count twice. Group by department.  
**Expected output shape:**

```js
{
  "Cardiology": { Male: 5, Female: 2 },
  "Oncology":   { Male: 1, Female: 2 },
  ...
}
```

---

### Q29 — Patients whose full bill was covered by insurance

**Task:** Return `{ patientId, name }` for patients where in ALL their admissions, `insurancePaid === totalBill`.  
**Constraints:** Every single admission must be fully covered. Not just one.  
**Expected output shape:** Array of `{ patientId, name }`

---

### Q30 — Average length of stay per department

**Task:** Calculate average days between `admittedAt` and `dischargedAt` per department.  
**Constraints:** Parse dates, compute `dischargedAt - admittedAt` in days. Average per department. Round to 1 decimal.  
**Expected output shape:** `{ "Cardiology": 5.2, "Emergency": 1.3, ... }`

---

### Q31 — Doctors who treated patients from multiple hospitals

**Task:** Return `{ doctorId, name, hospitals }` for doctors who appear in admissions across MORE THAN ONE hospital.  
**Constraints:** Cross-reference `doctors` table. Collect unique hospital names per doctor. Filter those with `> 1`.  
**Expected output shape:** `[{ doctorId: "DR001", name: "...", hospitals: ["City General", "Apollo", "Sunrise"] }]`

---

### Q32 — Patients with both critical admission AND no insurance

**Task:** Return `{ patientId, name, city }` for patients who had at least one `severity: "critical"` admission AND `insuranceCovered === false`.  
**Constraints:** Both conditions must be true simultaneously for same patient.  
**Expected output shape:** Array of `{ patientId, name, city }`

---

### Q33 — Most used test per department

**Task:** For each department, find which test name was used most. Return `{ department, mostUsedTest, count }`.  
**Constraints:** Flatten tests per department across all admissions. Find mode per department.  
**Expected output shape:** Array of `{ department, mostUsedTest, count }`

---

### Q34 — Patients with high-severity admissions sorted by total bill

**Task:** Return all patients who had at least one `severity: "high"` or `"critical"` admission. Include total bill across ALL their admissions. Sort by total bill descending.  
**Constraints:** Sum ALL admissions (not just the severe ones). Return `{ patientId, name, totalBill }`.  
**Expected output shape:** Array sorted by totalBill desc.

---

### Q35 — Insurance provider performance

**Task:** For each insurance provider, calculate: `totalClaimed`, `totalPaid`, `coverageRate (paid/claimed * 100)`. Sort by coverageRate descending.  
**Constraints:** Sum `totalBill` as `totalClaimed`. Sum `insurancePaid` as `totalPaid`. Exclude null providers.  
**Expected output shape:**

```js
[
  { provider: "StarHealth", totalClaimed: 450000, totalPaid: 392000, coverageRate: "87.1%" },
  ...
]
```

---

## HARD — Q36 to Q50

_Multi-level aggregation, anomaly detection, scoring, trend analysis_

---

### Q36 — Patient risk score

**Task:** Assign a risk score to each patient based on:

- Age > 60 → +2 points
- Any `severity: "critical"` → +3 points
- Any `severity: "high"` → +2 points
- `insuranceCovered === false` → +1 point
- Readmitted (`readmitted: true`) → +2 points
- Any abnormal test result (contains "abnormal", "elevated", "positive", "high") → +1 point

Return top 5 patients by score as `{ patientId, name, score, reasons[] }`.  
**Constraints:** Reasons should be an array of strings describing why each point was added.  
**Expected output shape:** Top 5 by score descending.

---

### Q37 — Detect billing anomalies

**Task:** Find admissions where `patientPaid + insurancePaid !== totalBill`.  
Return `{ patientId, admissionId, totalBill, insurancePaid, patientPaid, discrepancy }` for each anomaly.  
**Constraints:** `discrepancy = totalBill - (patientPaid + insurancePaid)`. Only include rows where discrepancy !== 0.  
**Expected output shape:** Array of anomaly objects.

---

### Q38 — Hospital efficiency score

**Task:** Score each hospital on 3 metrics:

- **AvgStay**: Shorter is better. Normalize: `100 - (avgDays / maxAvgDays * 100)`
- **PatientSatisfaction**: Avg rating across all reviews (0–5 scale) → multiply by 20 to get 0–100
- **InsuranceCoverageRate**: `totalInsurancePaid / totalBill * 100`

Final score = average of 3 metrics. Return `{ hospital, avgStay, satisfaction, coverageRate, finalScore }` sorted by finalScore desc. Round all to 1 decimal.  
**Expected output shape:** Array of 3 hospital objects.

---

### Q39 — Doctor workload vs rating correlation

**Task:** For each doctor with reviews: calculate `patientLoad` (total unique patients), `avgRating`, and classify:

- `avgRating >= 4.5` AND `patientLoad >= 3` → "High Performer"
- `avgRating >= 3.5` → "Good"
- `avgRating < 3.5` → "Needs Improvement"

Return `{ doctorId, name, patientLoad, avgRating, classification }`.  
**Constraints:** Only doctors who have at least one review AND treated at least one patient.  
**Expected output shape:** Array of classified doctor objects.

---

### Q40 — Most expensive treatment path per disease

**Task:** For each unique diagnosis, calculate:

- `totalCases`: number of admissions with this diagnosis
- `avgBill`: average totalBill (rounded)
- `maxBill`: highest single bill
- `minBill`: lowest single bill

Return sorted by `avgBill` descending. Top 5 only.  
**Expected output shape:**

```js
[
  { diagnosis: "Breast Cancer - Stage 1", totalCases: 1, avgBill: 210000, maxBill: 210000, minBill: 210000 },
  ...
]
```

---

### Q41 — Patient lifetime value (LTV)

**Task:** Calculate each patient's LTV = total of all `totalBill` values across all admissions. Also calculate `selfPaid` = sum of `patientPaid`.  
Return top 5 patients by LTV with `{ patientId, name, hospital, LTV, selfPaid, insuranceSaving }`.  
**Constraints:** `insuranceSaving = LTV - selfPaid`. Sort by LTV desc.  
**Expected output shape:** Top 5 objects.

---

### Q42 — Readmission within same department

**Task:** Find patients who were admitted to the SAME department more than once.  
Return `{ patientId, name, department, admissionCount, totalBillInDept }`.  
**Constraints:** Group by `(patientId, department)`. Include only those with count > 1.  
**Expected output shape:** Array of objects.

---

### Q43 — Uninsured patient financial burden analysis

**Task:** For patients with `insuranceCovered === false`:

- Calculate total `patientPaid` across all their admissions
- Classify: `< 20000` → "Manageable", `20000–70000` → "Significant", `> 70000` → "Critical Burden"
- Return `{ patientId, name, city, totalSelfPaid, burden }`

Sort by `totalSelfPaid` descending.  
**Expected output shape:** Classified array.

---

### Q44 — Quarter-wise admission and revenue trend

**Task:** Group all admissions by quarter (Q1: Jan–Mar, Q2: Apr–Jun, Q3: Jul–Sep, Q4: Oct–Dec).  
For each quarter return: `{ quarter, admissionCount, totalRevenue, avgBillPerAdmission }`.  
**Constraints:** Use `admittedAt` date. All 4 quarters should appear (0 if none). Round revenue values.  
**Expected output shape:**

```js
[
  { quarter: "Q1", admissionCount: 11, totalRevenue: 680500, avgBillPerAdmission: 61864 },
  ...
]
```

---

### Q45 — Polychronic patients (3+ different diagnoses)

**Task:** Find patients who have been admitted for 3 or more DIFFERENT diagnoses (across all their admissions).  
Return `{ patientId, name, diagnoses[], admissionCount }`.  
**Constraints:** Count unique diagnoses per patient. Filter `>= 3`.  
**Expected output shape:** Array of matching patients.

---

### Q46 — Test cost vs diagnosis complexity score

**Task:** For each admission, compute:

- `testCostRatio` = total test costs / totalBill \* 100 (what % of bill went to tests)
- `medicationCount` = number of medications

Return admissions where `testCostRatio > 20%` AND `medicationCount >= 3`.  
Include `{ patientId, admissionId, diagnosis, testCostRatio, medicationCount, totalBill }`.  
**Constraints:** Round testCostRatio to 1 decimal.  
**Expected output shape:** Array of complex admission objects.

---

### Q47 — Doctor specialization efficiency

**Task:** For each doctor, calculate:

- Average `totalBill` of patients they treated
- Average length of stay (days)
- Number of critical cases handled

Rank doctors by a composite score: `(criticalCasesHandled * 3) + (1 / avgLengthOfStay * 10)`.  
Return top 5 `{ doctorId, name, department, avgBill, avgStay, criticalCases, compositeScore }`.  
**Constraints:** Round compositeScore to 2 decimals.  
**Expected output shape:** Top 5 sorted by compositeScore desc.

---

### Q48 — Insurance provider fraud detection

**Task:** Flag insurance providers where `totalInsurancePaid > totalBill` for ANY single admission (overpayment anomaly).  
Also flag admissions where `insurancePaid === 0` but `insuranceCovered === true` (underpayment anomaly).  
Return separate arrays: `{ overpaid: [...], underpaid: [...] }`.  
Each item: `{ patientId, admissionId, provider, totalBill, insurancePaid, type }`.  
**Expected output shape:** Object with two arrays.

---

### Q49 — Full hospital dashboard

**Task:** For each hospital return a complete summary object:

```js
{
  hospital: "...",
  totalPatients: N,
  totalAdmissions: N,
  totalRevenue: N,
  avgBillPerAdmission: N,
  avgPatientAge: N,
  readmissionRate: "X%",
  topDepartment: "...",       // by admission count
  topDoctor: "...",           // by patient count
  avgPatientRating: N,        // avg of all reviews in this hospital
  uninsuredPatients: N,
  criticalCases: N,
}
```

**Constraints:** Cross-reference `doctors` for names. Round all numeric values appropriately.  
**Expected output:** Array of 3 hospital summary objects.

---

### Q50 — Patient journey reconstruction

**Task:** For each patient who has more than 1 admission, reconstruct their "journey":

- Sort admissions chronologically
- Calculate gap between admissions (days between discharge and next admission)
- Flag if gap < 30 days (potential readmission risk)
- Include total spent, departments visited, doctors seen

Return `{ patientId, name, admissions: [{ admissionId, diagnosis, admittedAt, dischargedAt, department, gapToNextAdmission }], totalSpent, departmentsVisited, doctorsSeen, readmissionRisk }`.  
**Constraints:** Sort by `admittedAt`. `gapToNextAdmission` is `null` for the last admission.  
**Expected output shape:** Array of journey objects for multi-admission patients.
