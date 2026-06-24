// S-02 · Reverse Words in a String ⚠️
// Difficulty: Easy–Medium | Asked: 2024, 2025, 2026 — YOU WERE ASKED THIS

// Problem: Reverse the ORDER of words, not characters. Handle extra spaces.

// Input: "the sky is blue" Output: "blue is sky the"

// Input: " hello world " Output: "world hello" ← trim spaces

// Input: "a good example" Output: "example good a" ← multiple spaces between words
function reverseWordsInString(str) {
  const words = str.trim().split(/\s+/);

  let reversed = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i];

    if (i > 0) {
      reversed += " ";
    }
  }
  return reversed;
}

console.dir(reverseWordsInString("the sky is blue")); // blue is sky the
console.dir(reverseWordsInString(" hello world ")); // world hello
console.dir(reverseWordsInString("a   good   example")); // example good a

// with built in method
function reverseWordsInStringUsingMethods(str) {
  return str.trim().split(/\s+/).reverse().join(" ");
}
