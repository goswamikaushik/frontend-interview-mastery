/*
Pattern 7: Star Pyramid

Input:
N = 5

Output:
    *
   ***
  *****
 *******
*********

Time Complexity: O(N²)
Space Complexity: O(1)
*/

/*
Pattern 7: Star Pyramid

Input:
N = 5

Output:
    *
   ***
  *****
 *******
*********

Time Complexity: O(N²)
Space Complexity: O(1)
*/

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    // space
    for (let j = 0; j < n - i - 1; j++) {
      row += ` `;
    }

    // stars
    for (let j = 0; j < 2 * i + 1; j++) {
      row += `*`;
    }

    // space
    for (let j = 0; j < n - i - 1; j++) {
      row += ` `;
    }

    console.log(row);
  }
}

pattern(5);
