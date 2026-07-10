/*
Pattern 10: Half Diamond Star Pattern

Input:
N = 5

Output:
*
**
***
****
*****
****
***
**
*

Time Complexity: O(N²)
Space Complexity: O(1)
*/

function pattern(n) {
  for (let i = 0; i < n * 2 - 1; i++) {
    let row = "";
    let end = i < n ? i + 1 : n * 2 - 1 - i;
    for (let j = 0; j < end; j++) {
      row += "*";
    }

    console.log(row);
  }
}
pattern(5);
