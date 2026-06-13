function testMyMap() {
  Array.prototype.myMap = function (callback) {
    if (typeof callback !== "function") {
      throw new TypeError(`${callback} is not a function`);
    }

    const result = [];

    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }

    return result;
  };

  return {
    TEST_1: {
      title: "Double Numbers",
      expected: [2, 4, 6, 8, 10],
      actual: [1, 2, 3, 4, 5].myMap((n) => n * 2),
    },

    TEST_2: {
      title: "Square Numbers",
      expected: [1, 4, 9, 16, 25],
      actual: [1, 2, 3, 4, 5].myMap((n) => n * n),
    },

    TEST_3: {
      title: "Convert Numbers to Strings",
      expected: ["1", "2", "3"],
      actual: [1, 2, 3].myMap((n) => String(n)),
    },

    TEST_4: {
      title: "Access Index",
      expected: ["0:10", "1:20", "2:30"],
      actual: [10, 20, 30].myMap((value, index) => `${index}:${value}`),
    },

    TEST_5: {
      title: "Access Original Array",
      expected: [3, 3, 3],
      actual: [1, 2, 3].myMap((value, index, array) => array.length),
    },

    TEST_6: {
      title: "Empty Array",
      expected: [],
      actual: [].myMap((n) => n * 2),
    },

    TEST_7: {
      title: "Single Element",
      expected: [100],
      actual: [50].myMap((n) => n * 2),
    },

    TEST_8: {
      title: "Return Objects",
      expected: [{ value: 1 }, { value: 2 }, { value: 3 }],
      actual: [1, 2, 3].myMap((n) => ({
        value: n,
      })),
    },

    TEST_9: {
      title: "Array Of Objects",
      expected: ["Kaushik", "John", "Jane"],
      actual: [{ name: "Kaushik" }, { name: "John" }, { name: "Jane" }].myMap(
        (user) => user.name,
      ),
    },

    TEST_10: {
      title: "Boolean Result",
      expected: [false, true, true],
      actual: [1, 2, 3].myMap((n) => n > 1),
    },

    TEST_11: {
      title: "Callback Parameters",
      expected: [20, 40, 60],
      actual: [10, 20, 30].myMap((value) => value * 2),
    },

    TEST_12: {
      title: "Preserve Original Array",
      expected: {
        original: [1, 2, 3],
        mapped: [2, 4, 6],
      },
      actual: (() => {
        const original = [1, 2, 3];

        return {
          original,
          mapped: original.myMap((n) => n * 2),
        };
      })(),
    },

    TEST_13: {
      title: "Nested Arrays",
      expected: [2, 3, 1],
      actual: [[1, 2], [3, 4, 5], [6]].myMap((arr) => arr.length),
    },

    TEST_14: {
      title: "Return Undefined",
      expected: [undefined, undefined, undefined],
      actual: [1, 2, 3].myMap(() => undefined),
    },

    TEST_15: {
      title: "Return Null",
      expected: [null, null, null],
      actual: [1, 2, 3].myMap(() => null),
    },

    TEST_16: {
      title: "Return Array",
      expected: [[1], [2], [3]],
      actual: [1, 2, 3].myMap((n) => [n]),
    },

    TEST_17: {
      title: "Invalid Callback",
      expected: "TypeError",
      actual: (() => {
        try {
          return [1, 2, 3].myMap("hello");
        } catch (err) {
          return err.name;
        }
      })(),
    },

    TEST_18: {
      title: "Different Return Types",
      expected: [1, "2", true],
      actual: [1, 2, 3].myMap((n) => {
        if (n === 1) return 1;
        if (n === 2) return "2";
        return true;
      }),
    },

    TEST_19: {
      title: "Verify Length",
      expected: 5,
      actual: [1, 2, 3, 4, 5].myMap((n) => n * 2).length,
    },

    TEST_20: {
      title: "Math.floor",
      expected: [1, 2, 3],
      actual: [1.2, 2.5, 3.9].myMap(Math.floor),
    },
  };
}

console.dir(testMyMap(), {
  depth: null,
});
