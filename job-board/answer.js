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

  return {
    // "Q5 — All remote jobs": getJobsByMode("remote"),
    // "Q4 — Jobs by work mode": jobsCountByMode,
    // "Q3 — All unique job types": uniqueJobType,
    // "Q2 — Companies with no jobs posted": companyWithoutJobs,
    // "Q1 — Total number of job listings": totalJobs,
  };
}

console.dir(answer(d), { depth: null });
