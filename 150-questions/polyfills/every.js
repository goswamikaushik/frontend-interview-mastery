function testMyEvery() {
  Array.prototype.myEvery = function (callback, thisArg) {
    if (typeof callback !== "function") {
      throw new TypeError(`${callback} is not a function`);
    }

    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }

    return true;
  };

  return {
    TEST_1: {
      title: "All Numbers Greater Than 0",
      expected: true,
      actual: [1, 2, 3, 4, 5].myEvery((n) => n > 0),
    },

    TEST_2: {
      title: "Not All Numbers Greater Than 2",
      expected: false,
      actual: [1, 2, 3, 4, 5].myEvery((n) => n > 2),
    },

    TEST_3: {
      title: "All Numbers Are Even",
      expected: true,
      actual: [2, 4, 6, 8].myEvery((n) => n % 2 === 0),
    },

    TEST_4: {
      title: "Not All Numbers Are Even",
      expected: false,
      actual: [2, 4, 5, 8].myEvery((n) => n % 2 === 0),
    },

    TEST_5: {
      title: "Empty Array",
      expected: true,
      actual: [].myEvery((n) => n > 100),
    },

    TEST_6: {
      title: "Single Element Pass",
      expected: true,
      actual: [50].myEvery((n) => n === 50),
    },

    TEST_7: {
      title: "Single Element Fail",
      expected: false,
      actual: [50].myEvery((n) => n === 100),
    },

    TEST_8: {
      title: "All Strings Non Empty",
      expected: true,
      actual: ["a", "b", "c"].myEvery((str) => str.length > 0),
    },

    TEST_9: {
      title: "One Empty String",
      expected: false,
      actual: ["a", "", "c"].myEvery((str) => str.length > 0),
    },

    TEST_10: {
      title: "All Booleans True",
      expected: true,
      actual: [true, true, true].myEvery(Boolean),
    },

    TEST_11: {
      title: "Contains False",
      expected: false,
      actual: [true, false, true].myEvery(Boolean),
    },

    TEST_12: {
      title: "All Objects Active",
      expected: true,
      actual: [{ active: true }, { active: true }, { active: true }].myEvery(
        (user) => user.active,
      ),
    },

    TEST_13: {
      title: "One Object Inactive",
      expected: false,
      actual: [{ active: true }, { active: false }, { active: true }].myEvery(
        (user) => user.active,
      ),
    },

    TEST_14: {
      title: "Using Index Parameter",
      expected: true,
      actual: [10, 20, 30].myEvery((value, index) => index >= 0),
    },

    TEST_15: {
      title: "Using Array Parameter",
      expected: true,
      actual: [1, 2, 3].myEvery((value, index, array) => array.length === 3),
    },

    TEST_16: {
      title: "Nested Arrays Length Check",
      expected: true,
      actual: [[1], [2], [3]].myEvery((arr) => arr.length === 1),
    },

    TEST_17: {
      title: "Nested Arrays Length Fail",
      expected: false,
      actual: [[1], [2, 3], [4]].myEvery((arr) => arr.length === 1),
    },

    TEST_18: {
      title: "All Positive Numbers",
      expected: true,
      actual: [1, 5, 10, 20].myEvery((n) => n > 0),
    },

    TEST_19: {
      title: "Contains Negative Number",
      expected: false,
      actual: [1, 5, -10, 20].myEvery((n) => n > 0),
    },

    TEST_20: {
      title: "Invalid Callback",
      expected: "TypeError",
      actual: (() => {
        try {
          return [1, 2, 3].myEvery("hello");
        } catch (err) {
          return err.name;
        }
      })(),
    },
  };
}

console.dir(testMyEvery(), {
  depth: null,
});
