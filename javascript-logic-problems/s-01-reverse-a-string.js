// S-01 · Reverse a String
// Difficulty: Easy | Asked: Every year

// Problem: Reverse a string WITHOUT using .reverse(). Use a loop.

// Input: "hello" Output: "olleh"
function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

console.dir(reverseString("hello"));
