function testMyFindIndex() {
  Array.prototype.myFindIndex = function (callback, thisArg) {
    if (typeof callback !== "function") {
      throw new TypeError(`${callback} is not a function`);
    }

    for (let i = 0; i < this.length; i++) {
      const found = callback(this[i], i, this);

      if (found) {
        return i;
      }
    }

    return -1;
  };

  return {
    TEST_1: {
      title: "First Number Greater Than 2",
      expected: 2,
      actual: [1, 2, 3, 4, 5].myFindIndex((n) => n > 2),
    },

    TEST_2: {
      title: "No Match",
      expected: -1,
      actual: [1, 2, 3].myFindIndex((n) => n > 10),
    },

    TEST_3: {
      title: "First Even Number",
      expected: 1,
      actual: [1, 2, 4, 6].myFindIndex((n) => n % 2 === 0),
    },

    TEST_4: {
      title: "First Odd Number",
      expected: 0,
      actual: [1, 2, 4, 6].myFindIndex((n) => n % 2 !== 0),
    },

    TEST_5: {
      title: "Empty Array",
      expected: -1,
      actual: [].myFindIndex((n) => n > 0),
    },

    TEST_6: {
      title: "Single Element Match",
      expected: 0,
      actual: [50].myFindIndex((n) => n === 50),
    },

    TEST_7: {
      title: "Single Element No Match",
      expected: -1,
      actual: [50].myFindIndex((n) => n === 100),
    },

    TEST_8: {
      title: "Find String",
      expected: 1,
      actual: ["apple", "banana", "mango"].myFindIndex(
        (fruit) => fruit === "banana",
      ),
    },

    TEST_9: {
      title: "Find Boolean",
      expected: 1,
      actual: [true, false, true].myFindIndex((value) => value === false),
    },

    TEST_10: {
      title: "Find Null",
      expected: 1,
      actual: [1, null, 3].myFindIndex((value) => value === null),
    },

    TEST_11: {
      title: "Find Undefined",
      expected: 1,
      actual: [1, undefined, 3].myFindIndex((value) => value === undefined),
    },

    TEST_12: {
      title: "Find Object By ID",
      expected: 1,
      actual: [
        { id: 1, name: "John" },
        { id: 2, name: "Kaushik" },
        { id: 3, name: "Jane" },
      ].myFindIndex((user) => user.id === 2),
    },

    TEST_13: {
      title: "Find Object By Name",
      expected: 2,
      actual: [
        { id: 1, name: "John" },
        { id: 2, name: "Kaushik" },
        { id: 3, name: "Jane" },
      ].myFindIndex((user) => user.name === "Jane"),
    },

    TEST_14: {
      title: "First Active User",
      expected: 1,
      actual: [
        { id: 1, active: false },
        { id: 2, active: true },
        { id: 3, active: true },
      ].myFindIndex((user) => user.active),
    },

    TEST_15: {
      title: "Using Index Parameter",
      expected: 2,
      actual: [10, 20, 30, 40].myFindIndex((value, index) => index === 2),
    },

    TEST_16: {
      title: "Using Array Parameter",
      expected: 3,
      actual: [1, 2, 3, 4].myFindIndex(
        (value, index, array) => value === array[array.length - 1],
      ),
    },

    TEST_17: {
      title: "Nested Array Length",
      expected: 2,
      actual: [[1], [1, 2], [1, 2, 3]].myFindIndex((arr) => arr.length === 3),
    },

    TEST_18: {
      title: "First Truthy Value",
      expected: 3,
      actual: [0, "", null, "hello", true].myFindIndex((value) =>
        Boolean(value),
      ),
    },

    TEST_19: {
      title: "First Prime Number",
      expected: 3,
      actual: [4, 6, 8, 5, 10].myFindIndex((n) => {
        if (n < 2) return false;

        for (let i = 2; i < n; i++) {
          if (n % i === 0) return false;
        }

        return true;
      }),
    },

    TEST_20: {
      title: "Invalid Callback",
      expected: "TypeError",
      actual: (() => {
        try {
          return [1, 2, 3].myFindIndex("hello");
        } catch (err) {
          return err.name;
        }
      })(),
    },
  };
}

console.dir(testMyFindIndex(), {
  depth: null,
});
