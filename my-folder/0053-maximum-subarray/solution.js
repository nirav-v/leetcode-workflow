/**
 * @param {number[]} nums
 * @return {number}
 */

// Given an integer array nums, 
// find the subarray with the largest sum, 
// and return its sum

// initialize variables for currentSum and largestSum
// iterate over nums, store value for prevSum before adding num to current sum
// if currentSum > prevSum, update maxSum to be currentSum
// return maxSum

var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum = currentSum
    // [-2,1,-3,4,-1,2,1,-5,4]
    for (let i = 1; i < nums.length; i++){
        // replace currentSum with current number if it is greater, otherwise continue adding nums
        if (nums[i] > (currentSum + nums[i]) ){
            currentSum = nums[i];
        } else{
            currentSum+=nums[i]
        }
        // assign maxSum to currentSum if it is greater
        if (maxSum < currentSum){
            maxSum = currentSum
        }

    }
    return maxSum
};
