/*
Pattern 1: Square Star Pattern

* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

*/

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < 4; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
pattern(5);
