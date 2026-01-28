// ARRAYS – REVERSE ARRAY (VERY COMMON)
// Problem

// Reverse an array in-place.

// Thought Process

// Use two pointers

// Swap

// No extra array

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  
    return arr;
  }
  
  console.log(reverseArray([7, 6, 8, 12, 15]));
  