// N-02 · Check Leap Year
// Difficulty: Easy | Asked: 2023, 2024, 2025

// Problem: A year is a leap year if:

// Divisible by 4 AND
// NOT divisible by 100, UNLESS also divisible by 400
// Input: 2024 Output: true

// Input: 1900 Output: false

// Input: 2000 Output: true
function checkLeapYear(year) {
  if (year < 1) return false;

  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

function test() {
  return {
    TEST_1: {
      title: "Leap Year 2024",
      expected: true,
      actual: checkLeapYear(2024),
    },

    TEST_2: {
      title: "Leap Year 2028",
      expected: true,
      actual: checkLeapYear(2028),
    },

    TEST_3: {
      title: "Leap Year 1996",
      expected: true,
      actual: checkLeapYear(1996),
    },

    TEST_4: {
      title: "Century Year 1900",
      expected: false,
      actual: checkLeapYear(1900),
    },

    TEST_5: {
      title: "Century Year 2100",
      expected: false,
      actual: checkLeapYear(2100),
    },

    TEST_6: {
      title: "Century Year 2200",
      expected: false,
      actual: checkLeapYear(2200),
    },

    TEST_7: {
      title: "400 Rule Year 2000",
      expected: true,
      actual: checkLeapYear(2000),
    },

    TEST_8: {
      title: "400 Rule Year 2400",
      expected: true,
      actual: checkLeapYear(2400),
    },

    TEST_9: {
      title: "Non Leap Year 2023",
      expected: false,
      actual: checkLeapYear(2023),
    },

    TEST_10: {
      title: "Non Leap Year 2025",
      expected: false,
      actual: checkLeapYear(2025),
    },

    TEST_11: {
      title: "Year 1",
      expected: false,
      actual: checkLeapYear(1),
    },

    TEST_12: {
      title: "Year 0",
      expected: false,
      actual: checkLeapYear(0),
    },

    TEST_13: {
      title: "Negative Year -4",
      expected: false,
      actual: checkLeapYear(-4),
    },

    TEST_14: {
      title: "Negative Year -100",
      expected: false,
      actual: checkLeapYear(-100),
    },

    TEST_15: {
      title: "Negative Year -400",
      expected: false,
      actual: checkLeapYear(-400),
    },
  };
}

console.dir(test(), { depth: null });
