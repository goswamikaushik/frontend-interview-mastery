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

// ================================
// TEST 1: Double Numbers
// Expected: [2, 4, 6, 8, 10]
// ================================
console.log([1, 2, 3, 4, 5].myMap((n) => n * 2));

// ================================
// TEST 2: Square Numbers
// Expected: [1, 4, 9, 16, 25]
// ================================
console.log([1, 2, 3, 4, 5].myMap((n) => n * n));

// ================================
// TEST 3: Convert Numbers to Strings
// Expected: ["1", "2", "3"]
// ================================
console.log([1, 2, 3].myMap((n) => String(n)));

// ================================
// TEST 4: Access Index
// Expected:
// ["0:10", "1:20", "2:30"]
// ================================
console.log([10, 20, 30].myMap((value, index) => `${index}:${value}`));

// ================================
// TEST 5: Access Original Array
// Expected:
// [3, 3, 3]
// ================================
console.log([1, 2, 3].myMap((value, index, array) => array.length));

// ================================
// TEST 6: Empty Array
// Expected: []
// ================================
console.log([].myMap((n) => n * 2));

// ================================
// TEST 7: Single Element
// Expected: [100]
// ================================
console.log([50].myMap((n) => n * 2));

// ================================
// TEST 8: Return Objects
// Expected:
// [
//   { value: 1 },
//   { value: 2 },
//   { value: 3 }
// ]
// ================================
console.log(
  [1, 2, 3].myMap((n) => ({
    value: n,
  })),
);

// ================================
// TEST 9: Array of Objects
// Expected:
// ["Kaushik", "John", "Jane"]
// ================================
console.log(
  [{ name: "Kaushik" }, { name: "John" }, { name: "Jane" }].myMap(
    (user) => user.name,
  ),
);

// ================================
// TEST 10: Boolean Result
// Expected:
// [false, true, true]
// ================================
console.log([1, 2, 3].myMap((n) => n > 1));

// ================================
// TEST 11: Callback Parameters Check
// Expected:
// value=10 index=0
// value=20 index=1
// value=30 index=2
// Result:
// [20, 40, 60]
// ================================
console.log(
  [10, 20, 30].myMap((value, index, array) => {
    console.log(`value=${value} index=${index}`);

    return value * 2;
  }),
);

// ================================
// TEST 12: Preserve Original Array
// Expected:
// original -> [1, 2, 3]
// mapped -> [2, 4, 6]
// ================================
const original = [1, 2, 3];

const mapped = original.myMap((n) => n * 2);

console.log("original", original);
console.log("mapped", mapped);

// ================================
// TEST 13: Nested Arrays
// Expected:
// [2, 3, 1]
// ================================
console.log([[1, 2], [3, 4, 5], [6]].myMap((arr) => arr.length));

// ================================
// TEST 14: Return Undefined
// Expected:
// [undefined, undefined, undefined]
// ================================
console.log([1, 2, 3].myMap(() => undefined));

// ================================
// TEST 15: Return Null
// Expected:
// [null, null, null]
// ================================
console.log([1, 2, 3].myMap(() => null));

// ================================
// TEST 16: Return Array
// Expected:
// [[1], [2], [3]]
// ================================
console.log([1, 2, 3].myMap((n) => [n]));

// ================================
// TEST 17: Invalid Callback
// Expected:
// TypeError: hello is not a function
// ================================
try {
  console.log([1, 2, 3].myMap("hello"));
} catch (err) {
  console.log(err.message);
}

// ================================
// TEST 18: Callback Returns Different Types
// Expected:
// [1, "2", true]
// ================================
console.log(
  [1, 2, 3].myMap((n) => {
    if (n === 1) return 1;
    if (n === 2) return "2";
    return true;
  }),
);

// ================================
// TEST 19: Verify Length
// Expected:
// 5
// ================================
console.log([1, 2, 3, 4, 5].myMap((n) => n * 2).length);

// ================================
// TEST 20: Map With Math Object
// Expected:
// [1, 2, 3]
// ================================
console.log([1.2, 2.5, 3.9].myMap(Math.floor));
