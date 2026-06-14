// N-01 · Check Prime Number
// Difficulty: Easy | Asked: Every year

// Problem: Write a function that returns true if a number is prime, false otherwise. A prime number is divisible only by 1 and itself.

// Input: 7 Output: true

// Input: 10 Output: false

// Edge cases: 0, 1 → not prime. 2 → prime (only even prime).

function checkPrimeNumber(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function test() {
  return {
    TEST_1: {
      title: "Prime Number 2",
      expected: true,
      actual: checkPrimeNumber(2),
    },

    TEST_2: {
      title: "Prime Number 3",
      expected: true,
      actual: checkPrimeNumber(3),
    },

    TEST_3: {
      title: "Prime Number 5",
      expected: true,
      actual: checkPrimeNumber(5),
    },

    TEST_4: {
      title: "Prime Number 7",
      expected: true,
      actual: checkPrimeNumber(7),
    },

    TEST_5: {
      title: "Prime Number 11",
      expected: true,
      actual: checkPrimeNumber(11),
    },

    TEST_6: {
      title: "Non Prime 4",
      expected: false,
      actual: checkPrimeNumber(4),
    },

    TEST_7: {
      title: "Non Prime 6",
      expected: false,
      actual: checkPrimeNumber(6),
    },

    TEST_8: {
      title: "Non Prime 8",
      expected: false,
      actual: checkPrimeNumber(8),
    },

    TEST_9: {
      title: "Non Prime 9",
      expected: false,
      actual: checkPrimeNumber(9),
    },

    TEST_10: {
      title: "Non Prime 10",
      expected: false,
      actual: checkPrimeNumber(10),
    },

    TEST_11: {
      title: "Number 1",
      expected: false,
      actual: checkPrimeNumber(1),
    },

    TEST_12: {
      title: "Number 0",
      expected: false,
      actual: checkPrimeNumber(0),
    },

    TEST_13: {
      title: "Negative Number",
      expected: false,
      actual: checkPrimeNumber(-7),
    },

    TEST_14: {
      title: "Large Prime",
      expected: true,
      actual: checkPrimeNumber(97),
    },

    TEST_15: {
      title: "Large Non Prime",
      expected: false,
      actual: checkPrimeNumber(100),
    },

    TEST_16: {
      title: "Prime Number 13",
      expected: true,
      actual: checkPrimeNumber(13),
    },

    TEST_17: {
      title: "Prime Number 17",
      expected: true,
      actual: checkPrimeNumber(17),
    },

    TEST_18: {
      title: "Prime Number 19",
      expected: true,
      actual: checkPrimeNumber(19),
    },

    TEST_19: {
      title: "Square Number 49",
      expected: false,
      actual: checkPrimeNumber(49),
    },

    TEST_20: {
      title: "Square Number 121",
      expected: false,
      actual: checkPrimeNumber(121),
    },
  };
}
console.dir(test(), { depth: null });
