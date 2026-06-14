// N-08 · Count Digits in a Number
// Difficulty: Easy | Asked: 2024

// Problem: Count how many digits are in a number without converting to string.

// Input: 12345 Output: 5
function countDigitInNumber(n) {
  n = Math.abs(n);

  if (n === 0) return 1;

  let count = 0;

  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

  return count;
}

console.log(countDigitInNumber(12345)); // 5
console.log(countDigitInNumber(1544544454)); // 10
console.log(countDigitInNumber(7)); // 1
console.log(countDigitInNumber(0)); // 1
console.log(countDigitInNumber(-123)); // 3
