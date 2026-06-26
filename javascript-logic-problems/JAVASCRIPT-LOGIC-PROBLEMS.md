# JS Logic Problems — A to Z

> Frontend Developer Interview Prep · 2023–2026 Problems
> 130+ Problems · 7 Categories · Easy → Hard
> Format: Problem → Input → Output → What to think about

---

## Table of Contents

1. [Number / Math Logic](#1-number--math-logic) — 15 problems
2. [String Problems](#2-string-problems) — 30 problems
3. [Array Problems](#3-array-problems) — 30 problems
4. [Object Problems](#4-object-problems) — 15 problems
5. [Functions / Closures / JS Utility](#5-functions--closures--js-utility) — 15 problems
6. [Patterns / Sequence Logic](#6-patterns--sequence-logic) — 15 problems
7. [Frontend-Specific Logic](#7-frontend-specific-logic) — 10 problems

---

## 1. Number / Math Logic

---

### N-01 · Check Prime Number

**Difficulty:** Easy | **Pattern:** Primality Test | **Asked:** Every year

**Problem:**
Write a function that returns `true` if a number is prime, `false` otherwise.
A prime number is divisible only by 1 and itself.

**Input:** `7`
**Output:** `true`

**Input:** `10`
**Output:** `false`

**Edge cases:** 0, 1 → not prime. 2 → prime (only even prime).

---

### N-02 · Check Leap Year

**Difficulty:** Easy | **Pattern:** Basic Logic | **Asked:** 2023, 2024, 2025

**Problem:**
A year is a leap year if:

- Divisible by 4 AND
- NOT divisible by 100, UNLESS also divisible by 400

**Input:** `2024`
**Output:** `true`

**Input:** `1900`
**Output:** `false`

**Input:** `2000`
**Output:** `true`

---

### N-03 · Fibonacci Sequence

**Difficulty:** Easy–Medium | **Pattern:** Iteration / Recursion | **Asked:** Every year

**Problem:**
Return the first `n` Fibonacci numbers.
Each number = sum of the two before it.

**Input:** `7`
**Output:** `[0, 1, 1, 2, 3, 5, 8]`

**Bonus:** Also implement with recursion. Know why iteration is better (no stack overflow).

---

### N-04 · Factorial

**Difficulty:** Easy | **Pattern:** Iteration / Recursion | **Asked:** Every year

**Problem:**
Return `n!` (n factorial). Both iterative and recursive.

**Input:** `5`
**Output:** `120`

**Input:** `0`
**Output:** `1` ← edge case: 0! = 1

---

### N-05 · Armstrong Number

**Difficulty:** Easy | **Pattern:** Digit Extraction | **Asked:** 2023, 2024

**Problem:**
A number is Armstrong if the sum of its digits each raised to the power of digit count equals the number.
`153 = 1³ + 5³ + 3³ = 153` ✅

**Input:** `153`
**Output:** `true`

**Input:** `123`
**Output:** `false`

---

### N-06 · Reverse a Number

**Difficulty:** Easy | **Pattern:** Digit Extraction | **Asked:** 2023, 2024, 2025

**Problem:**
Reverse the digits of a number. Do NOT convert to string.

**Input:** `12345`
**Output:** `54321`

**Input:** `-123`
**Output:** `-321`

---

### N-07 · Sum of Digits

**Difficulty:** Easy | **Pattern:** Digit Extraction | **Asked:** 2023, 2024

**Problem:**
Return the sum of all digits in a number.

**Input:** `1234`
**Output:** `10`

---

### N-08 · Count Digits in a Number

**Difficulty:** Easy | **Pattern:** Digit Extraction | **Asked:** 2024

**Problem:**
Count how many digits are in a number without converting to string.

**Input:** `12345`
**Output:** `5`

---

### N-09 · Missing Number (1 to N)

**Difficulty:** Easy | **Pattern:** Math Sum Formula | **Asked:** 2024, 2025, 2026

**Problem:**
Given array of n-1 numbers from 1 to n, find the missing one.
Trick: sum formula → `n*(n+1)/2 - actual sum`

**Input:** `[1, 2, 4, 5, 6]`
**Output:** `3`

---

### N-10 · Find GCD / HCF

**Difficulty:** Easy–Medium | **Pattern:** Euclidean Algorithm | **Asked:** 2023, 2024

**Problem:**
Find the Greatest Common Divisor of two numbers using Euclidean algorithm.
`GCD(a, b) = GCD(b, a % b)` until b = 0

**Input:** `48, 18`
**Output:** `6`

---

### N-11 · Binary to Decimal / Decimal to Binary

**Difficulty:** Medium | **Pattern:** Base Conversion | **Asked:** 2024, 2025

**Problem A:** Convert decimal number to binary string without `toString(2)`
**Problem B:** Convert binary string to decimal without `parseInt(n, 2)`

**Input A:** `10`
**Output A:** `"1010"`

**Input B:** `"1010"`
**Output B:** `10`

---

### N-12 · Power Without Math.pow

**Difficulty:** Easy–Medium | **Pattern:** Iteration / Recursion | **Asked:** 2024, 2025

**Problem:**
Implement `power(base, exp)` without using `Math.pow` or `**`.

**Input:** `2, 10`
**Output:** `1024`

**Bonus:** Implement with recursion.

---

### N-13 · Palindrome Number

**Difficulty:** Easy | **Pattern:** Digit Extraction | **Asked:** 2023, 2024

**Problem:**
Check if a number reads the same forwards and backwards. No string conversion.

**Input:** `121`
**Output:** `true`

**Input:** `123`
**Output:** `false`

**Input:** `-121`
**Output:** `false` ← negatives are never palindromes

---

### N-14 · Roman Numeral to Integer

**Difficulty:** Medium | **Pattern:** HashMap / Simulation | **Asked:** 2024, 2025, 2026

**Problem:**
Convert Roman numeral string to integer.
Rules: `I=1, V=5, X=10, L=50, C=100, D=500, M=1000`
If smaller value comes before larger → subtract it. `IV = 4, IX = 9`

**Input:** `"XIV"`
**Output:** `14`

**Input:** `"MCMXCIV"`
**Output:** `1994`

---

### N-15 · Integer to Roman Numeral

**Difficulty:** Medium | **Pattern:** Greedy / Simulation | **Asked:** 2024, 2025

**Problem:**
Convert integer to Roman numeral string.

**Input:** `1994`
**Output:** `"MCMXCIV"`

**Input:** `3749`
**Output:** `"MMMDCCXLIX"`

---

## 2. String Problems

---

### S-01 · Reverse a String

**Difficulty:** Easy | **Pattern:** Basic Traversal / Two Pointers | **Asked:** Every year

**Problem:**
Reverse a string WITHOUT using `.reverse()`.
Use a loop.

**Input:** `"hello"`
**Output:** `"olleh"`

---

### S-02 · Reverse Words in a String ⚠️

**Difficulty:** Easy–Medium | **Pattern:** Split + Traversal | **Asked:** 2024, 2025, 2026 — YOU WERE ASKED THIS

**Problem:**
Reverse the ORDER of words, not characters.
Handle extra spaces.

**Input:** `"the sky is blue"`
**Output:** `"blue is sky the"`

**Input:** `"  hello world  "`
**Output:** `"world hello"` ← trim spaces

**Input:** `"a good   example"`
**Output:** `"example good a"` ← multiple spaces between words

---

### S-03 · Swap First and Last Word ⚠️

**Difficulty:** Easy | **Pattern:** Traversal | **Asked:** 2024, 2025 — YOU WERE ASKED THIS

**Problem:**
Swap the first and last word of a sentence.

**Input:** `"Hello my name is Kaushik"`
**Output:** `"Kaushik my name is Hello"`

---

### S-04 · Check Palindrome String

**Difficulty:** Easy | **Pattern:** Two Pointers | **Asked:** Every year

**Problem:**
Check if a string reads same forwards and backwards.
Ignore case, ignore non-alphanumeric.

**Input:** `"racecar"`
**Output:** `true`

**Input:** `"A man a plan a canal Panama"`
**Output:** `true`

**Input:** `"hello"`
**Output:** `false`

---

### S-05 · Count Vowels

**Difficulty:** Easy | **Pattern:** Traversal | **Asked:** 2023, 2024

**Problem:**
Count how many vowels (a, e, i, o, u) are in a string.

**Input:** `"Hello World"`
**Output:** `3`

---

### S-06 · Character Frequency Map

**Difficulty:** Easy | **Pattern:** HashMap | **Asked:** Every year

**Problem:**
Count how many times each character appears.

**Input:** `"banana"`
**Output:** `{ b: 1, a: 3, n: 2 }`

---

### S-07 · Find Duplicate Characters

**Difficulty:** Easy | **Pattern:** HashMap | **Asked:** 2023, 2024, 2025

**Problem:**
Return characters that appear more than once.

**Input:** `"programming"`
**Output:** `["r", "g", "m"]`

---

### S-08 · Remove Duplicate Characters

**Difficulty:** Easy | **Pattern:** Set | **Asked:** 2024, 2025

**Problem:**
Return string with duplicate characters removed. Keep first occurrence.

**Input:** `"banana"`
**Output:** `"ban"`

---

### S-09 · First Non-Repeating Character

**Difficulty:** Easy–Medium | **Pattern:** HashMap | **Asked:** 2024, 2025, 2026

**Problem:**
Find the first character that appears exactly once.

**Input:** `"leetcode"`
**Output:** `"l"` (index 0)

**Input:** `"aabb"`
**Output:** `null` (all repeat)

**Pattern:** Frequency map first, then scan again.

---

### S-10 · Check Anagram

**Difficulty:** Easy | **Pattern:** HashMap / Sorting | **Asked:** Every year

**Problem:**
Two strings are anagrams if they use the same characters with same frequency.

**Input:** `"listen", "silent"`
**Output:** `true`

**Input:** `"hello", "world"`
**Output:** `false`

---

### S-11 · Title Case (Capitalize Each Word)

**Difficulty:** Easy | **Pattern:** Traversal | **Asked:** 2023, 2024

**Problem:**
Capitalize first letter of every word.

**Input:** `"hello world from kaushik"`
**Output:** `"Hello World From Kaushik"`

---

### S-12 · Longest Word in a String

**Difficulty:** Easy | **Pattern:** Traversal | **Asked:** 2023, 2024

**Problem:**
Find the longest word in a sentence.

**Input:** `"The quick brown fox jumped"`
**Output:** `"jumped"` (6 chars)

---

### S-13 · Most Frequent Character

**Difficulty:** Easy | **Pattern:** HashMap | **Asked:** 2024, 2025

**Problem:**
Find the character that appears most often.

**Input:** `"javascript"`
**Output:** `"a"` (appears 2 times)

---

### S-14 · String Compression (Run-Length Encoding)

**Difficulty:** Medium | **Pattern:** Two Pointers / Run-Length Encoding | **Asked:** 2024, 2025, 2026

**Problem:**
Compress consecutive repeated characters.

**Input:** `"aaabbbcc"`
**Output:** `"a3b3c2"`

**Input:** `"abcd"`
**Output:** `"abcd"` ← don't compress if longer

---

### S-15 · Toggle Case

**Difficulty:** Easy | **Pattern:** Character Manipulation | **Asked:** 2023, 2024

**Problem:**
Uppercase letters become lowercase, lowercase become uppercase.

**Input:** `"Hello World"`
**Output:** `"hELLO wORLD"`

---

### S-16 · Longest Substring Without Repeating Characters ⭐

**Difficulty:** Medium | **Pattern:** Sliding Window + Set | **Asked:** 2024, 2025, 2026 — Very popular

**Problem:**
Find length of longest substring with no duplicate characters.

**Input:** `"abcabcbb"`
**Output:** `3` ("abc")

**Input:** `"bbbbb"`
**Output:** `1` ("b")

**Input:** `"pwwkew"`
**Output:** `3` ("wke")

**Pattern:** Sliding window + Set

---

### S-17 · Valid Parentheses / Balanced Brackets ⭐

**Difficulty:** Medium | **Pattern:** Stack | **Asked:** 2024, 2025, 2026 — Very popular

**Problem:**
Check if brackets are balanced and correctly ordered.

**Input:** `"()[]{}"`
**Output:** `true`

**Input:** `"(]"`
**Output:** `false`

**Input:** `"([)]"`
**Output:** `false`

**Input:** `"{[]}"`
**Output:** `true`

**Pattern:** Stack — push open, pop on close, check match.

---

### S-18 · Check Rotation

**Difficulty:** Medium | **Pattern:** String Manipulation | **Asked:** 2024, 2025

**Problem:**
Check if string B is a rotation of string A.

**Input:** `"waterbottle", "erbottlewat"`
**Output:** `true`

**Trick:** `(A + A).includes(B)` — one liner

---

### S-19 · Count Substring Occurrences

**Difficulty:** Easy | **Pattern:** Traversal | **Asked:** 2023, 2024

**Problem:**
Count how many times a substring appears in a string. WITHOUT `.split()` trick.

**Input:** `"banana", "an"`
**Output:** `2`

---

### S-20 · Longest Common Prefix

**Difficulty:** Medium | **Pattern:** Prefix Comparison | **Asked:** 2024, 2025, 2026

**Problem:**
Find the longest common prefix among an array of strings.

**Input:** `["flower", "flow", "flight"]`
**Output:** `"fl"`

**Input:** `["dog", "racecar", "car"]`
**Output:** `""` (no common prefix)

---

### S-21 · Caesar Cipher

**Difficulty:** Medium | **Pattern:** Simulation | **Asked:** 2024, 2025

**Problem:**
Shift each letter in the string by `k` positions in the alphabet. Wrap around.

**Input:** `"hello", 3`
**Output:** `"khoor"`

**Input:** `"xyz", 3`
**Output:** `"abc"` ← wraps around

---

### S-22 · Find All Permutations of a String

**Difficulty:** Hard | **Pattern:** Recursion + Backtracking | **Asked:** 2024, 2025

**Problem:**
Return all possible arrangements of characters.

**Input:** `"abc"`
**Output:** `["abc", "acb", "bac", "bca", "cab", "cba"]`

**Pattern:** Recursion — fix one char, permute the rest.

---

### S-23 · Check if String has Only Digits

**Difficulty:** Easy | **Pattern:** Traversal | **Asked:** 2023, 2024

**Problem:**
Return true if string contains only numeric digits.

**Input:** `"12345"`
**Output:** `true`

**Input:** `"123a5"`
**Output:** `false`

---

### S-24 · Truncate String

**Difficulty:** Easy | **Pattern:** Traversal | **Asked:** 2023, 2024

**Problem:**
Truncate a string to `n` characters. Append `"..."` if truncated.

**Input:** `"Hello World", 5`
**Output:** `"Hello..."`

**Input:** `"Hi", 5`
**Output:** `"Hi"` ← no truncation needed

---

### S-25 · Remove All Spaces

**Difficulty:** Easy | **Pattern:** Traversal | **Asked:** 2023

**Problem:**
Remove all spaces from a string without `.replace()`.

**Input:** `"hello world how are you"`
**Output:** `"helloworldhowareyou"`

---

### S-26 · Word Count in a String

**Difficulty:** Easy | **Pattern:** Traversal | **Asked:** 2023, 2024

**Problem:**
Count number of words in a string. Handle multiple spaces.

**Input:** `"  Hello   World  "`
**Output:** `2`

---

### S-27 · Group Anagrams Together ⭐

**Difficulty:** Medium | **Pattern:** HashMap + Sorting | **Asked:** 2024, 2025, 2026

**Problem:**
Group words that are anagrams of each other.

**Input:** `["eat", "tea", "tan", "ate", "nat", "bat"]`
**Output:** `[["eat","tea","ate"], ["tan","nat"], ["bat"]]`

**Pattern:** Sort each word as key → group by key.

---

### S-28 · Find All Duplicate Words in a Sentence

**Difficulty:** Easy–Medium | **Pattern:** HashMap | **Asked:** 2024, 2025

**Problem:**
Find words that appear more than once in a sentence.

**Input:** `"the cat sat on the mat the cat"`
**Output:** `["the", "cat"]`

---

### S-29 · Decode String ⭐

**Difficulty:** Medium–Hard | **Pattern:** Stack | **Asked:** 2025, 2026

**Problem:**
Decode an encoded string. `k[encoded]` means repeat `encoded` k times.

**Input:** `"3[a]2[bc]"`
**Output:** `"aaabcbc"`

**Input:** `"3[a2[c]]"`
**Output:** `"accaccacc"`

**Pattern:** Stack-based

---

### S-30 · String to Integer (atoi)

**Difficulty:** Medium | **Pattern:** Simulation | **Asked:** 2025, 2026

**Problem:**
Convert string to integer WITHOUT `parseInt`. Handle spaces, signs, invalid chars.

**Input:** `"  -42"`
**Output:** `-42`

**Input:** `"4193 with words"`
**Output:** `4193`

**Input:** `"words 987"`
**Output:** `0`

---

## 3. Array Problems

---

### A-01 · Find Max and Min

**Difficulty:** Easy | **Pattern:** Traversal | **Asked:** Every year

**Problem:**
Find the maximum and minimum values without using `Math.max/min`.

**Input:** `[3, 1, 4, 1, 5, 9, 2, 6]`
**Output:** `{ max: 9, min: 1 }`

---

### A-02 · Reverse an Array

**Difficulty:** Easy | **Pattern:** Two Pointers | **Asked:** Every year

**Problem:**
Reverse array WITHOUT using `.reverse()`. Use two pointers (swap in-place).

**Input:** `[1, 2, 3, 4, 5]`
**Output:** `[5, 4, 3, 2, 1]`

---

### A-03 · Remove Duplicates from Array

**Difficulty:** Easy | **Pattern:** Set / Filter | **Asked:** Every year

**Problem:**
Return array with duplicates removed. Three approaches: Set, filter+indexOf, reduce.

**Input:** `[1, 2, 2, 3, 4, 4, 5]`
**Output:** `[1, 2, 3, 4, 5]`

---

### A-04 · Flatten Nested Array

**Difficulty:** Easy–Medium | **Pattern:** Recursion | **Asked:** 2024, 2025, 2026

**Problem:**
Flatten array to any depth WITHOUT using `.flat()`.

**Input:** `[1, [2, [3, [4]], 5]]`
**Output:** `[1, 2, 3, 4, 5]`

**Pattern:** Recursion.

---

### A-05 · Find Second Largest

**Difficulty:** Easy | **Pattern:** Traversal | **Asked:** 2023, 2024, 2025

**Problem:**
Find second largest number in array WITHOUT sorting.

**Input:** `[10, 20, 4, 45, 99]`
**Output:** `45`

---

### A-06 · Rotate Array by K Positions ⭐

**Difficulty:** Medium | **Pattern:** Array Reversal / Rotation | **Asked:** 2024, 2025, 2026

**Problem:**
Rotate array to the right by `k` steps.

**Input:** `[1, 2, 3, 4, 5], k=2`
**Output:** `[4, 5, 1, 2, 3]`

**Trick:** Use modulo for large k: `k = k % arr.length`

---

### A-07 · Chunk Array

**Difficulty:** Easy–Medium | **Pattern:** Slice / Traversal | **Asked:** 2024, 2025

**Problem:**
Split array into chunks of size `n`.

**Input:** `[1, 2, 3, 4, 5, 6, 7], 3`
**Output:** `[[1, 2, 3], [4, 5, 6], [7]]`

---

### A-08 · Union of Two Arrays

**Difficulty:** Easy | **Pattern:** Set | **Asked:** 2023, 2024

**Problem:**
Return all unique elements from both arrays.

**Input:** `[1, 2, 3], [2, 3, 4, 5]`
**Output:** `[1, 2, 3, 4, 5]`

---

### A-09 · Intersection of Two Arrays

**Difficulty:** Easy | **Pattern:** Set / HashMap | **Asked:** 2023, 2024

**Problem:**
Return elements that appear in BOTH arrays.

**Input:** `[1, 2, 3, 4], [2, 4, 6]`
**Output:** `[2, 4]`

---

### A-10 · Difference of Two Arrays

**Difficulty:** Easy | **Pattern:** Set | **Asked:** 2023, 2024

**Problem:**
Return elements that are in A but NOT in B.

**Input:** `[1, 2, 3, 4], [2, 4]`
**Output:** `[1, 3]`

---

### A-11 · Sort Without Built-in Sort ⭐

**Difficulty:** Medium | **Pattern:** Bubble Sort / Sorting | **Asked:** 2024, 2025

**Problem:**
Sort an array without `.sort()`. Implement Bubble Sort.
Know the logic: compare adjacent elements, swap if out of order.

**Input:** `[64, 34, 25, 12, 22, 11, 90]`
**Output:** `[11, 12, 22, 25, 34, 64, 90]`

---

### A-12 · Find All Duplicates

**Difficulty:** Easy–Medium | **Pattern:** HashMap / Set | **Asked:** 2024, 2025

**Problem:**
Return all elements that appear more than once.

**Input:** `[4, 3, 2, 7, 8, 2, 3, 1]`
**Output:** `[2, 3]`

---

### A-13 · Move Zeros to End

**Difficulty:** Easy | **Pattern:** Two Pointers | **Asked:** 2024, 2025

**Problem:**
Move all zeros to the end, maintain order of non-zero elements.

**Input:** `[0, 1, 0, 3, 12]`
**Output:** `[1, 3, 12, 0, 0]`

---

### A-14 · Max Subarray Sum (Kadane's Algorithm) ⭐

**Difficulty:** Medium | **Pattern:** Kadane's Algorithm | **Asked:** 2024, 2025, 2026 — Very popular

**Problem:**
Find the contiguous subarray with the largest sum.

**Input:** `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`
**Output:** `6` (subarray: [4, -1, 2, 1])

**Pattern:** Track `currentSum` and `maxSum`. If `currentSum < 0`, reset to 0.

---

### A-15 · Merge Two Sorted Arrays

**Difficulty:** Medium | **Pattern:** Two Pointers | **Asked:** 2024, 2025

**Problem:**
Merge two sorted arrays into one sorted array WITHOUT `.concat().sort()`.

**Input:** `[1, 3, 5, 7], [2, 4, 6, 8]`
**Output:** `[1, 2, 3, 4, 5, 6, 7, 8]`

**Pattern:** Two pointer — compare heads, push smaller.

---

### A-16 · Majority Element ⭐

**Difficulty:** Medium | **Pattern:** Boyer-Moore Voting / HashMap | **Asked:** 2024, 2025, 2026

**Problem:**
Find element that appears more than n/2 times.

**Input:** `[3, 2, 3]`
**Output:** `3`

**Input:** `[2, 2, 1, 1, 1, 2, 2]`
**Output:** `2`

---

### A-17 · Product of Array Except Self ⭐

**Difficulty:** Medium | **Pattern:** Prefix & Suffix Products | **Asked:** 2025, 2026

**Problem:**
For each index, return product of all OTHER elements. No division allowed.

**Input:** `[1, 2, 3, 4]`
**Output:** `[24, 12, 8, 6]`

---

### A-18 · Two Sum ⭐

**Difficulty:** Easy–Medium | **Pattern:** HashMap | **Asked:** Every year

**Problem:**
Find two numbers that add up to a target. Return their indices.

**Input:** `[2, 7, 11, 15], target=9`
**Output:** `[0, 1]` (2 + 7 = 9)

**Pattern:** Hash map — store complement, check if current exists.

---

### A-19 · Three Sum

**Difficulty:** Medium | **Pattern:** Two Pointers / Sorting | **Asked:** 2025, 2026

**Problem:**
Find all unique triplets that sum to zero.

**Input:** `[-1, 0, 1, 2, -1, -4]`
**Output:** `[[-1, -1, 2], [-1, 0, 1]]`

**Pattern:** Sort first, then two pointer for each element.

---

### A-20 · Sliding Window Maximum ⭐

**Difficulty:** Hard | **Pattern:** Sliding Window / Deque | **Asked:** 2025, 2026

**Problem:**
Given array and window size k, return max of each window.

**Input:** `[1, 3, -1, -3, 5, 3, 6, 7], k=3`
**Output:** `[3, 3, 5, 5, 6, 7]`

**Pattern:** Deque (sliding window)

---

### A-21 · Count Occurrences of Each Element

**Difficulty:** Easy | **Pattern:** HashMap | **Asked:** 2023, 2024

**Problem:**
Return frequency map of all elements.

**Input:** `["a", "b", "a", "c", "b", "a"]`
**Output:** `{ a: 3, b: 2, c: 1 }`

---

### A-22 · Find Pair with Given Sum

**Difficulty:** Easy–Medium | **Pattern:** HashMap / Two Pointers | **Asked:** 2024, 2025

**Problem:**
Find if any two elements sum to target. Return the pair.

**Input:** `[1, 4, 45, 6, 10, 8], target=16`
**Output:** `[6, 10]`

---

### A-23 · Sort Array of 0s, 1s and 2s (Dutch National Flag) ⭐

**Difficulty:** Medium | **Pattern:** Three Pointers | **Asked:** 2025, 2026

**Problem:**
Sort array containing only 0s, 1s, and 2s WITHOUT counting sort.

**Input:** `[0, 1, 2, 1, 0, 2, 1, 0]`
**Output:** `[0, 0, 0, 1, 1, 1, 2, 2]`

**Pattern:** Three pointers — low, mid, high.

---

### A-24 · Find Subarray with Given Sum

**Difficulty:** Medium | **Pattern:** Sliding Window / Prefix Sum | **Asked:** 2024, 2025

**Problem:**
Find a contiguous subarray that sums to target.

**Input:** `[1, 4, 20, 3, 10, 5], target=33`
**Output:** `[20, 3, 10]`

---

### A-25 · Matrix Transpose

**Difficulty:** Medium | **Pattern:** Matrix Traversal | **Asked:** 2024, 2025

**Problem:**
Transpose a matrix (rows become columns).

**Input:**

```
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]
```

**Output:**

```
[[1, 4, 7],
 [2, 5, 8],
 [3, 6, 9]]
```

---

### A-26 · Matrix Rotate 90 Degrees

**Difficulty:** Medium | **Pattern:** Matrix Traversal / In-place Manipulation | **Asked:** 2025, 2026

**Problem:**
Rotate matrix 90 degrees clockwise.

**Input:**

```
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]
```

**Output:**

```
[[7, 4, 1],
 [8, 5, 2],
 [9, 6, 3]]
```

---

### A-27 · Leaders in an Array

**Difficulty:** Easy–Medium | **Pattern:** Reverse Traversal | **Asked:** 2024, 2025

**Problem:**
An element is a "leader" if it's greater than all elements to its right.
Last element is always a leader.

**Input:** `[16, 17, 4, 3, 5, 2]`
**Output:** `[17, 5, 2]`

---

### A-28 · Best Time to Buy and Sell Stock ⭐

**Difficulty:** Easy–Medium | **Pattern:** Greedy / Sliding Window | **Asked:** 2024, 2025, 2026

**Problem:**
Find maximum profit from one buy and one sell. Buy before sell.

**Input:** `[7, 1, 5, 3, 6, 4]`
**Output:** `5` (buy at 1, sell at 6)

**Input:** `[7, 6, 4, 3, 1]`
**Output:** `0` (no profit possible)

---

### A-29 · Sequential Groups of Exactly N Items ⚠️

**Difficulty:** Medium | **Pattern:** Array Chunking | **Asked:** 2025 — YOU WERE ASKED THIS

**Problem:**
From an array, return groups of exactly N consecutive items.

**Input:** `[1, 2, 3, 4, 5, 6, 7, 8, 9], n=3`
**Output:** `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`

**Input:** `[1, 2, 3, 4, 5, 6, 7], n=3`
**Output:** `[[1, 2, 3], [4, 5, 6]]` ← [7] dropped (incomplete group)

---

### A-30 · Trapping Rainwater ⭐

**Difficulty:** Hard | **Pattern:** Two Pointers / Dynamic Programming | **Asked:** 2025, 2026

**Problem:**
Given heights, find total water that can be trapped after rain.

**Input:** `[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]`
**Output:** `6`

**Pattern:** For each bar, water = `min(maxLeft, maxRight) - height[i]`

---

## 4. Object Problems

---

### O-01 · Deep Clone an Object

**Difficulty:** Medium | **Asked:** Every year

**Problem:**
Deep copy a nested object. THREE approaches: `structuredClone`, `JSON parse/stringify`, recursive.
Know limitations of each.

**Input:** `{ a: 1, b: { c: 2, d: [3, 4] } }`
**Output:** Deep copy — modifying output must NOT affect input.

---

### O-02 · Merge Two Objects

**Difficulty:** Easy | **Asked:** 2023, 2024

**Problem:**
Merge two objects. If same key exists, second object wins.

**Input:** `{ a: 1, b: 2 }, { b: 3, c: 4 }`
**Output:** `{ a: 1, b: 3, c: 4 }`

---

### O-03 · Flatten Nested Object ⭐

**Difficulty:** Medium | **Asked:** 2024, 2025, 2026

**Problem:**
Flatten nested object with dot notation keys.

**Input:**

```js
{ a: 1, b: { c: 2, d: { e: 3 } } }
```

**Output:**

```js
{ "a": 1, "b.c": 2, "b.d.e": 3 }
```

**Pattern:** Recursion — pass prefix string.

---

### O-04 · Unflatten Object

**Difficulty:** Medium | **Asked:** 2025, 2026

**Problem:**
Reverse of flatten — reconstruct nested from dot notation.

**Input:** `{ "a": 1, "b.c": 2, "b.d.e": 3 }`
**Output:** `{ a: 1, b: { c: 2, d: { e: 3 } } }`

---

### O-05 · Deep Equality Check

**Difficulty:** Medium | **Asked:** 2024, 2025

**Problem:**
Check if two objects are deeply equal. No `JSON.stringify` — implement recursively.

**Input:** `{ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }`
**Output:** `true`

**Input:** `{ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }`
**Output:** `false`

---

### O-06 · Group Array of Objects by Key ⭐

**Difficulty:** Easy–Medium | **Asked:** 2024, 2025, 2026

**Problem:**
Group array of objects by a given property.

**Input:**

```js
[
  { name: "Alice", dept: "Engineering" },
  { name: "Bob", dept: "Marketing" },
  { name: "Carol", dept: "Engineering" },
];
groupBy("dept");
```

**Output:**

```js
{
  Engineering: [{ name: "Alice" }, { name: "Carol" }],
  Marketing:   [{ name: "Bob" }]
}
```

---

### O-07 · Invert Key-Value Pairs

**Difficulty:** Easy | **Asked:** 2023, 2024

**Problem:**
Swap keys and values in an object.

**Input:** `{ a: "1", b: "2", c: "3" }`
**Output:** `{ "1": "a", "2": "b", "3": "c" }`

---

### O-08 · Remove Falsy Values from Object

**Difficulty:** Easy | **Asked:** 2024, 2025

**Problem:**
Remove keys where value is falsy (null, undefined, 0, "", false).

**Input:** `{ a: 1, b: null, c: "", d: false, e: 5 }`
**Output:** `{ a: 1, e: 5 }`

---

### O-09 · Pick Keys from Object

**Difficulty:** Easy | **Asked:** 2024, 2025

**Problem:**
Return new object with only specified keys. Like Lodash `_.pick`.

**Input:** `{ a: 1, b: 2, c: 3, d: 4 }, ["a", "c"]`
**Output:** `{ a: 1, c: 3 }`

---

### O-10 · Omit Keys from Object

**Difficulty:** Easy | **Asked:** 2024, 2025

**Problem:**
Return new object WITHOUT specified keys. Like Lodash `_.omit`.

**Input:** `{ a: 1, b: 2, c: 3, d: 4 }, ["b", "d"]`
**Output:** `{ a: 1, c: 3 }`

---

### O-11 · Count Properties in Nested Object

**Difficulty:** Medium | **Asked:** 2024, 2025

**Problem:**
Count total number of key-value pairs at all levels.

**Input:** `{ a: 1, b: { c: 2, d: { e: 3 } } }`
**Output:** `5` (a, b, c, d, e)

Wait — count only leaf keys? Interviewer may specify. Clarify first.

---

### O-12 · Get Value by Dot Path ⭐

**Difficulty:** Medium | **Asked:** 2025, 2026

**Problem:**
Access nested object value using dot notation string path.
Like `_.get` from Lodash.

**Input:** `{ a: { b: { c: 42 } } }, "a.b.c"`
**Output:** `42`

**Input:** `{ a: { b: 1 } }, "a.b.x"`
**Output:** `undefined`

---

### O-13 · Set Value by Dot Path

**Difficulty:** Medium–Hard | **Asked:** 2025, 2026

**Problem:**
Set a value in nested object using dot notation path string.

**Input:** `{ a: { b: {} } }, "a.b.c", 42`
**Output:** `{ a: { b: { c: 42 } } }`

---

### O-14 · Frequency of Array of Objects Key Values

**Difficulty:** Medium | **Asked:** 2024, 2025

**Problem:**
Count frequency of a specific key's values across array of objects.

**Input:**

```js
[
  { status: "active" },
  { status: "inactive" },
  { status: "active" },
  { status: "active" },
];
frequencyOf("status");
```

**Output:** `{ active: 3, inactive: 1 }`

---

### O-15 · Convert Flat Array to Tree Structure ⭐

**Difficulty:** Hard | **Asked:** 2025, 2026

**Problem:**
Convert flat array with `id` and `parentId` into nested tree.

**Input:**

```js
[
  { id: 1, name: "Root", parentId: null },
  { id: 2, name: "Child1", parentId: 1 },
  { id: 3, name: "Child2", parentId: 1 },
  { id: 4, name: "Grandchild", parentId: 2 },
];
```

**Output:**

```js
{
  id: 1, name: "Root", children: [
    { id: 2, name: "Child1", children: [
      { id: 4, name: "Grandchild", children: [] }
    ]},
    { id: 3, name: "Child2", children: [] }
  ]
}
```

---

## 5. Functions / Closures / JS Utility

---

### F-01 · Memoize a Function ⭐

**Difficulty:** Medium | **Asked:** 2024, 2025, 2026

**Problem:**
Wrap a function so repeated calls with same args use cached result.

**Input:**

```js
const memoAdd = memoize((a, b) => a + b);
memoAdd(2, 3); // computes → 5
memoAdd(2, 3); // returns from cache → 5
```

---

### F-02 · Curry a Function ⭐

**Difficulty:** Medium | **Asked:** 2024, 2025, 2026

**Problem:**
Transform function of N args into chain of N single-arg functions.

**Input:**

```js
const add = curry((a, b, c) => a + b + c);
add(1)(2)(3); // → 6
add(1, 2)(3); // → 6
add(1)(2, 3); // → 6
```

---

### F-03 · Compose Functions

**Difficulty:** Medium | **Asked:** 2024, 2025

**Problem:**
`compose(f, g, h)(x)` = `f(g(h(x)))` — right to left execution.

**Input:**

```js
const double = (x) => x * 2;
const addOne = (x) => x + 1;
const square = (x) => x * x;

const transform = compose(double, addOne, square);
transform(3); // square(3)=9 → addOne(9)=10 → double(10)=20
```

**Output:** `20`

---

### F-04 · Pipe Functions

**Difficulty:** Medium | **Asked:** 2024, 2025

**Problem:**
Like compose but LEFT to right.
`pipe(f, g, h)(x)` = `h(g(f(x)))`

**Input:** Same functions as above

```js
pipe(square, addOne, double)(3);
// square(3)=9 → addOne(9)=10 → double(10)=20
```

**Output:** `20`

---

### F-05 · Debounce ⭐

**Difficulty:** Medium | **Asked:** 2024, 2025, 2026

**Problem:**
Return debounced version of function. Delays execution until after `wait` ms
of no calls. Used for search input, resize handlers.

**Input:**

```js
const debouncedSearch = debounce(fetchResults, 300);
// User types rapidly — fetchResults fires only 300ms after they stop
```

---

### F-06 · Throttle ⭐

**Difficulty:** Medium | **Asked:** 2024, 2025, 2026

**Problem:**
Return throttled version of function. Ensures it runs at most once per `wait` ms.
Used for scroll handlers, button clicks.

**Difference from debounce:**

- Debounce: waits for silence, then fires ONCE
- Throttle: fires at regular intervals no matter what

---

### F-07 · Once Function

**Difficulty:** Easy–Medium | **Asked:** 2024, 2025

**Problem:**
Return a function that can only be called ONCE. Subsequent calls return first result.

**Input:**

```js
const init = once(() => console.log("initialized!"));
init(); // "initialized!"
init(); // nothing
init(); // nothing
```

---

### F-08 · Partial Application

**Difficulty:** Medium | **Asked:** 2024, 2025

**Problem:**
Pre-fill some arguments of a function, return new function for rest.

**Input:**

```js
function multiply(a, b, c) {
  return a * b * c;
}
const double = partial(multiply, 2);
double(3, 4); // 2 * 3 * 4 = 24
```

---

### F-09 · Function Chaining

**Difficulty:** Medium | **Asked:** 2024, 2025

**Problem:**
Implement chainable calculator: `.add().subtract().multiply().result()`

**Input:**

```js
calculator(10).add(5).subtract(3).multiply(2).result();
```

**Output:** `24`

**Trick:** Each method returns `this`.

---

### F-10 · Implement `bind` Polyfill

**Difficulty:** Medium | **Asked:** 2024, 2025, 2026

**Problem:**
Implement `Function.prototype.myBind`.

**Input:**

```js
function greet(greeting, name) {
  return `${greeting}, ${name}! I am ${this.role}`;
}
const user = { role: "Admin" };
const sayHello = greet.myBind(user, "Hello");
sayHello("Kaushik"); // "Hello, Kaushik! I am Admin"
```

---

### F-11 · Implement `call` Polyfill

**Difficulty:** Medium | **Asked:** 2024, 2025, 2026

**Problem:**
Implement `Function.prototype.myCall`.
Temporarily set `this`, invoke, delete.

**Input:**

```js
function sayName() {
  return this.name;
}
const obj = { name: "Kaushik" };
sayName.myCall(obj); // "Kaushik"
```

---

### F-12 · Implement `apply` Polyfill

**Difficulty:** Medium | **Asked:** 2024, 2025

**Problem:**
Like `call` but args passed as array.

**Input:**

```js
function sum(a, b, c) {
  return a + b + c;
}
sum.myApply(null, [1, 2, 3]); // 6
```

---

### F-13 · Implement Event Emitter

**Difficulty:** Medium–Hard | **Asked:** 2025, 2026

**Problem:**
Implement a simple EventEmitter class with `on`, `off`, `emit`.

**Input:**

```js
const emitter = new EventEmitter();
emitter.on("click", handler);
emitter.emit("click", data); // calls handler with data
emitter.off("click", handler); // removes handler
```

---

### F-14 · Retry Promise N Times

**Difficulty:** Medium | **Asked:** 2025, 2026

**Problem:**
Retry a failing promise up to N times before rejecting.

**Input:**

```js
retryPromise(fetchData, 3);
// tries fetchData — if fails, retries up to 3 times
```

---

### F-15 · Flatten Function Arguments

**Difficulty:** Easy–Medium | **Asked:** 2024, 2025

**Problem:**
Function that accepts any combination of nested arrays as args and sums them all.

**Input:** `sum(1, [2, [3, [4]]], 5)`
**Output:** `15`

---

## 6. Patterns / Sequence Logic

---

### P-01 · FizzBuzz

**Difficulty:** Easy | **Asked:** Every year (warm-up)

**Problem:**
Print 1 to n. Multiples of 3 → "Fizz". Multiples of 5 → "Buzz". Both → "FizzBuzz".

**Input:** `15`
**Output:** `1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz`

---

### P-02 · Print Star Pyramid

**Difficulty:** Easy | **Asked:** 2023, 2024

**Problem:**
Print right-aligned star pyramid.

**Input:** `4`
**Output:**

```
*
**
***
****
```

---

### P-03 · Print Diamond Pattern

**Difficulty:** Medium | **Asked:** 2024

**Problem:**
Print diamond of stars.

**Input:** `5`
**Output:**

```
  *
 ***
*****
 ***
  *
```

---

### P-04 · Pascal's Triangle

**Difficulty:** Medium | **Asked:** 2024, 2025

**Problem:**
Generate Pascal's triangle with `n` rows.
Each row: `[1]`, then sum of adjacent above, `[1]`.

**Input:** `5`
**Output:**

```
[1]
[1, 1]
[1, 2, 1]
[1, 3, 3, 1]
[1, 4, 6, 4, 1]
```

---

### P-05 · Multiplication Table

**Difficulty:** Easy | **Asked:** 2023

**Problem:**
Print multiplication table for number `n` up to 10.

**Input:** `7`
**Output:** `7x1=7, 7x2=14 ... 7x10=70`

---

### P-06 · Sum of Series

**Difficulty:** Easy | **Asked:** 2023, 2024

**Problem:**
Find sum of series: `1 + 1/2 + 1/3 + ... + 1/n`

**Input:** `5`
**Output:** `2.283` (1 + 0.5 + 0.33 + 0.25 + 0.2)

---

### P-07 · Spiral Matrix

**Difficulty:** Hard | **Asked:** 2025, 2026

**Problem:**
Return elements of matrix in spiral order.

**Input:**

```
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]
```

**Output:** `[1, 2, 3, 6, 9, 8, 7, 4, 5]`

---

### P-08 · Number to Words

**Difficulty:** Medium–Hard | **Asked:** 2024, 2025

**Problem:**
Convert integer to English words.

**Input:** `1234`
**Output:** `"One Thousand Two Hundred Thirty Four"`

**Input:** `1000000`
**Output:** `"One Million"`

---

### P-09 · Clock Angle

**Difficulty:** Medium | **Asked:** 2024, 2025

**Problem:**
Find angle between hour and minute hands of a clock.

**Input:** `3:30`
**Output:** `75 degrees`

---

### P-10 · Generate All Subsets (Power Set)

**Difficulty:** Hard | **Asked:** 2025, 2026

**Problem:**
Generate all possible subsets of an array.

**Input:** `[1, 2, 3]`
**Output:** `[[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]`

---

### P-11 · Valid Sudoku (Row/Col/Box Check)

**Difficulty:** Hard | **Asked:** 2025, 2026

**Problem:**
Check if a 9x9 Sudoku board is valid (no repeats in any row, col, or 3x3 box).

---

### P-12 · Staircase Problem (Count Ways)

**Difficulty:** Medium | **Asked:** 2024, 2025

**Problem:**
Count ways to climb n stairs taking 1 or 2 steps at a time.

**Input:** `4`
**Output:** `5` (1+1+1+1, 2+1+1, 1+2+1, 1+1+2, 2+2)

**Pattern:** Dynamic programming (like Fibonacci)

---

### P-13 · Coin Change (Minimum Coins)

**Difficulty:** Medium | **Asked:** 2025, 2026

**Problem:**
Find minimum number of coins to make `amount`.

**Input:** `coins=[1,5,10,25], amount=36`
**Output:** `3` (25 + 10 + 1)

---

### P-14 · Longest Increasing Subsequence

**Difficulty:** Hard | **Asked:** 2025, 2026

**Problem:**
Find length of longest strictly increasing subsequence.

**Input:** `[10, 9, 2, 5, 3, 7, 101, 18]`
**Output:** `4` ([2, 3, 7, 101])

---

### P-15 · Generate Combinations

**Difficulty:** Hard | **Asked:** 2025, 2026

**Problem:**
Generate all combinations of k elements from array of n.

**Input:** `[1, 2, 3, 4], k=2`
**Output:** `[[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]`

---

## 7. Frontend-Specific Logic

---

### FE-01 · Implement `_.get` (Safe Property Access)

**Difficulty:** Medium | **Asked:** 2024, 2025, 2026

**Problem:**
Safely access deeply nested object property. Return default if not found.

**Input:** `get(obj, "a.b.c.d", "default")`
**Output:** Value at path or `"default"` if path doesn't exist.

---

### FE-02 · Deep Diff Two Objects ⭐

**Difficulty:** Hard | **Asked:** 2025, 2026

**Problem:**
Return what changed between two objects (for React state comparison, undo/redo).

**Input:**

```js
{ a: 1, b: { c: 2, d: 3 } }
{ a: 1, b: { c: 99, d: 3 } }
```

**Output:** `{ b: { c: { from: 2, to: 99 } } }`

---

### FE-03 · Implement a Simple Promise from Scratch

**Difficulty:** Hard | **Asked:** 2025, 2026

**Problem:**
Build a basic `MyPromise` class with `.then()`, `.catch()`, `.finally()`.
Supports resolve, reject, chaining.

---

### FE-04 · Build a Pub/Sub System

**Difficulty:** Medium | **Asked:** 2025, 2026

**Problem:**
Implement publish/subscribe pattern. Multiple subscribers per event.

**Input:**

```js
const pubsub = new PubSub();
pubsub.subscribe("news", handler1);
pubsub.subscribe("news", handler2);
pubsub.publish("news", { headline: "React 20 Released!" });
// both handler1 and handler2 called
```

---

### FE-05 · Implement Observable/Reactive Value

**Difficulty:** Hard | **Asked:** 2025, 2026

**Problem:**
Create reactive variable. Whenever value changes, notify all listeners.
(Core concept behind Vue's reactivity, Zustand, MobX)

**Input:**

```js
const name = reactive("Kaushik");
name.subscribe((val) => console.log("Changed:", val));
name.set("KD"); // logs: "Changed: KD"
```

---

### FE-06 · Implement `JSON.stringify` from Scratch

**Difficulty:** Hard | **Asked:** 2025, 2026

**Problem:**
Build `myStringify` that converts JS value to JSON string.
Handle: strings, numbers, booleans, null, arrays, objects. Skip: functions, undefined.

**Input:** `{ a: 1, b: [2, 3], c: "hello" }`
**Output:** `'{"a":1,"b":[2,3],"c":"hello"}'`

---

### FE-07 · Flatten Deeply Nested Menu/Tree

**Difficulty:** Medium | **Asked:** 2025, 2026

**Problem:**
Common in frontend — flatten sidebar menu or file tree to flat list.

**Input:**

```js
[
  { name: "Home", children: [] },
  {
    name: "Products",
    children: [
      { name: "Electronics", children: [{ name: "Phones", children: [] }] },
    ],
  },
];
```

**Output:** `["Home", "Products", "Electronics", "Phones"]`

---

### FE-08 · Implement `localStorage` with Expiry

**Difficulty:** Medium | **Asked:** 2025, 2026

**Problem:**
Wrap `localStorage` with TTL (time-to-live) support.

**Input:**

```js
storage.set("token", "abc123", 3600); // expires in 1hr
storage.get("token"); // "abc123" if not expired, null if expired
```

---

### FE-09 · Rate Limiter

**Difficulty:** Medium | **Asked:** 2025, 2026

**Problem:**
Allow function to be called at most `n` times per `interval` ms.
Beyond that → queue or reject.

**Input:**

```js
const limited = rateLimit(fetchAPI, 3, 1000);
// max 3 calls per 1 second
```

---

### FE-10 · Implement Virtual DOM Diffing (Simple)

**Difficulty:** Hard | **Asked:** 2026

**Problem:**
Given two virtual DOM trees (plain objects), compute the diff — what changed, what's new, what's removed.

**Input:**

```js
const oldTree = { tag: "div", props: { id: "app" }, children: ["Hello"] };
const newTree = { tag: "div", props: { id: "app" }, children: ["World"] };
```

**Output:** `[{ type: "TEXT_CHANGE", from: "Hello", to: "World" }]`

---

## Quick Reference — Problem Patterns

| Pattern            | Problems It Solves                                              |
| ------------------ | --------------------------------------------------------------- |
| **Frequency Map**  | Duplicates, anagrams, first non-repeat, most frequent           |
| **Two Pointer**    | Palindrome, two sum sorted, reverse, merge sorted arrays, 3-sum |
| **Sliding Window** | Longest substring, max subarray, subarray with sum              |
| **Stack**          | Valid parentheses, decode string, next greater element          |
| **Recursion**      | Flatten, permutations, power set, tree traversal                |
| **Hash Map**       | Two sum, group anagrams, frequency, memoize                     |
| **Kadane's**       | Max subarray sum                                                |
| **Dutch Flag**     | Sort 0s 1s 2s                                                   |
| **Prefix Sum**     | Subarray sum queries                                            |

---

## How to Practice

1. Read problem. Close this file.
2. Set 10-minute timer.
3. Write solution.
4. Paste here → get reviewed.
5. Move on.

No looking at solutions. Speed is a skill, not a talent. Build it by repetition.

---

_Total: 130 problems · Categories: 7 · Source: 2023–2026 interview reports_
_⭐ = Very frequently asked | ⚠️ = You were specifically asked this_
