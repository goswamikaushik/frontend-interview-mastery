function testMyFind() {
  Array.prototype.myFind = function (callback, thisArg) {
    if (typeof callback !== "function") {
      throw new TypeError(`${callback} is not a function`);
    }

    for (let i = 0; i < this.length; i++) {
      const found = callback(this[i], i, this);

      if (found) {
        return this[i];
      }
    }

    return undefined;
  };

  return {
    TEST_1: {
      title: "First Number Greater Than 2",
      expected: 3,
      actual: [1, 2, 3, 4, 5].myFind((n) => n > 2),
    },
    TEST_2: {
      title: "No Match",
      expected: undefined,
      actual: [1, 2, 3].myFind((n) => n > 10),
    },
    TEST_3: {
      title: "First Even Number",
      expected: 2,
      actual: [1, 2, 4, 6].myFind((n) => n % 2 === 0),
    },
    TEST_4: {
      title: "First Odd Number",
      expected: 1,
      actual: [1, 2, 4, 6].myFind((n) => n % 2 !== 0),
    },
    TEST_5: {
      title: "Empty Array",
      expected: undefined,
      actual: [].myFind((n) => n > 0),
    },
    TEST_6: {
      title: "Single Element Match",
      expected: 50,
      actual: [50].myFind((n) => n === 50),
    },
    TEST_7: {
      title: "Single Element No Match",
      expected: undefined,
      actual: [50].myFind((n) => n === 100),
    },
    TEST_8: {
      title: "Find String",
      expected: "banana",
      actual: ["apple", "banana", "mango"].myFind(
        (fruit) => fruit === "banana",
      ),
    },
    TEST_9: {
      title: "Find Boolean",
      expected: false,
      actual: [true, false, true].myFind((value) => value === false),
    },
    TEST_10: {
      title: "Find Null",
      expected: null,
      actual: [1, null, 3].myFind((value) => value === null),
    },
    TEST_11: {
      title: "Find Undefined",
      expected: undefined,
      actual: [1, undefined, 3].myFind((value) => value === undefined),
    },
    TEST_12: {
      title: "Find Object By ID",
      expected: {
        id: 2,
        name: "Kaushik",
      },
      actual: [
        { id: 1, name: "John" },
        { id: 2, name: "Kaushik" },
        { id: 3, name: "Jane" },
      ].myFind((user) => user.id === 2),
    },
    TEST_13: {
      title: "Find Object By Name",
      expected: {
        id: 3,
        name: "Jane",
      },
      actual: [
        { id: 1, name: "John" },
        { id: 2, name: "Kaushik" },
        { id: 3, name: "Jane" },
      ].myFind((user) => user.name === "Jane"),
    },
    TEST_14: {
      title: "Find First Active User",
      expected: {
        id: 2,
        active: true,
      },
      actual: [
        { id: 1, active: false },
        { id: 2, active: true },
        { id: 3, active: true },
      ].myFind((user) => user.active),
    },
    TEST_15: {
      title: "Using Index Parameter",
      expected: 30,
      actual: [10, 20, 30, 40].myFind((value, index) => index === 2),
    },
    TEST_16: {
      title: "Using Array Parameter",
      expected: 4,
      actual: [1, 2, 3, 4].myFind(
        (value, index, array) => value === array[array.length - 1],
      ),
    },
    TEST_17: {
      title: "Nested Array Length",
      expected: [1, 2, 3],
      actual: [[1], [1, 2], [1, 2, 3]].myFind((arr) => arr.length === 3),
    },
    TEST_18: {
      title: "First Truthy Value",
      expected: "hello",
      actual: [0, "", null, "hello", true].myFind((value) => Boolean(value)),
    },
    TEST_19: {
      title: "First Prime Number",
      expected: 5,
      actual: [4, 6, 8, 5, 10].myFind((n) => {
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
          return [1, 2, 3].myFind("hello");
        } catch (err) {
          return err.name;
        }
      })(),
    },
  };
}

console.dir(testMyFind(), {
  depth: null,
});
