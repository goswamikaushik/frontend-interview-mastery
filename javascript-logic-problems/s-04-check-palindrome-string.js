// S-04 · Check Palindrome String
// Difficulty: Easy | Asked: Every year

// Problem: Check if a string reads same forwards and backwards. Ignore case, ignore non-alphanumeric.

// Input: "racecar" Output: true

// Input: "A man a plan a canal Panama" Output: true

// Input: "hello" Output: false

function checkPalindrome(str) {
  const lowercase = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");

  let left = 0;
  let right = lowercase.length - 1;

  while (left < right) {
    if (!(lowercase[left] === lowercase[right])) {
      return false;
    }

    left++;
    right--;
  }
  return true;
}

console.dir(checkPalindrome("racecar"));

function checkPalindromeWithMethod(str) {
  const lowercase = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  return lowercase.split("").reverse().join("") === lowercase;
}
// console.dir(checkPalindromeWithMethod("racecar"));
