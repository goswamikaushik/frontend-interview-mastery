// N-07 · Sum of Digits
// Difficulty: Easy | Asked: 2023, 2024

// Problem: Return the sum of all digits in a number.

// Input: 1234 Output: 10
function sumOfDigits(n) {
  n = Math.abs(n);

  const digits = String(n).split("");

  let sum = 0;

  for (const digit of digits) {
    sum += Number(digits);
  }

  return sum;
}
// console.dir(sumOfDigits(1234));

function sumOfDigitsWithoutString(n) {
  n = Math.abs(n);

  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.dir(sumOfDigitsWithoutString(1234));
