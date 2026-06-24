// S-05 · Count Vowels
// Difficulty: Easy | Asked: 2023, 2024

// Problem: Count how many vowels (a, e, i, o, u) are in a string.

// Input: "Hello World" Output: 3
function countVowels(str) {
  let count = 0;

  const lowercase = str.trim().toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (
      lowercase[i] === "a" ||
      lowercase[i] === "e" ||
      lowercase[i] === "i" ||
      lowercase[i] === "o" ||
      lowercase[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.dir(countVowels("Hello World"));

function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
