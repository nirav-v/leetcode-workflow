/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */


// inputs: array of positive integers, target sum (positive integer);
// output: smallest length of any subarray summing to target sum or greater

// keep track of nums in my subarray and its length
// once a subarray = target or higher, store it as max length, start next subarray 


//      ji
// [1,4,4], 4 --> return 1
// maxLen: 1
// sum: 4



// start len as 0
// start i at index 0
// initialize sum to arr[i] 
// use a sliding window approach  
    // start j at index 1, 
    // sum = arr[i] + arr[j]

    // if sum <= target increment j, adding arr[j] to arr[i] 
    // if sum >= target, increment i, subtract first num from sum, maxLen=(maxLen, (j - i + 1))
    

//         
 

var minSubArrayLen = function(target, nums) {
    // checking lengths of 0 or 1
    if (nums.length === 0) return 0;

    if (nums.length === 1) {
        if (nums[0] > target){ 
            return 1
        } else {
            return 0
        }
    }

         if (nums[0] > target){ 
            return 1
        }

    let i = 0;
    let j = 1;
    let minLen = nums.length;
    let sum = nums[i] + nums[j]
    let maxSum = sum
//      i   j
// [2,3,1,2,4,3], 7 --> return 2
// minLen: 3
// sum: 7   
// 

    while (j < nums.length){
        if (sum >= target){
            minLen = Math.min(minLen, (j - i + 1));
            maxSum = Math.max(maxSum, sum)
            sum -= nums[i];
            i++;
        }
        if (sum < target){
            j++;
            sum+=nums[j]
        }
    }

    if (maxSum < target) return 0;
    return minLen;
};
