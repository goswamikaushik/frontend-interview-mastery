function testMySome() {
  Array.prototype.mySome = function (callback, thisArg) {
    if (typeof callback !== "function") {
      throw new TypeError(`${callback} is not a function`);
    }

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this, thisArg)) {
        return true;
      }
    }

    return false;
  };

  return {
    TEST_1: {
      title: "At Least One Number Greater Than 3",
      expected: true,
      actual: [1, 2, 3, 4, 5].mySome((n) => n > 3),
    },

    TEST_2: {
      title: "No Number Greater Than 10",
      expected: false,
      actual: [1, 2, 3, 4, 5].mySome((n) => n > 10),
    },

    TEST_3: {
      title: "At Least One Even Number",
      expected: true,
      actual: [1, 3, 5, 8].mySome((n) => n % 2 === 0),
    },

    TEST_4: {
      title: "No Even Numbers",
      expected: false,
      actual: [1, 3, 5, 7].mySome((n) => n % 2 === 0),
    },

    TEST_5: {
      title: "Empty Array",
      expected: false,
      actual: [].mySome((n) => n > 0),
    },

    TEST_6: {
      title: "Single Element Match",
      expected: true,
      actual: [50].mySome((n) => n === 50),
    },

    TEST_7: {
      title: "Single Element No Match",
      expected: false,
      actual: [50].mySome((n) => n === 100),
    },

    TEST_8: {
      title: "Contains String Banana",
      expected: true,
      actual: ["apple", "banana", "mango"].mySome(
        (fruit) => fruit === "banana",
      ),
    },

    TEST_9: {
      title: "String Not Found",
      expected: false,
      actual: ["apple", "banana", "mango"].mySome(
        (fruit) => fruit === "orange",
      ),
    },

    TEST_10: {
      title: "Contains False",
      expected: true,
      actual: [true, false, true].mySome((value) => value === false),
    },

    TEST_11: {
      title: "Contains Null",
      expected: true,
      actual: [1, null, 3].mySome((value) => value === null),
    },

    TEST_12: {
      title: "Contains Undefined",
      expected: true,
      actual: [1, undefined, 3].mySome((value) => value === undefined),
    },

    TEST_13: {
      title: "Find Active User",
      expected: true,
      actual: [{ active: false }, { active: false }, { active: true }].mySome(
        (user) => user.active,
      ),
    },

    TEST_14: {
      title: "No Active User",
      expected: false,
      actual: [{ active: false }, { active: false }].mySome(
        (user) => user.active,
      ),
    },

    TEST_15: {
      title: "Using Index Parameter",
      expected: true,
      actual: [10, 20, 30].mySome((value, index) => index === 2),
    },

    TEST_16: {
      title: "Using Array Parameter",
      expected: true,
      actual: [1, 2, 3].mySome(
        (value, index, array) => value === array[array.length - 1],
      ),
    },

    TEST_17: {
      title: "Nested Array Length Match",
      expected: true,
      actual: [[1], [2], [3, 4]].mySome((arr) => arr.length === 2),
    },

    TEST_18: {
      title: "Nested Array Length No Match",
      expected: false,
      actual: [[1], [2], [3]].mySome((arr) => arr.length === 2),
    },

    TEST_19: {
      title: "Contains Negative Number",
      expected: true,
      actual: [1, 5, -10, 20].mySome((n) => n < 0),
    },

    TEST_20: {
      title: "Invalid Callback",
      expected: "TypeError",
      actual: (() => {
        try {
          return [1, 2, 3].mySome("hello");
        } catch (err) {
          return err.name;
        }
      })(),
    },
  };
}

console.dir(testMySome(), {
  depth: null,
});
