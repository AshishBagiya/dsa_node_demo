// 🔥 Next Challenge (Sliding Window – VERY COMMON)
// Problem

// Find maximum sum of subarray of size k

// arr = [2,1,5,1,3,2], k = 3
// Output: 9

const arr = [2,1,5,1,3,2];

function maxSum(arr,size){
    let maxSum=0,windowSum=0;

    for(let i=0;i<size;i++){
        maxSum += arr[i];
    }

    windowSum = maxSum;
    for(let i=size;i<arr.length;i++){
        windowSum = windowSum - arr[i - size] + arr[i];
        maxSum = Math.max(windowSum,maxSum);
    }
    return maxSum;
}

console.log(maxSum(arr,3));