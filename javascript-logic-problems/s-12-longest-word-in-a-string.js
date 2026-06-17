// S-12 · Longest Word in a String
// Difficulty: Easy | Asked: 2023, 2024

// Problem: Find the longest word in a sentence.

// Input: "The quick brown fox jumped" Output: "jumped" (6 chars)
function findLongestWordInSentence(str) {
  if (!str.trim()) return "";

  const arr = str.trim().split(/\s+/);

  let longestWord = "";

  for (const item of arr) {
    if (item.length > longestWord.length) {
      longestWord = item;
    }
  }

  return longestWord;
}
console.log(findLongestWordInSentence("The quick brown fox jumped")); // "jumped"
console.log(findLongestWordInSentence("hello world")); // "hello"
console.log(findLongestWordInSentence("hello world from kaushik")); // "kaushik"
