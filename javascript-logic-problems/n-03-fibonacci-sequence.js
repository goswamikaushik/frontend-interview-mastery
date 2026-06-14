// N-03 · Fibonacci Sequence
// Difficulty: Easy–Medium | Asked: Every year

// Problem: Return the first n Fibonacci numbers. Each number = sum of the two before it.

// Input: 7 Output: [0, 1, 1, 2, 3, 5, 8]

// Bonus: Also implement with recursion. Know why iteration is better (no stack overflow).
function returnFibonacciSequence(n) {
  if (n <= 0) return [];

  const fibonacci = [0];

  if (n === 1) return fibonacci;

  fibonacci.push(1);

  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  return fibonacci;
}

// console.dir(returnFibonacciSequence(7));

// Iteration avoids the overhead of repeated function calls and does not consume call stack memory.
// The naive recursive Fibonacci solution has O(2ⁿ) time complexity and can cause stack overflow for large inputs,
// while the iterative solution runs in O(n) time with predictable memory usage.
function fibonacciWithRecursion(n) {
  if (n <= 1) return n;

  return fibonacciWithRecursion(n - 1) + fibonacciWithRecursion(n - 2);
}
console.dir(fibonacciWithRecursion(1));
