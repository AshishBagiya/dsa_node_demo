// STRINGS – REVERSE STRING
// Problem

// Reverse a string.

function reverseString(str) {
    let chars = str.split('');
    let left = 0, right = chars.length - 1;
  
    while (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  
    return chars.join('');
  }
  
  console.log(reverseString("ashish"));