// S-07 · Find Duplicate Characters
// Difficulty: Easy | Asked: 2023, 2024, 2025

// Problem: Return characters that appear more than once.

// Input: "programming" Output: ["r", "g", "m"]
function duplicateCharacter(str) {
  let newStr = "";
  let duplicateChars = [];
  for (const char of str) {
    if (newStr.includes(char)) {
      if (!duplicateChars.includes(char)) {
        duplicateChars.push(char);
      }
    }
    newStr += char;
  }
  return duplicateChars;
}
// console.log(duplicateCharacter("programming"));

// second approach
function duplicateCharacter2(str) {
  const freq = {};
  const duplicates = [];

  for (const char of str) {
    freq[char] = (freq[char] ?? 0) + 1;
  }

  for (const char in freq) {
    if (freq[char] > 1) {
      duplicates.push(char);
    }
  }

  return duplicates;
}

console.log(duplicateCharacter2("programming"));
// ["r", "g", "m"]
