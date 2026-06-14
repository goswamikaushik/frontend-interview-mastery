// N-04 · Factorial
// Difficulty: Easy | Asked: Every year

// Problem: Return n! (n factorial). Both iterative and recursive.

// Input: 5 Output: 120

// Input: 0 Output: 1 ← edge case: 0! = 1
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }

  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

// console.dir(factorial(4));

function factorialWithRecursion(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }

  if (n <= 1) return 1;
  return n * factorialWithRecursion(n - 1);
}

console.dir(factorialWithRecursion(4));
