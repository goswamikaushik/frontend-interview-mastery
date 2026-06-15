// N-09 · Missing Number (1 to N)
// Difficulty: Easy | Asked: 2024, 2025, 2026

// Problem: Given array of n-1 numbers from 1 to n, find the missing one. Trick: sum formula → n*(n+1)/2 - actual sum

// Input: [1, 2, 4, 5, 6] Output: 3
function missingNumber(arr) {
  const n = arr.length + 1;

  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (const num of arr) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

console.log(missingNumber([1, 2, 4, 5, 6]));
