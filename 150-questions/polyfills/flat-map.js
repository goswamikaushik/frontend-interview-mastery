function testMyFlatMap() {
  Array.prototype.myFlatMap = function (callback, thisArg) {
    const result = [];
    if (typeof callback !== "function") {
      throw new TypeError(`${callback} is not a function`);
    }

    for (let i = 0; i < this.length; i++) {
      const mappedValue = callback(this[i], i, this);

      if (Array.isArray(mappedValue)) {
        result.push(...mappedValue);
      } else {
        result.push(mappedValue);
      }
    }

    return result;
  };

  return {
    TEST_1: {
      title: "Double Numbers",
      expected: [2, 4, 6],
      actual: [1, 2, 3].myFlatMap((n) => [n * 2]),
    },

    TEST_2: {
      title: "Duplicate Numbers",
      expected: [1, 1, 2, 2, 3, 3],
      actual: [1, 2, 3].myFlatMap((n) => [n, n]),
    },

    TEST_3: {
      title: "Return Primitive Values",
      expected: [1, 2, 3],
      actual: [1, 2, 3].myFlatMap((n) => n),
    },

    TEST_4: {
      title: "Flatten One Level",
      expected: [1, 2, 3, 4],
      actual: [1, 2, [3, 4]].myFlatMap((n) => n),
    },

    TEST_5: {
      title: "Remove Even Numbers",
      expected: [1, 3, 5],
      actual: [1, 2, 3, 4, 5].myFlatMap((n) => (n % 2 === 0 ? [] : [n])),
    },

    TEST_6: {
      title: "Split Odd Numbers",
      expected: [4, 1, 4, 20, 16, 1, 18],
      actual: [5, 4, -3, 20, 17, -33, -4, 18].myFlatMap((n) => {
        if (n < 0) return [];

        return n % 2 === 0 ? [n] : [n - 1, 1];
      }),
    },

    TEST_7: {
      title: "Array Of Strings",
      expected: ["it's", "Sunny", "in", "", "California"],
      actual: ["it's Sunny in", "", "California"].myFlatMap((str) =>
        str.split(" "),
      ),
    },

    TEST_8: {
      title: "Nested Arrays Flattened Once",
      expected: [[1], [2], [3]],
      actual: [1, 2, 3].myFlatMap((n) => [[n]]),
    },

    TEST_9: {
      title: "Return Empty Arrays",
      expected: [],
      actual: [1, 2, 3].myFlatMap(() => []),
    },

    TEST_10: {
      title: "Single Element",
      expected: [100],
      actual: [50].myFlatMap((n) => [n * 2]),
    },

    TEST_11: {
      title: "Empty Array",
      expected: [],
      actual: [].myFlatMap((n) => [n]),
    },

    TEST_12: {
      title: "Array Of Objects",
      expected: [{ id: 1 }, { id: 2 }],
      actual: [{ id: 1 }, { id: 2 }].myFlatMap((obj) => [obj]),
    },

    TEST_13: {
      title: "Access Index",
      expected: ["0:a", "1:b", "2:c"],
      actual: ["a", "b", "c"].myFlatMap((value, index) => [
        `${index}:${value}`,
      ]),
    },

    TEST_14: {
      title: "Access Array",
      expected: [3, 3, 3],
      actual: [1, 2, 3].myFlatMap((value, index, arr) => [arr.length]),
    },

    TEST_15: {
      title: "Mixed Types",
      expected: [1, "2", true],
      actual: [1, 2, 3].myFlatMap((n) => {
        if (n === 1) return [1];
        if (n === 2) return ["2"];
        return [true];
      }),
    },

    TEST_16: {
      title: "Boolean Results",
      expected: [false, true, true],
      actual: [1, 2, 3].myFlatMap((n) => [n > 1]),
    },

    TEST_17: {
      title: "Nested Empty Arrays",
      expected: [],
      actual: [[], [], []].myFlatMap((arr) => arr),
    },

    TEST_18: {
      title: "One Level Flatten Only",
      expected: [[[1]], [[2]], [[3]]],
      actual: [1, 2, 3].myFlatMap((n) => [[[n]]]),
    },

    TEST_19: {
      title: "Preserve Original Array",
      expected: [1, 2, 3],
      actual: (() => {
        const arr = [1, 2, 3];
        arr.myFlatMap((n) => [n * 2]);
        return arr;
      })(),
    },

    TEST_20: {
      title: "Invalid Callback",
      expected: "TypeError",
      actual: (() => {
        try {
          return [1, 2, 3].myFlatMap("hello");
        } catch (err) {
          return err.name;
        }
      })(),
    },

    TEST_21: {
      title: "Callback Returns Mixed Values",
      expected: [1, 20, 30, 3],
      actual: [1, 2, 3].myFlatMap((n) => {
        if (n === 2) return [20, 30];
        return n;
      }),
    },
  };
}

console.dir(testMyFlatMap(), { depth: null });
