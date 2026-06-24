// S-06 · Character Frequency Map
// Difficulty: Easy | Asked: Every year

// Problem: Count how many times each character appears.

// Input: "banana" Output: { b: 1, a: 3, n: 2 }
function characterCount(str) {
  const obj = {};

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const curr = obj[currentChar];
    if (curr) {
      obj[currentChar] = curr + 1;
    } else {
      obj[currentChar] = 1;
    }
  }

  return obj;
}
// console.dir(characterCount("banana"));

function characterFrequency(str) {
  const frequency = {};

  for (char of str) {
    frequency[char] = (frequency[char] ?? 0) + 1;
  }

  return frequency;
}
console.dir(characterFrequency("banana"));
