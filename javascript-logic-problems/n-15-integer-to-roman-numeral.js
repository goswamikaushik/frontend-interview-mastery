// N-15 · Integer to Roman Numeral
// Difficulty: Medium | Asked: 2024, 2025

// Problem: Convert integer to Roman numeral string.

// Input: 1994 Output: "MCMXCIV"

// Input: 3749 Output: "MMMDCCXLIX"
function integerToRoman(num) {
  const romanValues = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  for (let key in romanValues) {
    while (num >= romanValues[key]) {
      roman += key;
      num -= romanValues[key];
    }
  }
  return roman;
}

console.dir(integerToRoman(1994));
