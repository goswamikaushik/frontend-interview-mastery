// S-08 · Remove Duplicate Characters
// Difficulty: Easy | Asked: 2024, 2025

// Problem: Return string with duplicate characters removed. Keep first occurrence.

// Input: "banana" Output: "ban"
function removeDuplicate(str) {
  let newStr = "";
  for (const char of str) {
    if (!newStr.includes(char)) {
      newStr += char;
    }
  }
  return newStr;
}
// console.dir(removeDuplicate("banana"));

// better approach
function removeDuplicate2(str) {
  const seen = new Set();

  let newStr = "";
  for (const char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }
  return newStr;
}
// console.dir(removeDuplicate2("banana"));

// better approach
function removeDuplicate3(str) {
  return [...new Set(str)].join("");
}
console.dir(removeDuplicate3("banana"));
