const jobBoardData = require("./data");

const d = structuredClone(jobBoardData);

function answer(data) {
  // Q1 — Total number of job listings
  const totalJobs = data.length;

  // Q2 — Companies with no jobs posted
  const companyWithoutJobs = data
    .filter((c) => c.jobs.length === 0)
    .map(({ companyId, name }) => ({ companyId, name }));

  // Q3 — All unique job types
  const uniqueJobType = [
    ...new Set(data.flatMap((c) => c.jobs.map(({ type }) => type))),
  ].sort();

  // Q4 — Jobs by work mode
  const jobsCountByMode = data
    .flatMap((c) => c.jobs)
    .reduce((acc, curr) => {
      acc[curr.mode] = (acc[curr.mode] ?? 0) + 1;
      return acc;
    }, {});

  // Q5 — All remote jobs
  const getJobsByMode = (jobMode) =>
    data.flatMap(({ name, jobs }) =>
      jobs
        .filter(({ mode }) => mode === jobMode)
        .map(({ jobId, title, minSalary, maxSalary }) => ({
          jobId,
          title,
          companyName: name,
          minSalary,
          maxSalary,
        })),
    );

  // Q6 — Total applicants across all jobs
  const totalApplications = data.flatMap(({ jobs }) =>
    jobs.flatMap(({ applicants }) => applicants),
  ).length;

  // Q7 — Companies by industry
  const companiesByIndustry = data.reduce((acc, { industry }) => {
    acc[industry] = (acc[industry] ?? 0) + 1;
    return acc;
  }, {});

  // Q8 — All unique skills required
  const uniqueSkills = [
    ...new Set(
      data
        .flatMap(({ jobs }) => jobs)
        .reduce((acc, { skills }) => [...skills, ...acc], []),
    ),
  ];

  // Q9 — Jobs with salary above 2,000,000
  const jobsWithSalaryAbove = data
    .flatMap(({ name, jobs }) =>
      jobs.map(({ jobId, title, maxSalary }) => ({
        jobId,
        title,
        company: name,
        maxSalary,
      })),
    )
    .filter(({ maxSalary }) => maxSalary > 2000000)
    .sort((a, b) => b.maxSalary - a.maxSalary);

  // Q10 — Applicants hired across all jobs
  const applicantsHiredCount = data
    .flatMap(({ jobs }) => jobs.flatMap(({ applicants }) => applicants))
    .filter(({ stage }) => stage === "hired").length;

  // Q11 — Freshers who applied
  const fresherApplicants = data.flatMap(({ name, jobs }) =>
    jobs.flatMap(({ title, applicants }) =>
      applicants
        .filter(({ fresher }) => fresher)
        .map(({ applicantId, name: applicantName }) => ({
          applicantId,
          name: applicantName,
          jobTitle: title,
          company: name,
        })),
    ),
  );

  // Q12 — Jobs posted by verified companies only
  const jobsPostedByVerifiedCompany = data
    .filter((c) => c.verified)
    .flatMap(({ name, city, jobs }) =>
      jobs.map(({ jobId, title }) => ({
        jobId,
        title,
        companyName: name,
        city,
      })),
    );

  // Q13 — Average company rating
  const averageCompanyRating = +(
    data.reduce((sum, { rating }) => sum + rating, 0) / data.length
  ).toFixed(2);

  // Q14 — Applicants from Bangalore
  const applicantsFromBangalore = data
    .filter(({ city }) => city === "Bangalore")
    .flatMap(({ jobs }) =>
      jobs.flatMap(({ applicants, title }) =>
        applicants.map(({ applicantId, name, currentRole, jobTitle }) => ({
          applicantId,
          name,
          currentRole,
          jobTitle: title,
        })),
      ),
    );

  // Q15 — Open vs closed jobs
  const openVsClose = data
    .flatMap(({ jobs }) => jobs)
    .reduce((acc, { status }) => {
      acc[status] = (acc[status] ?? 0) + 1;
      return acc;
    }, {});

  return {
    "Q15 — Open vs closed jobs": openVsClose,
    // "Q14 — Applicants from Bangalore": applicantsFromBangalore,
    // "Q13 — Average company rating": averageCompanyRating,
    // "Q12 — Jobs posted by verified companies only": jobsPostedByVerifiedCompany,
    // "Q11 — Freshers who applied": fresherApplicants,
    // "Q10 — Applicants hired across all jobs": applicantsHiredCount,
    // "Q9 — Jobs with salary above 2,000,000": jobsWithSalaryAbove,
    // "Q8 — All unique skills required": uniqueSkills,
    // "Q7 — Companies by industry": companiesByIndustry,
    // "Q6 — Total applicants across all jobs": totalApplications,
    // "Q5 — All remote jobs": getJobsByMode("remote"),
    // "Q4 — Jobs by work mode": jobsCountByMode,
    // "Q3 — All unique job types": uniqueJobType,
    // "Q2 — Companies with no jobs posted": companyWithoutJobs,
    // "Q1 — Total number of job listings": totalJobs,
  };
}

console.dir(answer(d), { depth: null });
