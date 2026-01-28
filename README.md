🧠 DSA PRACTICE PLAN (INTERVIEW-ORIENTED)

We’ll go in this exact order (this is industry-tested):

1️⃣ Arrays & Strings
2️⃣ Hashing (Map / Set)
3️⃣ Two Pointers
4️⃣ Sliding Window
5️⃣ Stack
6️⃣ Queue / Deque
7️⃣ Recursion
8️⃣ Linked List
9️⃣ Binary Search
🔟 Trees
1️⃣1️⃣ Graphs (basic)
1️⃣2️⃣ DP (only patterns)



1️⃣ Two Sum
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const rem = target - nums[i];
    if (map.has(rem)) return [map.get(rem), i];
    map.set(nums[i], i);
  }
}

2️⃣ Reverse Linked List
function reverseList(head) {
  let prev = null, curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

3️⃣ Valid Parentheses
function isValid(s) {
  const stack = [];
  const map = { ')': '(', ']': '[', '}': '{' };
  for (let ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') stack.push(ch);
    else if (stack.pop() !== map[ch]) return false;
  }
  return stack.length === 0;
}

4️⃣ Longest Substring Without Repeating
function lengthOfLongestSubstring(s) {
  let set = new Set(), left = 0, max = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left++]);
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}

5️⃣ Binary Search
function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] < target ? l = mid + 1 : r = mid - 1;
  }
  return -1;
}

6️⃣ Merge Two Sorted Lists
function mergeTwoLists(l1, l2) {
  let dummy = { next: null }, curr = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return dummy.next;
}

7️⃣ Palindrome Check
function isPalindrome(str) {
  let l = 0, r = str.length - 1;
  while (l < r) {
    if (str[l++] !== str[r--]) return false;
  }
  return true;
}

8️⃣ Maximum Subarray (Kadane’s Algorithm)
function maxSubArray(nums) {
  let max = nums[0], curr = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    max = Math.max(max, curr);
  }
  return max;
}

9️⃣ Sliding Window – Max Sum (Size K)
function maxSum(arr, k) {
  let sum = 0, max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k) sum -= arr[i - k];
    max = Math.max(max, sum);
  }
  return max;
}

🔟 Tree Traversal (Inorder)
function inorder(root) {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}

1️⃣1️⃣ DFS (Graph)
function dfs(node, graph, visited = new Set()) {
  if (visited.has(node)) return;
  visited.add(node);
  console.log(node);
  for (let nei of graph[node]) dfs(nei, graph, visited);
}

1️⃣2️⃣ BFS (Graph)
function bfs(start, graph) {
  const queue = [start];
  const visited = new Set([start]);
  while (queue.length) {
    let node = queue.shift();
    console.log(node);
    for (let nei of graph[node]) {
      if (!visited.has(nei)) {
        visited.add(nei);
        queue.push(nei);
      }
    }
  }
}

1️⃣3️⃣ Fibonacci (DP)
function fib(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

1️⃣4️⃣ Detect Cycle in Linked List
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

1️⃣5️⃣ Search in Rotated Sorted Array
function search(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;

    if (nums[l] <= nums[mid]) {
      target >= nums[l] && target < nums[mid]
        ? (r = mid - 1)
        : (l = mid + 1);
    } else {
      target > nums[mid] && target <= nums[r]
        ? (l = mid + 1)
        : (r = mid - 1);
    }
  }
  return -1;
}