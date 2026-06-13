function testMyFlat() {
  Array.prototype.myFlat = function (depth = 1) {
    const flatten = (arr, currDepth) => {
      const result = [];

      for (const item of arr) {
        if (Array.isArray(item) && currDepth > 0) {
          result.push(
            ...flatten(item, currDepth === Infinity ? Infinity : currDepth - 1),
          );
        } else {
          result.push(item);
        }
      }

      return result;
    };
    return flatten(this, depth);
  };

  return {
    TEST_1: {
      title: "Flat One Level",
      expected: [1, 2, 3, 4],
      actual: [1, 2, [3, 4]].myFlat(),
    },

    TEST_2: {
      title: "Default Depth Is 1",
      expected: [1, 2, 3, [4, 5]],
      actual: [1, 2, [3, [4, 5]]].myFlat(),
    },

    TEST_3: {
      title: "Depth 2",
      expected: [1, 2, 3, 4, 5],
      actual: [1, 2, [3, [4, 5]]].myFlat(2),
    },

    TEST_4: {
      title: "Depth 3",
      expected: [1, 2, 3, 4, [5, 6]],
      actual: [1, [2, [3, [4, [5, 6]]]]].myFlat(3),
    },

    TEST_5: {
      title: "Infinity Depth",
      expected: [1, 2, 3, 4, 5, 6],
      actual: [1, [2, [3, [4, [5, 6]]]]].myFlat(Infinity),
    },

    TEST_6: {
      title: "Empty Array",
      expected: [],
      actual: [].myFlat(),
    },

    TEST_7: {
      title: "Single Element",
      expected: [1],
      actual: [1].myFlat(),
    },

    TEST_8: {
      title: "No Nested Arrays",
      expected: [1, 2, 3],
      actual: [1, 2, 3].myFlat(),
    },

    TEST_9: {
      title: "Array Of Strings",
      expected: ["a", "b", "c", "d"],
      actual: ["a", ["b", "c"], "d"].myFlat(),
    },

    TEST_10: {
      title: "Array Of Booleans",
      expected: [true, false, true],
      actual: [[true], false, true].myFlat(),
    },

    TEST_11: {
      title: "Array Of Objects",
      expected: [{ id: 1 }, { id: 2 }],
      actual: [[{ id: 1 }], { id: 2 }].myFlat(),
    },

    TEST_12: {
      title: "Nested Objects",
      expected: [{ id: 1 }, { id: 2 }],
      actual: [[[{ id: 1 }]], { id: 2 }].myFlat(Infinity),
    },

    TEST_13: {
      title: "Null Values",
      expected: [1, null, 2],
      actual: [1, [null], 2].myFlat(),
    },

    TEST_14: {
      title: "Undefined Values",
      expected: [1, undefined, 2],
      actual: [1, [undefined], 2].myFlat(),
    },

    TEST_15: {
      title: "Mixed Types",
      expected: [1, "hello", true, null],
      actual: [1, ["hello"], [true], null].myFlat(),
    },

    TEST_16: {
      title: "Depth Zero",
      expected: [1, [2, [3]]],
      actual: [1, [2, [3]]].myFlat(0),
    },

    TEST_17: {
      title: "Multiple Nested Arrays",
      expected: [1, 2, 3, 4, 5, 6],
      actual: [
        [1, 2],
        [3, 4],
        [5, 6],
      ].myFlat(),
    },

    TEST_18: {
      title: "Deep Nesting With Infinity",
      expected: [1, 2, 3, 4, 5],
      actual: [[[[[1]]]], [2], [[3, [4]]], 5].myFlat(Infinity),
    },

    TEST_19: {
      title: "Preserve Original Array",
      expected: [1, [2, 3]],
      actual: (() => {
        const arr = [1, [2, 3]];
        arr.myFlat();
        return arr;
      })(),
    },

    TEST_20: {
      title: "Nested Empty Arrays",
      expected: [1, 2],
      actual: [1, [], [[2]]].myFlat(Infinity),
    },
  };
}

console.dir(testMyFlat(), {
  depth: null,
});
