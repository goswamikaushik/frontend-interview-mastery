/*
Pattern 5: Inverted Right-Angled Triangle

Input:
N = 5

Output:
*****
****
***
**
*

Time Complexity: O(N²)
Space Complexity: O(N)
*/

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = n - i - 1; j >= 0; j--) {
      row += "*";
    }
    console.log(row);
  }
}

pattern(5);
