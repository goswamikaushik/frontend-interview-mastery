/*
Pattern 2: Right-Angled Triangle Pattern

Input:
N = 5

Output:
*
* *
* * *
* * * *
* * * * *

*/
function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

pattern(10);
