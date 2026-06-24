// N-11 · Binary to Decimal / Decimal to Binary
// Difficulty: Medium | Asked: 2024, 2025

// Problem A: Convert decimal number to binary string without toString(2) Problem B: Convert binary string to decimal without parseInt(n, 2)

// Input A: 10 Output A: "1010"

// Input B: "1010" Output B: 10

function decimalTOBinary(n) {
  let binary = "";
  while (n > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }
  return binary;
}

// console.dir(decimalTOBinary(10));

function binaryToDecimal(binary) {
  let decimal = 0;

  for (let i = 0; i < binary.length; i++) {
    decimal += Number(binary[i]) * Math.pow(2, binary.length - 1 - i);
  }

  return decimal;
}
console.dir(binaryToDecimal("1010")); // 10
