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

  // Q4 — Patients grouped by blood group
  const patientsGroupedByBloodGroup = data.reduce((acc, { bloodGroup }) => {
    acc[bloodGroup] = (acc[bloodGroup] ?? 0) + 1;
    return acc;
  }, {});

  // Q5 — Patients from each hospital
  const patientFormEachHospital = data.reduce((acc, { hospital }) => {
    acc[hospital] = (acc[hospital] ?? 0) + 1;
    return acc;
  }, {});

  // Q6 — List all unique diagnoses
  const listAllUniqueDiagnoses = [
    ...new Set(data.flatMap((p) => p.admissions.map((a) => a.diagnosis))),
  ];

  // Q7 — Patients who have insurance
  const patientsWhoHaveInsurance = data.filter(
    (p) => p.insuranceCovered,
  ).length;

  // Q8 — Average age of all patients
  const totalAge = data.reduce((sum, { age }) => sum + age, 0);
  const averageAgeOfAllPatients = Number((totalAge / data.length).toFixed(1));

  // Q9 — Patients with critical admissions
  const patientWithCriticalAdmissions = data;

  return {
    "Q9 — Patients with critical admissions": patientWithCriticalAdmissions,
    // Q10 — Total number of tests conducted
    // Q11 — Patients who left reviews
    // Q12 — Most common insurance provider
    // Q13 — Patients above age 60
    // Q14 — All departments used across all admissions
    // Q15 — Patients who paid out-of-pocket (no insurance)};
    // "Q8 — Average age of all patients": averageAgeOfAllPatients,
    // "Q7 — Patients who have insurance": patientsWhoHaveInsurance,
    // "Q6 — List all unique diagnoses": listAllUniqueDiagnoses,
    // "Q5 — Patients from each hospital": patientFormEachHospital,
    // "Q4 — Patients grouped by blood group": patientsGroupedByBloodGroup,
    // "Q3 — All unique hospitals": allUniqueHospital,
    // "Q2 — Patients with no admissions": patientWithNoAdmissions,
    // "Q1 — Total number of patients": totalPatients,
  };
}
console.dir(answer(d), { depth: null });
