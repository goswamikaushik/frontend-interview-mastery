# Job Board Dataset — 50 Interview Questions

> Dataset: `jobboard-dataset.js` · Import: `companies`  
> Difficulty: Easy (Q1–Q15) · Medium (Q16–Q35) · Hard (Q36–Q50)

---

## EASY — Q1 to Q15

_Basic filter, map, count, flat access_

---

### Q1 — Total number of job listings

**Task:** Count all job objects across all companies.  
**Constraints:** Flatten all `jobs` arrays, count.  
**Expected output:** `18`

---

### Q2 — Companies with no jobs posted

**Task:** Return `{ companyId, name }` for companies that have zero job listings.  
**Constraints:** Filter on `jobs.length === 0`.  
**Expected output:**

```js
[{ companyId: "C009", name: "NewGen Robotics" }];
```

---

### Q3 — All unique job types

**Task:** Return sorted array of unique `type` values across all jobs.  
**Constraints:** Deduplicate, sort alphabetically.  
**Expected output:** `["contract", "full-time", "internship", "part-time"]`

---

### Q4 — Jobs by work mode

**Task:** Return `{ remote: N, onsite: N, hybrid: N }` count of jobs per work mode.  
**Constraints:** Count all jobs per mode.  
**Expected output shape:** `{ remote: 6, onsite: 6, hybrid: 6 }`

---

### Q5 — All remote jobs

**Task:** Return `{ jobId, title, companyName, minSalary, maxSalary }` for all `mode: "remote"` jobs.  
**Constraints:** Include company name from parent company object.  
**Expected output shape:** Array of remote jobs.

---

### Q6 — Total applicants across all jobs

**Task:** Count every applicant across every job across every company.  
**Constraints:** Flatten all applicants arrays, count.  
**Expected output:** `30`

---

### Q7 — Companies by industry

**Task:** Return `{ industry: count }` of companies per industry.  
**Constraints:** Count companies (not jobs) per industry.  
**Expected output shape:** `{ "Technology": 4, "Finance": 1, ... }`

---

### Q8 — All unique skills required

**Task:** Return sorted list of all unique skills across all job listings.  
**Constraints:** Flatten all `skills` arrays, deduplicate, sort.  
**Expected output shape:** `["AWS", "Agile", "Adobe XD", ...]`

---

### Q9 — Jobs with salary above 2,000,000

**Task:** Return `{ jobId, title, company, maxSalary }` for jobs where `maxSalary > 2000000`.  
**Constraints:** Include company name. Sort by maxSalary descending.  
**Expected output shape:** Array of high-paying jobs.

---

### Q10 — Applicants hired across all jobs

**Task:** Return count of applicants whose `stage === "hired"`.  
**Constraints:** Flatten all applicants, filter.  
**Expected output:** `8`

---

### Q11 — Freshers who applied

**Task:** Return `{ applicantId, name, jobTitle, company }` for all applicants where `fresher === true`.  
**Constraints:** Include job and company context.  
**Expected output shape:** Array of fresher applicant objects.

---

### Q12 — Jobs posted by verified companies only

**Task:** Return all jobs from verified companies (`verified === true`). Include `{ jobId, title, companyName, city }`.  
**Constraints:** Only verified companies. Flatten their jobs.  
**Expected output shape:** Array of jobs from verified companies.

---

### Q13 — Average company rating

**Task:** Return the average rating across all companies, rounded to 2 decimals.  
**Constraints:** Simple average.  
**Expected output:** `3.93`

---

### Q14 — Applicants from Bangalore

**Task:** Return `{ applicantId, name, currentRole, jobTitle }` for applicants whose `city === "Bangalore"`.  
**Constraints:** Include job title context.  
**Expected output shape:** Array of Bangalore applicants.

---

### Q15 — Open vs closed jobs

**Task:** Return `{ open: N, closed: N }` count of jobs by status.  
**Constraints:** Count by `status` field.  
**Expected output:** `{ open: 15, closed: 3 }`

---

## MEDIUM — Q16 to Q35

_Aggregation, grouping, cross-referencing, multi-condition logic_

---

### Q16 — Most applied-to job

**Task:** Return the job with the most applicants. Include `{ jobId, title, company, applicantCount }`.  
**Constraints:** Count `applicants.length` per job, find max.  
**Expected output shape:** `{ jobId: "J001", title: "Senior Frontend Developer", company: "TechNova Solutions", applicantCount: 3 }`

---

### Q17 — Conversion rate per job

**Task:** For each job, calculate `hireRate = hiredCount / totalApplicants * 100`.  
Return `{ jobId, title, company, totalApplicants, hired, hireRate }`. Sort by hireRate descending. Include only jobs with at least 1 applicant.  
**Constraints:** Round hireRate to 1 decimal. `"100.0%"` format.  
**Expected output shape:** Array sorted by hireRate desc.

---

### Q18 — Average expected salary by city

**Task:** Calculate average `expectedSalary` of applicants grouped by `city`. Sort by avg salary descending.  
**Constraints:** Round to nearest integer. Only cities with at least 1 applicant.  
**Expected output shape:** `{ "Mumbai": 2650000, "Bangalore": 2100000, ... }`

---

### Q19 — Skills most in demand

**Task:** Count how many jobs list each skill. Return top 10 skills by demand.  
**Constraints:** Flatten all job `skills` arrays, count frequency, return top 10 as `{ skill, jobCount }`.  
**Expected output shape:** `[{ skill: "Python", jobCount: 6 }, ...]`

---

### Q20 — Companies with highest avg salary offered

**Task:** For each company, calculate average of `(minSalary + maxSalary) / 2` across all their jobs.  
Return `{ companyId, name, industry, avgOfferedSalary }` sorted descending. Exclude companies with no jobs.  
**Constraints:** Round to nearest integer.  
**Expected output shape:** Array sorted by avgOfferedSalary desc.

---

### Q21 — Applicants with salary expectation above job max

**Task:** Find applicants whose `expectedSalary > job.maxSalary`. Return `{ applicantId, name, expectedSalary, jobMaxSalary, jobTitle, company }`.  
**Constraints:** Compare per applicant against the job they applied to.  
**Expected output shape:** Array of overpriced applicants.

---

### Q22 — Source channel effectiveness

**Task:** Group applicants by `source`. For each source, return: `totalApplicants`, `hired`, `hireRate`.  
**Constraints:** `hireRate = hired / total * 100`. Round to 1 decimal.  
**Expected output shape:**

```js
[
  { source: "LinkedIn", total: 12, hired: 3, hireRate: "25.0%" },
  ...
]
```

---

### Q23 — Notice period analysis

**Task:** Find all applicants who are in `stage: "offer"` or `stage: "hired"`. Return their average notice period.  
Also return: `{ applicantId, name, jobTitle, company, noticePeriod }` for all offer/hired applicants.  
**Constraints:** Average in days, rounded to 0 decimals.  
**Expected output:** `{ avgNoticePeriod: 28, applicants: [...] }`

---

### Q24 — Gender diversity per industry

**Task:** For each industry, count Male vs Female applicants. Return `{ industry, male, female, total, femalePercent }`.  
**Constraints:** Count applicants (not jobs/companies). Round femalePercent to 1 decimal.  
**Expected output shape:** Array per industry.

---

### Q25 — Jobs with zero applicants

**Task:** Return `{ jobId, title, company, postedAt, deadline }` for jobs where `applicants.length === 0`.  
**Constraints:** Direct filter.  
**Expected output shape:** Array of empty jobs.

---

### Q26 — City-wise job distribution

**Task:** Return count of job listings per city (company city, not applicant city).  
**Constraints:** Use `company.city` for grouping. Count jobs not companies.  
**Expected output shape:** `{ "Bangalore": 7, "Mumbai": 5, ... }`

---

### Q27 — Applicants who applied to multiple jobs

**Task:** Find applicants (by `applicantId`) who appear across multiple different jobs.  
Return `{ applicantId, name, jobsApplied: [{ jobId, title, company, stage }] }`.  
**Constraints:** An applicant appearing in 2+ jobs counts. Cross-reference across all companies/jobs.  
**Expected output shape:** Array of multi-job applicants.

---

### Q28 — Average experience required vs average experience of applicants

**Task:** For each job, compare:

- `requiredAvg = (experience.min + experience.max) / 2`
- `applicantAvg = average experience of all applicants`
- `gap = applicantAvg - requiredAvg` (positive = overqualified, negative = underqualified)

Return `{ jobId, title, requiredAvg, applicantAvg, gap }` for jobs with at least 1 applicant. Sort by gap descending.  
**Constraints:** Round to 1 decimal.  
**Expected output shape:** Array with gap analysis.

---

### Q29 — Rejection analysis by stage

**Task:** Count how many applicants got rejected at each stage before rejection (`applied`, `screening`, `interview`, `offer`).  
**Constraints:** All `stage: "rejected"` applicants. Group by their "last stage before rejection" — since we only know their final stage is rejected, use the `stage` field as-is. Group and count.  
**Note:** The `stage` for rejected applicants in this dataset is literally `"rejected"`. So this question is: what stage breakdown does the rejected pool show? → count all `stage === "rejected"` as one group, then contrast with `hired`. Return funnel: `{ applied, screening, interview, offer, hired, rejected }` total counts.  
**Expected output shape:** `{ applied: 1, screening: 3, interview: 7, offer: 6, hired: 8, rejected: 5 }`

---

### Q30 — Companies with best hire ratio

**Task:** For each company, calculate `hiredApplicants / totalApplicants * 100`. Return `{ companyId, name, totalApplicants, hired, hireRatio }`. Sort descending. Exclude companies with no applicants.  
**Constraints:** Round to 1 decimal.  
**Expected output shape:** Array sorted by hireRatio desc.

---

### Q31 — Salary range overlap analysis

**Task:** For each pair of jobs in the SAME industry, find if their salary ranges overlap.  
Two ranges overlap if `job1.minSalary <= job2.maxSalary AND job2.minSalary <= job1.maxSalary`.  
Return count of overlapping pairs per industry.  
**Constraints:** Don't double count (A-B same as B-A). Only same-industry pairs.  
**Expected output shape:** `{ "Technology": 8, "Finance": 1, ... }`

---

### Q32 — Applicant skill gap analysis

**Task:** For each applicant in `stage: "interview"` or `stage: "offer"`, check which required job skills they are MISSING.  
Return `{ applicantId, name, jobTitle, missingSkills[], matchRate }`.  
**Constraints:** `matchRate = matched skills / total required skills * 100`. Round to 0 decimals.  
**Expected output shape:** Array with skill gaps.

---

### Q33 — Top cities for tech jobs

**Task:** Count the number of Technology industry jobs (by company city) and return cities ranked by job count.  
**Constraints:** Only `industry === "Technology"` companies. Group by city. Sort by count desc.  
**Expected output shape:** `[{ city: "Bangalore", jobCount: 7 }, ...]`

---

### Q34 — Internship and part-time applicant pool

**Task:** Return all applicants who applied to `type: "internship"` or `type: "part-time"` jobs.  
Include `{ applicantId, name, jobType, jobTitle, company, stage, expectedSalary }`.  
**Constraints:** Include job type context.  
**Expected output shape:** Array of non-full-time applicants.

---

### Q35 — Experience bracket distribution

**Task:** Bucket all applicants by experience:

- `"0 years"`: experience === 0
- `"1–3 years"`: 1–3
- `"4–6 years"`: 4–6
- `"7+ years"`: 7 and above

Return `{ bracket, count, avgExpectedSalary }` for each bracket.  
**Constraints:** Average expected salary rounded to nearest integer.  
**Expected output shape:** Array of 4 bracket objects.

---

## HARD — Q36 to Q50

_Multi-level aggregation, scoring, trend analysis, anomaly detection_

---

### Q36 — Applicant quality score

**Task:** Score every applicant on:

- Skills match with job: `matchedSkills / requiredSkills * 40` (max 40 pts)
- Experience fit: if within `[job.experience.min, job.experience.max]` → 30 pts, else 0
- Salary fit: if `expectedSalary <= job.maxSalary` → 20 pts, else 0
- Source bonus: "Referral" → +10 pts, "LinkedIn" → +5 pts, others → 0

Return all applicants with `{ applicantId, name, jobTitle, company, score, stage }`. Sort by score desc. Top 10.  
**Constraints:** Cap total at 100. Round to 0 decimals.  
**Expected output shape:** Top 10 scored applicants.

---

### Q37 — Hiring pipeline bottleneck

**Task:** For each job, calculate what % of applicants are stuck at each stage (applied/screening/interview). A stuck applicant is one who is NOT in `hired`, `rejected`, or `offer`.  
Return `{ jobId, title, company, stuck, total, stuckPercent, bottleneckStage }`.  
`bottleneckStage` = stage where most applicants are stuck.  
**Constraints:** Round to 1 decimal.  
**Expected output shape:** Array of pipeline objects.

---

### Q38 — Company talent magnet score

**Task:** Score each company on:

- `avgApplicantsPerJob`: more is better
- `hireRate`: more is better
- `companyRating`: directly used
- Verified bonus: +0.5 to score if verified

Composite = `(avgApplicantsPerJob / maxAvgApps * 40) + (hireRate / 100 * 30) + (companyRating / 5 * 20) + verifiedBonus * 10`.  
Return `{ companyId, name, compositeScore, details }` sorted desc. Exclude companies with no jobs.  
**Constraints:** Round compositeScore to 2 decimals.  
**Expected output shape:** Array of scored companies.

---

### Q39 — Skill co-occurrence matrix

**Task:** Find the top 5 pairs of skills that appear together most frequently in the SAME job listing.  
Return `[{ skill1, skill2, coOccurrenceCount }]` sorted by count desc.  
**Constraints:** Don't double count (A,B same as B,A). Only pairs from same job.  
**Expected output shape:** Top 5 pairs.

---

### Q40 — Salary inflation by experience

**Task:** For every bracket of experience (0, 1–3, 4–6, 7+), calculate:

- Average salary OFFERED by jobs targeting that experience range: `(minSalary + maxSalary) / 2`
- Average salary EXPECTED by applicants in that bracket

Return `{ bracket, avgOffered, avgExpected, delta }` where `delta = avgExpected - avgOffered`.  
**Constraints:** For job bracket matching: use `experience.min` and `experience.max` to classify. Round all to nearest integer.  
**Expected output shape:** 4 bracket objects with delta analysis.

---

### Q41 — Full company profile

**Task:** For each company return:

```js
{
  companyId, name, industry, city, rating, verified,
  totalJobs, openJobs, closedJobs,
  totalApplicants, totalHired, overallHireRate,
  avgSalaryOffered,
  topSkillsRequired: [],    // top 3 skills by frequency in their jobs
  fresherFriendly: true/false,  // has at least 1 job with experience.min === 0
  remoteJobs: N,
}
```

**Constraints:** `overallHireRate` rounded to 1 decimal. `avgSalaryOffered` rounded to integer.  
**Expected output shape:** Array of 10 company profile objects.

---

### Q42 — Applicant journey funnel

**Task:** Build a funnel showing how applicants move through stages across ALL jobs combined:

- Total applicants
- % that reached screening or beyond
- % that reached interview or beyond
- % that reached offer or beyond
- % hired
- % rejected

Return `{ totalApplicants, reachedScreening: { count, percent }, reachedInterview: ..., reachedOffer: ..., hired: ..., rejected: ... }`.  
**Constraints:** Percents as strings with 1 decimal. Treat stage ordering as: applied → screening → interview → offer → hired (rejected can happen at any stage).  
**Expected output shape:** Funnel object.

---

### Q43 — Remote vs onsite salary premium

**Task:** Compare salary offerings for remote vs onsite vs hybrid jobs.  
For each mode, return: `{ mode, jobCount, avgMinSalary, avgMaxSalary, avgMidpoint }`.  
Also add `remotePremium = remote avgMidpoint - onsite avgMidpoint` at the end.  
**Constraints:** Round all to nearest integer.  
**Expected output shape:** Array of 3 mode objects + remotePremium field.

---

### Q44 — Industry hiring health report

**Task:** For each industry, return a health report:

```js
{
  industry,
  companies: N,
  totalJobs: N,
  openJobs: N,
  totalApplicants: N,
  hireRate: "X%",
  avgSalaryRange: { min: N, max: N },
  topCity: "...",               // city with most jobs in this industry
  mostDemandedSkill: "...",     // top skill across jobs in this industry
}
```

**Constraints:** Round salary to integers. hireRate to 1 decimal.  
**Expected output shape:** Array per industry.

---

### Q45 — Ghost jobs detection

**Task:** A "ghost job" is posted but:

- Has ZERO applicants, OR
- Deadline has passed (assume today = `2024-12-01`) AND job is still `status: "open"` AND no one was hired

Return `{ jobId, title, company, reason, daysOpen }` where `daysOpen = today - postedAt`.  
**Constraints:** `reason` = `"no_applicants"` or `"expired_no_hire"` or both.  
**Expected output shape:** Array of ghost job objects.

---

### Q46 — Applicant competitiveness index

**Task:** For each open job, rank all its applicants by competitiveness:

- Skill match score: matched skills / required skills \* 100
- Experience score: (applicant exp / required max exp) \* 100, capped at 100
- Salary score: if expectedSalary <= maxSalary → 100, else `maxSalary / expectedSalary * 100`

Final index = (skillScore _ 0.4 + expScore _ 0.3 + salaryScore \* 0.3).  
Return `{ jobId, title, rankedApplicants: [{ applicantId, name, index, rank }] }`.  
**Constraints:** Round index to 1 decimal. Rank starts at 1 (highest index = rank 1).  
**Expected output shape:** Array of job objects with ranked applicants.

---

### Q47 — Time-to-fill projection

**Task:** For jobs that are `status: "closed"` and have at least one `stage: "hired"` applicant:

- Calculate `daysToFill = deadline - postedAt`
- Calculate `hiredApplicantApplyDay = hiredApplicant.appliedAt - postedAt`

For open jobs, project `expectedDaysToFill` based on average daysToFill from closed jobs in the same industry.  
Return `{ closed: [{ jobId, title, daysToFill, hiredApplicantApplyDay }], openProjections: [{ jobId, title, projectedDaysToFill }] }`.  
**Constraints:** All in integer days. If no closed jobs in industry for projection, use global average.  
**Expected output shape:** Object with two arrays.

---

### Q48 — Skill trend by company size

**Task:** Group companies by size (small/medium/large/enterprise). For each size, find the top 3 in-demand skills.  
Return `{ size, companyCount, totalJobs, topSkills: [{ skill, count }] }`.  
**Constraints:** Flatten skills across jobs in that size group.  
**Expected output shape:** Array of 4 size-group objects.

---

### Q49 — Recruiter report card

**Task:** Generate a per-company hiring summary:

```js
{
  company,
  openRoles: N,
  totalApplications: N,
  activeInPipeline: N,   // not hired, not rejected
  pendingOffers: N,      // stage === "offer"
  successfulHires: N,
  avgTimeToHire: N,      // days from appliedAt to job deadline for hired applicants
  rejectionRate: "X%",
  topSourceChannel: "...",  // source that produced most hires
}
```

**Constraints:** Round avgTimeToHire to 0 decimals. rejectionRate to 1 decimal.  
**Expected output shape:** Array of 10 company report cards.

---

### Q50 — Full job board analytics dashboard

**Task:** Generate one global summary object:

```js
{
  totalCompanies: N,
  verifiedCompanies: N,
  totalJobs: N,
  openJobs: N,
  totalApplicants: N,
  overallHireRate: "X%",
  avgSalaryOffered: N,
  avgApplicantsPerJob: N,
  topIndustry: "...",           // by job count
  topCity: "...",               // by job count
  topSkill: "...",              // most demanded across all jobs
  mostActiveCompany: "...",     // most applicants across all jobs
  highestPayingJob: { title, company, maxSalary },
  lowestPayingJob: { title, company, minSalary },
  remoteJobPercent: "X%",
  fresherJobsAvailable: N,
  avgExperienceRequired: N,     // (min+max)/2 averaged across all jobs
}
```

**Constraints:** Round all numeric values appropriately.  
**Expected output shape:** Single dashboard object.
