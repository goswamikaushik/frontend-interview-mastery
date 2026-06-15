// N-10 · Find GCD / HCF
// Difficulty: Easy–Medium | Asked: 2023, 2024

// Problem: Find the Greatest Common Divisor of two numbers using Euclidean algorithm. GCD(a, b) = GCD(b, a % b) until b = 0

// Input: 48, 18 Output: 6
function findGCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  if (a === 0 && b === 0) {
    throw new Error("GCD is undefined");
  }

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}
console.log(findGCD(12, 33));
