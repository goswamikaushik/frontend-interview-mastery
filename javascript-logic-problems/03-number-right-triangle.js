/*
Pattern 3: Number Right-Angled Triangle

Input:
N = 5

Output:
1
12
123
1234
12345

*/
function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += j + 1;
    }
    console.log(row);
  }
}

pattern(5);
