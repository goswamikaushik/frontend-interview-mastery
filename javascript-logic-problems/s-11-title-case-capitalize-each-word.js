// S-11 · Title Case (Capitalize Each Word)
// Difficulty: Easy | Asked: 2023, 2024

// Problem: Capitalize first letter of every word.

// Input: "hello world from kaushik" Output: "Hello World From Kaushik"
function capitalizeFirstCharOfWord(str) {
  const arr = str.trim().split(/\s+/);

  const results = [];

  for (const item of arr) {
    results.push(item[0].toUpperCase() + item.slice(1));
  }

  return results.join(" ");
}
console.log(capitalizeFirstCharOfWord("hello world")); // "Hello World"
console.log(capitalizeFirstCharOfWord("hello world from kaushik")); // "Hello World From Kaushik"
console.log(capitalizeFirstCharOfWord("javascript")); // "Hello World"
console.log(capitalizeFirstCharOfWord("a   good   example")); // "A Good Example"
console.log(capitalizeFirstCharOfWord("   hello world")); // "Hello World"
