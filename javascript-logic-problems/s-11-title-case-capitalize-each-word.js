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
console.dir(capitalizeFirstCharOfWord("hello world")); // "Hello World"
console.dir(capitalizeFirstCharOfWord("hello world from kaushik")); // "Hello World From Kaushik"
console.dir(capitalizeFirstCharOfWord("javascript")); // "Hello World"
console.dir(capitalizeFirstCharOfWord("a   good   example")); // "A Good Example"
console.dir(capitalizeFirstCharOfWord("   hello world")); // "Hello World"
