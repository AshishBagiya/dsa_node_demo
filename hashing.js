// HASHING – MOST IMPORTANT CONCEPT 🔥
// Problem: Find First Repeating Element
// Thought Process

// Use Map

// Store frequency

// First element with freq > 1

function firstRepeating(arr) {
    const map = new Map();
  
    for (let num of arr) {
      map.set(num, (map.get(num) || 0) + 1);
    }
  
    for (let num of arr) {
      if (map.get(num) > 1) return num;
    }
  
    return -1;
  }
  
  console.log(firstRepeating([1, 2, 3, 2, 4]));
  