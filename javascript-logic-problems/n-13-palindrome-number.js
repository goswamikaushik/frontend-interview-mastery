// N-13 · Palindrome Number
// Difficulty: Easy | Asked: 2023, 2024

// Problem: Check if a number reads the same forwards and backwards. No string conversion.

// Input: 121 Output: true

// Input: 123 Output: false

// Input: -121 Output: false ← negatives are never palindromes
function isPalindrome(n) {
  if (n < 0) return false;

  const original = String(n);

  let reversedStr = "";

  while (n > 0) {
    reversedStr += n % 10;
    n = Math.floor(n / 10);
  }
  return reversedStr === original;
}

console.dir(isPalindrome(125));
console.dir(isPalindrome(121));
