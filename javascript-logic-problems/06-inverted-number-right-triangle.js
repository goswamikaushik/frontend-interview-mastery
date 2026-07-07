/*
Pattern 6: Inverted Number Right-Angled Triangle

Input:
N = 5

Output:
12345
1234
123
12
1

Time Complexity: O(N²)
Space Complexity: O(1)
*/

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += `${j + 1}`;
    }
    console.log(row);
  }
}

pattern(5);
