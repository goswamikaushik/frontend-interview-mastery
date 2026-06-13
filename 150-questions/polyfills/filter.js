Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    const shouldInclude = callback(this[i], i, this);

    if (shouldInclude) {
      result.push(this[i]);
    }
  }

  return result;
};

function testMyFilter() {
  return {
    TEST_1: {
      title: "Numbers Greater Than 2",
      expected: [3, 4, 5],
      actual: [1, 2, 3, 4, 5].myFilter((n) => n > 2),
    },

    TEST_2: {
      title: "Even Numbers",
      expected: [2, 4],
      actual: [1, 2, 3, 4, 5].myFilter((n) => n % 2 === 0),
    },

    TEST_3: {
      title: "Odd Numbers",
      expected: [1, 3, 5],
      actual: [1, 2, 3, 4, 5].myFilter((n) => n % 2 !== 0),
    },

    TEST_4: {
      title: "No Match",
      expected: [],
      actual: [1, 2, 3, 4, 5].myFilter((n) => n > 100),
    },

    TEST_5: {
      title: "All Match",
      expected: [1, 2, 3, 4, 5],
      actual: [1, 2, 3, 4, 5].myFilter((n) => n > 0),
    },

    TEST_6: {
      title: "Empty Array",
      expected: [],
      actual: [].myFilter((n) => n > 0),
    },

    TEST_7: {
      title: "Single Element Match",
      expected: [50],
      actual: [50].myFilter((n) => n === 50),
    },

    TEST_8: {
      title: "Single Element No Match",
      expected: [],
      actual: [50].myFilter((n) => n === 100),
    },

    TEST_9: {
      title: "Filter Strings",
      expected: ["apple", "banana"],
      actual: ["apple", "banana", "kiwi"].myFilter((fruit) => fruit.length > 4),
    },

    TEST_10: {
      title: "Filter Objects",
      expected: [
        { name: "Kaushik", active: true },
        { name: "John", active: true },
      ],
      actual: [
        {
          name: "Kaushik",
          active: true,
        },
        {
          name: "Jane",
          active: false,
        },
        {
          name: "John",
          active: true,
        },
      ].myFilter((user) => user.active),
    },

    TEST_11: {
      title: "Access Index",
      expected: [10, 30],
      actual: [10, 20, 30].myFilter((_, index) => index % 2 === 0),
    },

    TEST_12: {
      title: "Access Original Array",
      expected: [1, 2],
      actual: [1, 2, 3].myFilter((value, index, array) => value < array.length),
    },

    TEST_13: {
      title: "Filter Boolean True",
      expected: [true, true],
      actual: [true, false, true].myFilter(Boolean),
    },

    TEST_14: {
      title: "Filter Truthy Values",
      expected: [1, "hello", true],
      actual: [0, 1, "", "hello", false, true].myFilter(Boolean),
    },

    TEST_15: {
      title: "Preserve Original Array",
      expected: {
        original: [1, 2, 3, 4, 5],
        filtered: [4, 5],
      },
      actual: (() => {
        const original = [1, 2, 3, 4, 5];

        return {
          original,
          filtered: original.myFilter((n) => n > 3),
        };
      })(),
    },

    TEST_16: {
      title: "Callback Returns Number",
      expected: [2, 3],
      actual: [1, 2, 3].myFilter((n) => n - 1),
    },

    TEST_17: {
      title: "Callback Returns String",
      expected: [1, 2, 3],
      actual: [1, 2, 3].myFilter(() => "truthy"),
    },

    TEST_18: {
      title: "Callback Returns Empty String",
      expected: [],
      actual: [1, 2, 3].myFilter(() => ""),
    },

    TEST_19: {
      title: "Invalid Callback",
      expected: "TypeError",
      actual: (() => {
        try {
          return [1, 2, 3].myFilter("hello");
        } catch (err) {
          return err.name;
        }
      })(),
    },

    TEST_20: {
      title: "Verify Length",
      expected: 2,
      actual: [1, 2, 3, 4, 5].myFilter((n) => n > 3).length,
    },
  };
}

console.dir(testMyFilter(), {
  depth: null,
});
