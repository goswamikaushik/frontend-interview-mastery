const student = require("./data");

const data = structuredClone(student);

function answer(data) {
  // Q1 — Get All Student Names
  const studentNames = data.map((s) => s.name);

  // Q2 — Count Students Per Standard
  const countStudentPerStandard = data.reduce(
    (acc, curr) => ((acc[curr.standard] = (acc[curr.standard] ?? 0) + 1), acc),
    {},
  );

  // Q3 — Find All Failed Students (Any Subject)
  const failedStudents = data.filter((stu) =>
    stu.subjects.some((sub) => !sub.isPassed),
  );

  // Q4 — Get All Students With Pending Fees
  function getStudentByFeesStatus(status) {
    return data
      .filter((stu) => stu.feeStatus === status)
      .map(({ name, standard, feeStatus }) => ({ name, standard, feeStatus }));
  }

  // Q5 — Find All Scholarship Holders
  function getStudentsByScholarshipHolders(isHolder) {
    return data
      .filter((stu) => stu.scholarshipHolder === isHolder)
      .map((stu) => ({ name: stu.name, class: stu.class }));
  }

  // Q6 — Calculate Each Student's Total Marks and Percentage
  // A1
  const studentTotalMarksAndPercentageA1 = data.reduce((acc, curr) => {
    let totalMarks = 0;
    let totalObtainedMarks = 0;
    for (sub of curr.subjects) {
      totalMarks += sub.maxMarks;
      totalObtainedMarks += sub.marks;
    }
    const percentage = (totalObtainedMarks / totalMarks) * 100;
    acc.push({ name: curr.name, totalObtainedMarks, percentage });
    return acc;
  }, []);

  // A2
  const studentTotalMarksAndPercentageA2 = data.map((stu) => {
    const totalMarks = stu.subjects.reduce((acc, curr) => acc + curr.marks, 0);
    const percentage = parseFloat(((totalMarks / 500) * 100).toFixed(2));
    return { name: stu.name, totalMarks, percentage };
  });

  // Q7 — Find Students With 100% Attendance (present === total)
  const studentWithFullAttendance = data.filter(
    ({ attendance: { present, total } }) => present === total,
  );

  // Q8 — Get Students Sorted by Attendance Percentage (Descending)
  const studentsWithPercentageAttendance = data
    .map(({ name, attendance: { percentage } }) => ({ name, percentage }))
    .sort((a, b) => b.percentage - a.percentage);

  // Q9 — Count Students Per Category (Science / Commerce / Arts)
  const studentsPerCategory = data.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] ?? 0) + 1;
    return acc;
  }, {});

  // Q10 — Find Students With No Extracurricular Activities
  const findStudentsWithNoExtraCurricularActivities = data
    .filter((stu) => !stu.extracurricular.length)
    .map(({ name }) => name);

  // Q11 — Check if ALL Scholarship Holders Passed Every Subject
  const isAllScholarshipHolderIsPassedInAllSubject = data
    .filter((stu) => stu.scholarshipHolder)
    .every((stu) => stu.subjects.every((sub) => sub.isPassed));

  const listStudentsOfHighestBehavior = data.reduce(
    (acc, { id, name, behaviorScore }) => {
      if (behaviorScore === 10) {
        acc.push({ id, name, behaviorScore });
      }
      return acc;
    },
    [],
  );

  const uniqueSubjectAcrossSchools = [
    ...new Set(data.flatMap((stu) => stu.subjects.map((sub) => sub.name))),
  ];

  const studentWith75PercentAttendanceA1 = data.reduce(
    (acc, { name, attendance, standard }) => {
      if (attendance.percentage < 75) {
        acc.push({
          name,
          standard,
          attendancePercentage: attendance.percentage,
        });
      }
      return acc;
    },
    [],
  );

  const studentWith75PercentAttendanceA2 = data
    .filter((stu) => stu.attendance.percentage < 75)
    .map(({ name, attendance, standard }) => ({
      name,
      standard,
      attendancePercentage: attendance.percentage,
    }));

  const getStudentReport = (studentId) => {
    const stu = data.find((stu) => stu.id === studentId);

    const subjectWiseMarks = stu.subjects.map(
      ({ name, marks, grade, isPassed }) => ({
        name,
        marks,
        grade,
        passed: isPassed,
      }),
    );

    return { name: stu.name, class: stu.class, subjects: subjectWiseMarks };
  };
  return {
    // "Q15 — Get Subject-wise Marks for a Given Student": getStudentReport("STU001"),
    // "Q14(A2) — Find Students With Attendance Below 75%":studentWith75PercentAttendanceA2,
    // "Q14(A1) — Find Students With Attendance Below 75%":studentWith75PercentAttendanceA1,
    // "Q13 — Get All Unique Subjects Across the School":uniqueSubjectAcrossSchools,
    // "Q12 — Find the Student With the Highest Behavior Score":listStudentsOfHighestBehavior,
    // "Q11 — Check if ALL Scholarship Holders Passed Every Subject": isAllScholarshipHolderIsPassedInAllSubject,
    // "Q10 — Find Students With No Extracurricular Activities": findStudentsWithNoExtraCurricularActivities,
    // "Q9 — Count Students Per Category (Science / Commerce / Arts)": studentsPerCategory,
    // "Q8 — Get Students Sorted by Attendance Percentage (Descending)":studentsWithPercentageAttendance,
    // "Q7 — Find Students With 100% Attendance (present === total)":studentWithFullAttendance,
    // "Q6(A2) — Calculate Each Students Total Marks and Percentage":studentTotalMarksAndPercentageA2,
    // "Q6(A1) — Calculate Each Students Total Marks and Percentage":studentTotalMarksAndPercentageA1,
    // "Q5 — Find All Scholarship Holders": getStudentsByScholarshipHolders(true),
    // "Q4 — Get All Students With Pending Fees": getStudentByFeesStatus("pending"),
    // "Q3 — Find All Failed Students (Any Subject)": failedStudents,
    // "Q2 — Count Students Per Standard": countStudentPerStandard,
    // "Q1 — Get All Student Names": studentNames,
  };
}

console.dir(answer(data), { depth: null });
