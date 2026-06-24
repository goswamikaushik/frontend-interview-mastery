// S-03 · Swap First and Last Word ⚠️
// Difficulty: Easy | Asked: 2024, 2025 — YOU WERE ASKED THIS

// Problem: Swap the first and last word of a sentence.

// Input: "Hello my name is Kaushik" Output: "Kaushik my name is Hello"
function swapFLWord(str) {
  const words = str.trim().split(/\s+/);

  if (!words[0]) return "";

  [words[0], words[words.length - 1]] = [words[words.length - 1], words[0]];

  return words.join(" ");
}
console.dir(swapFLWord("Hello my name is Kaushik"));
