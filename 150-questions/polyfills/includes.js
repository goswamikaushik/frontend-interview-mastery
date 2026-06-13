function testMyIncludes() {
  Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
    let startIndex = fromIndex;

    if (startIndex < 0) {
      startIndex = Math.max(startIndex + this.length, 0);
    }

    for (let i = startIndex; i < this.length; i++) {
      const curr = this[i];

      if (
        searchElement === curr ||
        (Number.isNaN(searchElement) && Number.isNaN(curr))
      ) {
        return true;
      }
    }
    return false;
  };

  return {
    TEST_1: {
      title: "Existing number",
      expected: true,
      actual: [1, 2, 3, 4, 5].myIncludes(3),
    },
    TEST_2: {
      title: "Missing number",
      expected: false,
      actual: [1, 2, 3, 4, 5].myIncludes(10),
    },
    TEST_3: {
      title: "Existing string",
      expected: true,
      actual: ["a", "b", "c"].myIncludes("b"),
    },
    TEST_4: {
      title: "Missing string",
      expected: false,
      actual: ["a", "b", "c"].myIncludes("z"),
    },
    TEST_5: {
      title: "Boolean value",
      expected: true,
      actual: [true, false].myIncludes(false),
    },
    TEST_6: {
      title: "Null value",
      expected: true,
      actual: [null, 1, 2].myIncludes(null),
    },
    TEST_7: {
      title: "Undefined value",
      expected: true,
      actual: [1, undefined, 3].myIncludes(undefined),
    },
    TEST_8: {
      title: "NaN support",
      expected: true,
      actual: [1, 2, NaN].myIncludes(NaN),
    },
    TEST_9: {
      title: "NaN not found",
      expected: false,
      actual: [1, 2, 3].myIncludes(NaN),
    },
    TEST_10: {
      title: "Empty array",
      expected: false,
      actual: [].myIncludes(1),
    },
    TEST_11: {
      title: "Single element found",
      expected: true,
      actual: [50].myIncludes(50),
    },
    TEST_12: {
      title: "Single element missing",
      expected: false,
      actual: [50].myIncludes(100),
    },
    TEST_13: {
      title: "Positive fromIndex",
      expected: true,
      actual: [1, 2, 3, 4, 5].myIncludes(4, 2),
    },
    TEST_14: {
      title: "Positive fromIndex not found",
      expected: false,
      actual: [1, 2, 3, 4, 5].myIncludes(2, 3),
    },
    TEST_15: {
      title: "Negative fromIndex",
      expected: true,
      actual: [1, 2, 3, 4, 5].myIncludes(4, -2),
    },
    TEST_16: {
      title: "Very negative fromIndex",
      expected: true,
      actual: [1, 2, 3, 4, 5].myIncludes(1, -100),
    },
    TEST_17: {
      title: "Object same reference",
      expected: true,
      actual: (() => {
        const obj = { name: "Kaushik" };
        return [obj].myIncludes(obj);
      })(),
    },
    TEST_18: {
      title: "Object different reference",
      expected: false,
      actual: [{ name: "Kaushik" }].myIncludes({
        name: "Kaushik",
      }),
    },
    TEST_19: {
      title: "Array same reference",
      expected: true,
      actual: (() => {
        const arr = [1, 2];
        return [arr].myIncludes(arr);
      })(),
    },
    TEST_20: {
      title: "Array different reference",
      expected: false,
      actual: [[1, 2]].myIncludes([1, 2]),
    },
  };
}

console.dir(testMyIncludes(), { depth: null });
