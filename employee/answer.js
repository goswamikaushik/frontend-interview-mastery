const employee = require("./data");

const data = structuredClone(employee);

function answer(data) {
  // Q1 — Get All Employee Names
  const employeeNames = data.map((e) => e.name);

  // Q2 — Count Employees Per Department
  // A1
  const employeeCountPerDep = data.reduce((acc, curr) => {
    const dep = curr.department;
    if (!dep) return acc;
    acc[dep] = (acc[dep] ?? 0) + 1;
    return acc;
  }, {});

  //A2
  const countBy = (key) => {
    return data.reduce((acc, item) => {
      const val = item[key];
      if (!val) return acc;
      acc[val] = (acc[val] ?? 0) + 1;
      return acc;
    }, {});
  };

  // Q3 — Find All Remote Employees
  const allRemoteEmp = data.filter((emp) => emp.location?.remote);

  // Q4 — Get All Unique Skills Across All Employees
  const uniqueSkills = [...new Set(data.flatMap((emp) => emp.skills ?? []))];

  // Q5 — Get Employees on Leave or Inactive
  const getEmployeeByStatus = (statusArr) => {
    return data
      .filter((emp) => statusArr.includes(emp.status))
      .map(({ id, name, status }) => ({
        id,
        name,
        status,
      }));
  };

  // Q6 — Total Salary Bill (Base + Bonus)
  const totalSalaryBill = data.reduce(
    (sum, { salary }) => sum + salary.base + (salary.bonus ?? 0),
    0,
  );

  // Q7 — Find the Youngest and Oldest Employee
  const findTheYoungAndOldEmp = data.reduce((acc, { id, name, age }) => {
    if (!acc.youngest || age < acc.youngest.age)
      acc.youngest = { id, name, age };
    if (!acc.oldest || age > acc.oldest.age) acc.oldest = { id, name, age };

    return acc;
  }, {});

  // Q8(A1) — List Employees With No Certifications
  const ListEmpNoCertificateA1 = data
    .filter(
      (emp) =>
        !Array.isArray(emp.certifications) || emp.certifications.length === 0,
    )
    .map((emp) => emp.name);

  // Q8(A2) — List Employees With No Certifications
  const ListEmpNoCertificateA2 = data.reduce((acc, curr) => {
    if (!curr.certifications?.length) {
      acc.push(curr.name);
    }

    return acc;
  }, []);

  // Q9 — Get All Employees in a Given Region ( we can also use map + filter combination)
  const getEmpByRegion = (region) =>
    data.reduce((acc, curr) => {
      if (curr.region.toLowerCase() === region.toLowerCase()) {
        acc.push({
          name: curr.name,
          title: curr.title,
          city: curr.location.city,
        });
      }

      return acc;
    }, []);

  // Q10 — Sort Employees by Base Salary (Descending)
  const sortedEmpByBaseSalary = [...data]
    .sort((a, b) => b.salary.base - a.salary.base)
    .map((emp) => ({
      name: emp.name,
      base: emp.salary.base,
      department: emp.department,
    }));

  // Q11 — Check if Any Engineer Knows GraphQL
  const isAnyEngineerKnows = (skill) =>
    data.some(
      (emp) => emp.department === "Engineering" && emp.skills?.includes(skill),
    );

  // Q12 — Check if ALL Directors Are Active
  const isAllDirectorAreActive = data.every(
    (emp) => emp.role !== "Director" || emp.status === "active",
  );

  // Q13 — Get Average Performance Rating by Department
  const getAveragePerformanceRatingByDep = () => {
    const depWithRatingAndCount = data.reduce((acc, curr) => {
      const dept = curr.department;
      const rating = curr.performance?.rating ?? 0;

      if (acc[dept]) {
        acc[dept].ratingSum += rating;
        acc[dept].count += 1;
      } else {
        acc[dept] = { ratingSum: rating, count: 1 };
      }
      return acc;
    }, {});

    return Object.fromEntries(
      Object.entries(depWithRatingAndCount).map(
        ([dep, { ratingSum, count }]) => [dep, +(ratingSum / count).toFixed(2)],
      ),
    );
  };

  // Q14 — Find All Projects Across the Company (No Duplicates)
  const allUniqueProject = Array.from(
    data
      .flatMap((emp) => emp.projects)
      .reduce((acc, { id, name, status }) => {
        if (!acc.has(id)) {
          acc.set(id, { id, status, name });
        }
        return acc;
      }, new Map())
      .values(),
  );

  return {
    // "Q14 — Find All Projects Across the Company (No Duplicates)": allUniqueProject,
    // "Q13 — Get Average Performance Rating by Department": getAveragePerformanceRatingByDep(),
    // "Q12 — Check if ALL Directors Are Active": isAllDirectorAreActive,
    // "Q11 — Check if Any Engineer Knows GraphQL": isAnyEngineerKnows("GraphQL"),
    // "Q10 — Sort Employees by Base Salary (Descending)": sortedEmpByBaseSalary,
    // "Q9 — Get All Employees in a Given Region": getEmpByRegion("West"),
    // "Q8(A2) — List Employees With No Certifications": ListEmpNoCertificateA2,
    // "Q8(A1) — List Employees With No Certifications": ListEmpNoCertificateA1,
    // "Q7 — Find the Youngest and Oldest Employee": findTheYoungAndOldEmp,
    // "Q6 — Total Salary Bill (Base + Bonus)": totalSalaryBill,
    // "Q5 — Get Employees on Leave or Inactive": getEmployeeByStatus([
    //   "on_leave",
    //   "inactive",
    // ]),
    // "Q4 — Get All Unique Skills Across All Employees": uniqueSkills,
    // "Q3 — Find All Remote Employees": allRemoteEmp,
    // "Q2(A2) — Count Employees Per Department": countBy("department"),
    // "Q2(A1) — Count Employees Per Department": employeeCountPerDep,
    // "Q1 — Get All Employee Names": employeeNames,
  };
}

console.dir(answer(data), { depth: null });
