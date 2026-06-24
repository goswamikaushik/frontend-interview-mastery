// N-05 · Armstrong Number
// Difficulty: Easy | Asked: 2023, 2024

// Problem: A number is Armstrong if the sum of its digits each raised to the power of digit count equals the number.
// 153 = 1³ + 5³ + 3³ = 153 ✅

// Input: 153 Output: true

// Input: 123 Output: false
function isArmsStrongNumber(n) {
  const digits = String(n).split("");
  const power = digits.length;

  let sum = 0;

  for (const digit of digits) {
    sum += Number(digit) ** power;
  }

  return sum === n;
}
console.dir(isArmsStrongNumber(153));
