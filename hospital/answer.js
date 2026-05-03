const hospitalData = require("./data");

const d = structuredClone(hospitalData);

function answer(data) {
  // Q1 — Total number of patients
  const totalPatients = data.length;

  // Q2 — Patients with no admissions
  const patientWithNoAdmissions = data.reduce((acc, curr) => {
    if (!curr.admissions.length) {
      acc.push({ name: curr.name, patientId: curr.patientId });
    }
    return acc;
  }, []);

  // Q3 — All unique hospitals
  const allUniqueHospital = [...new Set(data.map((p) => p.hospital))].sort();

  // Task: Return a sorted array of unique hospital names.
  // Constraints: No duplicates, alphabetical order.
  // Expected output:

  // ["Apollo Medical Centre", "City General Hospital", "Sunrise Health Institute"];

  return {
    // Q4 — Patients grouped by blood group
    // Q5 — Patients from each hospital
    // Q6 — List all unique diagnoses
    // Q7 — Patients who have insurance
    // Q8 — Average age of all patients
    // Q9 — Patients with critical admissions
    // Q10 — Total number of tests conducted
    // Q11 — Patients who left reviews
    // Q12 — Most common insurance provider
    // Q13 — Patients above age 60
    // Q14 — All departments used across all admissions
    // Q15 — Patients who paid out-of-pocket (no insurance)};
    // "Q3 — All unique hospitals": allUniqueHospital,
    // "Q2 — Patients with no admissions": patientWithNoAdmissions,
    // "Q1 — Total number of patients": totalPatients,
  };
}
console.dir(answer(d), { depth: null });
