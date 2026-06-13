Array.prototype.myReduce = function (callback, initialValue) {
  const arrLength = this.length;

  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }

  if (arrLength === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  if (arrLength === 1) {
    return this[0];
  }

  let accumulator = initialValue;
  let startIndex = 0;

  if (initialValue === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arrLength; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

function testMyReduce() {
  return {
    TEST_1: {
      title: "Sum with initial value",
      expected: 15,
      actual: [1, 2, 3, 4, 5].myReduce((acc, curr) => acc + curr, 0),
    },

    TEST_2: {
      title: "Sum without initial value",
      expected: 15,
      actual: [1, 2, 3, 4, 5].myReduce((acc, curr) => acc + curr),
    },

    TEST_3: {
      title: "Multiplication",
      expected: 120,
      actual: [1, 2, 3, 4, 5].myReduce((acc, curr) => acc * curr, 1),
    },

    TEST_4: {
      title: "Find Maximum",
      expected: 100,
      actual: [1, 100, 50, 20].myReduce((acc, curr) => Math.max(acc, curr)),
    },

    TEST_5: {
      title: "Find Minimum",
      expected: 1,
      actual: [5, 4, 3, 2, 1].myReduce((acc, curr) => Math.min(acc, curr)),
    },

    TEST_6: {
      title: "Single Element + No Initial Value",
      expected: 50,
      actual: [50].myReduce((acc, curr) => acc + curr),
    },

    TEST_7: {
      title: "Single Element + Initial Value",
      expected: 60,
      actual: [50].myReduce((acc, curr) => acc + curr, 10),
    },

    TEST_8: {
      title: "Empty Array + Initial Value",
      expected: 10,
      actual: [].myReduce((acc, curr) => acc + curr, 10),
    },

    TEST_9: {
      title: "Empty Array + No Initial Value",
      expected: "TypeError",
      actual: (() => {
        try {
          return [].myReduce((acc, curr) => acc + curr);
        } catch (err) {
          return err.name;
        }
      })(),
    },

    TEST_10: {
      title: "Convert Array To Object",
      expected: {
        a: 1,
        b: 2,
        c: 3,
      },
      actual: ["a", "b", "c"].myReduce((acc, curr, index) => {
        acc[curr] = index + 1;
        return acc;
      }, {}),
    },

    TEST_11: {
      title: "Count Occurrences",
      expected: {
        apple: 3,
        banana: 2,
      },
      actual: ["apple", "banana", "apple", "apple", "banana"].myReduce(
        (acc, curr) => {
          acc[curr] = (acc[curr] || 0) + 1;
          return acc;
        },
        {},
      ),
    },

    TEST_12: {
      title: "Flatten Array",
      expected: [1, 2, 3, 4, 5],
      actual: [[1, 2], [3, 4], [5]].myReduce(
        (acc, curr) => acc.concat(curr),
        [],
      ),
    },

    TEST_13: {
      title: "Callback Parameters",
      expected: 60,
      actual: [10, 20, 30].myReduce((acc, curr) => acc + curr, 0),
    },

    TEST_14: {
      title: "String Concatenation",
      expected: "Hello World",
      actual: ["Hello", " ", "World"].myReduce((acc, curr) => acc + curr, ""),
    },

    TEST_15: {
      title: "Boolean Reduction",
      expected: false,
      actual: [true, true, false, true].myReduce(
        (acc, curr) => acc && curr,
        true,
      ),
    },
  };
}

console.dir(testMyReduce(), {
  depth: null,
});
