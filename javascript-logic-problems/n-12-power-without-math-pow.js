// N-12 · Power Without Math.pow
// Difficulty: Easy–Medium | Asked: 2024, 2025

// Problem: Implement power(base, exp) without using Math.pow or **.

// Input: 2, 10 Output: 1024

// Bonus: Implement with recursion.
function powerWithoutMathPow(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(powerWithoutMathPow(2, 10));

// with recursion
function powerWithRecursion(base, exponent) {
  if (exponent === 0) return 1;
  return base * powerWithRecursion(base, exponent - 1);
}
console.dir(powerWithRecursion(2, 10));
