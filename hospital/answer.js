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
  const patientsWithCriticalAdmissions = data.reduce(
    (acc, { patientId, name, admissions }) => {
      if (admissions.some(({ severity }) => severity === "critical")) {
        acc.push({ patientId, name });
      }
      return acc;
    },
    [],
  );

  // Q10 — Total number of tests conducted
  const countOfTestsConducted = data.flatMap(({ admissions = [] }) =>
    admissions.flatMap(({ tests = [] }) => tests),
  ).length;

  // Q11 — Patients who left reviews
  const patientsWithReviewsCount = data.reduce(
    (acc, { reviews }) => acc + ((reviews ?? []).length ? 1 : 0),
    0,
  );

  // Q12 — Most common insurance provider
  const providerFrequency = data.reduce((acc, { insuranceProvider }) => {
    if (!insuranceProvider) return acc;
    acc[insuranceProvider] = (acc[insuranceProvider] ?? 0) + 1;
    return acc;
  }, {});

  const mostCommonInsuranceProvider = Object.entries(providerFrequency).reduce(
    (max, [provider, count]) => (count > max.count ? { provider, count } : max),
    { provider: null, count: 0 },
  ).provider;

  return {
    "Q12 — Most common insurance provider": mostCommonInsuranceProvider,
    // Q13 — Patients above age 60
    // Q14 — All departments used across all admissions
    // Q15 — Patients who paid out-of-pocket (no insurance)};
    // "Q11 — Patients who left reviews": patientsWithReviewsCount,
    // "Q10 — Total number of tests conducted": countOfTestsConducted,
    // "Q9 — Patients with critical admissions": patientsWithCriticalAdmissions,
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
