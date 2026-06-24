// N-14 · Roman Numeral to Integer
// Difficulty: Medium | Asked: 2024, 2025, 2026

// Problem: Convert Roman numeral string to integer.
// Rules: I=1, V=5, X=10, L=50, C=100, D=500, M=1000 If smaller value comes before larger → subtract it. IV = 4, IX = 9

// Input: "XIV" Output: 14

// Input: "MCMXCIV" Output: 1994
function romanNumeralToInteger(roman) {
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    const curr = values[roman[i]];
    const next = values[roman[i + 1]];
    if (curr < next) {
      total -= curr;
    } else {
      total += curr;
    }
  }
  return total;
}

console.dir(romanNumeralToInteger("MCMXCIV"));
