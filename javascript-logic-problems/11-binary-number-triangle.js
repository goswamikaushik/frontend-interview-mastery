/*
Pattern 11: Binary Number Triangle

Input:
N = 5

Output:
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

Time Complexity: O(N²)
Space Complexity: O(1)
*/

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let print = i % 2 === 0 ? 1 : 0;
    for (let j = 0; j <= i; j++) {
      row += print + " ";
      print = 1 - print;
    }

    console.log(row);
  }
}
pattern(5);
