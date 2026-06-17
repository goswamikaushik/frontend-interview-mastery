// S-09 · First Non-Repeating Character
// Difficulty: Easy–Medium | Asked: 2024, 2025, 2026

// Problem: Find the first character that appears exactly once.

// Input: "leetcode" Output: "l" (index 0)

// Input: "aabb" Output: null (all repeat)

// Pattern: Frequency map first, then scan again.
function firstNonRepeatingChar(str) {
  const freq = {};

  // Pass 1: Count frequency
  for (const char of str) {
    freq[char] = (freq[char] ?? 0) + 1;
  }

  // Pass 2: Find first non-repeating
  for (const char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("leetcode")); // l
console.log(firstNonRepeatingChar("aabb")); // null
