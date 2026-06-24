// S-13 · Most Frequent Character
// Difficulty: Easy | Asked: 2024, 2025

// Problem: Find the character that appears most often.

// Input: "javascript" Output: "a" (appears 2 times)
function mostFrequentCharacter(str) {
  const frequency = {};

  for (const item of str) {
    frequency[item] = (frequency[item] ?? 0) + 1;
  }

  let mostFrequentChar = "";
  let maxCount = 0;
  for (const [char, count] of Object.entries(frequency)) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequentChar = char;
    }
  }

  return mostFrequentChar;
}
console.dir(mostFrequentCharacter("javascradadadseeeeeeeeeeadipt"));
