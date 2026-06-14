// N-06 · Reverse a Number
// Difficulty: Easy | Asked: 2023, 2024, 2025

// Problem: Reverse the digits of a number. Do NOT convert to string.

// Input: 12345 Output: 54321

// Input: -123 Output: -321

function reverseNumber(n) {
  const sign = Math.sign(n);

  let reversed = 0;

  while (n > 0) {
    const lastDigit = n % 10;
    reversed = reversed * 10 + lastDigit;

    n = Math.floor(n / 10);
  }

  return reversed * sign;
}
console.log(reverseNumber(712345));
