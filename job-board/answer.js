const jobBoardData = require("./data");

const d = structuredClone(jobBoardData);

function answer(data) {
  // Q1 — Total number of job listings
  const totalJobs = data.length;
  return {
    "Q1 — Total number of job listings": totalJobs,
  };
}

console.dir(answer(d), { depth: null });
