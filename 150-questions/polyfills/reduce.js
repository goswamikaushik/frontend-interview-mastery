Array.prototype.myReduce = function (callback, initialValue) {
  const arrLength = this.length;

  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }

  if (arrLength === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  if (arrLength === 1) {
    return this[0];
  }

  let accumulator = initialValue;
  let startIndex = 0;

  if (initialValue === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arrLength; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

// ================================
// TEST 1: Sum with initial value
// Expected: 15
// ================================
console.log([1, 2, 3, 4, 5].myReduce((acc, curr) => acc + curr, 0));

// ================================
// TEST 2: Sum without initial value
// Expected: 15
// ================================
console.log([1, 2, 3, 4, 5].myReduce((acc, curr) => acc + curr));

// ================================
// TEST 3: Multiplication
// Expected: 120
// ================================
console.log([1, 2, 3, 4, 5].myReduce((acc, curr) => acc * curr, 1));

// ================================
// TEST 4: Find Maximum
// Expected: 100
// ================================
console.log([1, 100, 50, 20].myReduce((acc, curr) => Math.max(acc, curr)));

// ================================
// TEST 5: Find Minimum
// Expected: 1
// ================================
console.log([5, 4, 3, 2, 1].myReduce((acc, curr) => Math.min(acc, curr)));

// ================================
// TEST 6: Single Element + No Initial Value
// Expected: 50
// Callback should NOT execute
// ================================
console.log([50].myReduce((acc, curr) => acc + curr));

// ================================
// TEST 7: Single Element + Initial Value
// Expected: 60
// ================================
console.log([50].myReduce((acc, curr) => acc + curr, 10));

// ================================
// TEST 8: Empty Array + Initial Value
// Expected: 10
// Callback should NOT execute
// ================================
console.log([].myReduce((acc, curr) => acc + curr, 10));

// ================================
// TEST 9: Empty Array + No Initial Value
// Expected: TypeError
// ================================
try {
  console.log([].myReduce((acc, curr) => acc + curr));
} catch (err) {
  console.log(err.message);
}

// ================================
// TEST 10: Convert Array to Object
// Expected:
// {
//   a: 1,
//   b: 2,
//   c: 3
// }
// ================================
console.log(
  ["a", "b", "c"].myReduce((acc, curr, index) => {
    acc[curr] = index + 1;
    return acc;
  }, {}),
);

// ================================
// TEST 11: Count Occurrences
// Expected:
// {
//   apple: 3,
//   banana: 2
// }
// ================================
console.log(
  ["apple", "banana", "apple", "apple", "banana"].myReduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {}),
);

// ================================
// TEST 12: Flatten Array
// Expected:
// [1, 2, 3, 4, 5]
// ================================
console.log(
  [[1, 2], [3, 4], [5]].myReduce((acc, curr) => {
    return acc.concat(curr);
  }, []),
);

// ================================
// TEST 13: Check Callback Parameters
// Expected:
// acc=0 curr=10 index=0
// acc=10 curr=20 index=1
// acc=30 curr=30 index=2
// Final Result: 60
// ================================
console.log(
  [10, 20, 30].myReduce((acc, curr, index) => {
    console.log(`acc=${acc} curr=${curr} index=${index}`);
    return acc + curr;
  }, 0),
);

// ================================
// TEST 14: String Concatenation
// Expected: "Hello World"
// ================================
console.log(["Hello", " ", "World"].myReduce((acc, curr) => acc + curr, ""));

// ================================
// TEST 15: Boolean Reduction
// Expected: false
// ================================
console.log(
  [true, true, false, true].myReduce((acc, curr) => acc && curr, true),
);
