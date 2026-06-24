// S-14 · String Compression (Run-Length Encoding)
// Difficulty: Medium | Asked: 2024, 2025, 2026

// Problem: Compress consecutive repeated characters.

// Input: "aaabbbcc" Output: "a3b3c2"

// Input: "abcd" Output: "abcd" ← don't compress if longer
function stringCompression(str) {
  let count = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + (count + 1);
      count = 0;
    }
  }

  return result.length < str.length ? result : str;
}

console.dir(stringCompression("aaabbbcc")); // a3b3c2

console.dir(stringCompression("aaabbbccaa")); // a3b3c2a2

console.dir(stringCompression("abcd")); // abcd
