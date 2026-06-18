// S-15 · Toggle Case
// Difficulty: Easy | Asked: 2023, 2024

// Problem: Uppercase letters become lowercase, lowercase become uppercase.

// Input: "Hello World" Output: "hELLO wORLD"

// Utility functions
// function isLowerCase(c) {
//   return /[a-z]/.test(c);
// }

// function isLowerCase(char) {
//   return char !== char.toUpperCase();
// }

function isLowerCase(char) {
  const code = char.charCodeAt(0);
  return code >= 97 && code <= 122;
}

function toggleCase(str) {
  let result = "";

  for (const char of str) {
    result += isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();
  }
  return result;
}
// console.log(toggleCase("Hello World"));

function toggleCase2(str) {
  let result = "";

  for (const char of str) {
    if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }

  return result;
}
// console.log(toggleCase2("Hello World"));

function toggleCase3(str) {
  const result = [];

  for (const char of str) {
    if (char >= "a" && char <= "z") {
      result.push(char.toUpperCase());
    } else if (char >= "A" && char <= "Z") {
      result.push(char.toLowerCase());
    } else {
      result.push(char);
    }
  }

  return result.join("");
}
// console.log(toggleCase3("Hello World"));

function toggleCase4(str) {
  let result = "";

  for (const char of str) {
    const code = char.charCodeAt(0);

    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += char;
    }
  }

  return result;
}
console.log(toggleCase4("Hello World"));
