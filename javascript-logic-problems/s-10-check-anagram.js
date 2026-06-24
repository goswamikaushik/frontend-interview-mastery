// S-10 · Check Anagram
// Difficulty: Easy | Asked: Every year

// Problem: Two strings are anagrams if they use the same characters with same frequency.

// Input: "listen", "silent" Output: true

// Input: "hello", "world" Output: false
function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
// console.dir(checkAnagram("hello", "world"));

// Another Approach
function checkAnagram1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const freq = {};

  for (const char of str1) {
    freq[char] = (freq[char] ?? 0) + 1;
  }

  for (const char of str2) {
    if (!freq[char]) {
      return false;
    }

    freq[char]--;
  }

  return true;
}
console.dir(checkAnagram1("hello", "world"));
