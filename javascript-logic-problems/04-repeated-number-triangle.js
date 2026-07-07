/*
Pattern 4: Repeated Number Triangle

Input:
N = 5

Output:
1
22
333
4444
55555

Time Complexity: O(N²)
Space Complexity: O(N)
*/

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += `${i + 1} `;
    }
    console.log(row);
  }
}

pattern(7);
