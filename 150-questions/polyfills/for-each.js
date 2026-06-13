function testMyForEach() {
  Array.prototype.myForEach = function (callback) {
    if (typeof callback !== "function") {
      throw new TypeError(`${callback} is not a function`);
    }

    for (let i = 0; i < this.length; i++) {
      if (!(i in this)) continue;

      callback(this[i], i, this);
    }
  };

  console.log("");

  return {
    TEST_1: {
      title: "Iterate All Elements",
      expected: [1, 2, 3],
      actual: (() => {
        const result = [];

        [1, 2, 3].myForEach((n) => {
          result.push(n);
        });

        return result;
      })(),
    },

    TEST_2: {
      expected: ["0:10", "1:20", "2:30"],
      actual: (() => {
        const result = [];

        [10, 20, 30].myForEach((value, index) => {
          result.push(`${index}:${value}`);
        });

        return result;
      })(),
    },

    TEST_3: {
      title: "Access Original Array",
      expected: [3, 3, 3],
      actual: (() => {
        const result = [];

        [1, 2, 3].myForEach((value, index, array) => {
          result.push(array.length);
        });

        return result;
      })(),
    },

    TEST_4: {
      title: "Empty Array",
      expected: [],
      actual: (() => {
        const result = [];

        [].myForEach((n) => {
          result.push(n);
        });

        return result;
      })(),
    },

    TEST_5: {
      title: "Single Element",
      expected: [50],
      actual: (() => {
        const result = [];

        [50].myForEach((n) => {
          result.push(n);
        });

        return result;
      })(),
    },

    TEST_6: {
      title: "Sum Numbers",
      expected: 15,
      actual: (() => {
        let sum = 0;

        [1, 2, 3, 4, 5].myForEach((n) => {
          sum += n;
        });

        return sum;
      })(),
    },

    TEST_7: {
      title: "Modify External Variable",
      expected: "Hello World",
      actual: (() => {
        let str = "";

        ["Hello", " ", "World"].myForEach((char) => {
          str += char;
        });

        return str;
      })(),
    },

    TEST_8: {
      title: "Array Of Objects",
      expected: ["Kaushik", "John"],
      actual: (() => {
        const names = [];

        [{ name: "Kaushik" }, { name: "John" }].myForEach((user) => {
          names.push(user.name);
        });

        return names;
      })(),
    },

    TEST_9: {
      title: "Count Iterations",
      expected: 5,
      actual: (() => {
        let count = 0;

        [1, 2, 3, 4, 5].myForEach(() => {
          count++;
        });

        return count;
      })(),
    },

    TEST_10: {
      title: "Boolean Values",
      expected: [true, false, true],
      actual: (() => {
        const result = [];

        [true, false, true].myForEach((value) => {
          result.push(value);
        });

        return result;
      })(),
    },

    TEST_11: {
      title: "Null Values",
      expected: [null],
      actual: (() => {
        const result = [];

        [null].myForEach((value) => {
          result.push(value);
        });

        return result;
      })(),
    },

    TEST_12: {
      title: "Undefined Values",
      expected: [undefined],
      actual: (() => {
        const result = [];

        [undefined].myForEach((value) => {
          result.push(value);
        });

        return result;
      })(),
    },

    TEST_13: {
      title: "Nested Arrays",
      expected: [2, 3, 1],
      actual: (() => {
        const result = [];

        [[1, 2], [3, 4, 5], [6]].myForEach((arr) => {
          result.push(arr.length);
        });

        return result;
      })(),
    },

    TEST_14: {
      title: "Callback Return Value Ignored",
      expected: [1, 2, 3],
      actual: (() => {
        const result = [];

        [1, 2, 3].myForEach((n) => {
          result.push(n);
          return n * 100;
        });

        return result;
      })(),
    },

    TEST_15: {
      title: "Return Value Of forEach",
      expected: undefined,
      actual: [1, 2, 3].myForEach((n) => n * 2),
    },

    TEST_16: {
      title: "Invalid Callback",
      expected: "TypeError",
      actual: (() => {
        try {
          [1, 2, 3].myForEach("hello");
        } catch (err) {
          return err.name;
        }
      })(),
    },

    TEST_17: {
      title: "Sparse Array",
      expected: [1, 3],
      actual: (() => {
        const result = [];

        [1, , 3].myForEach((n) => {
          result.push(n);
        });

        return result;
      })(),
    },

    TEST_18: {
      title: "Falsy Values Are Processed",
      expected: [0, false, "", null],
      actual: (() => {
        const result = [];

        [0, false, "", null].myForEach((n) => {
          result.push(n);
        });

        return result;
      })(),
    },
  };
}

console.dir(testMyForEach(), {
  depth: null,
});
