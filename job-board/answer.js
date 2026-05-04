const jobBoardData = require("./data");

const d = structuredClone(jobBoardData);

function answer(data) {
  // Q1 — Total number of job listings
  const totalJobs = data.length;

  // Q2 — Companies with no jobs posted
  const companyWithoutJobs = data
    .filter((c) => !c.jobs || !c.jobs.length)
    .map(({ companyId, name }) => ({ companyId, name }));

  return {
    // "Q2 — Companies with no jobs posted": companyWithoutJobs,
    // "Q1 — Total number of job listings": totalJobs,
  };
}

console.dir(answer(d), { depth: null });
