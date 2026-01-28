// 1️⃣ ARRAYS – CORE FOUNDATION
// Problem 1: Find Maximum Element

// Question (interviewer style):
// “Given an array, find the maximum element.”

// Thought Process

// Traverse once

// Compare values

// Time: O(n)

// Space: O(1)

// Code
function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax([3, 7, 2, 9, 4])); // 9