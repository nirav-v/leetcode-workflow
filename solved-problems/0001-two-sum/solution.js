/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// nums - array of integers [2, 7, 11, 15] sorted?
// target - integer 9

// return array of two indeces from nums array with values that sum to the target 

// brute force - compare each num to every other num using a nested loop O(n^2)

// better approach use an object to store indeces as keys and integers as values
// {
    // 0: 2,
    // 1: 7,
    // 2: 11
    // 3: 15
// }
// [2, 7, 11, 15]
// loop thorugh the array, check if each number has a complment in the object that sums to the target (return array with cuurent index in loop, and index from object), else insert that index and num into the object
var twoSum = function(nums, target) {
    // check for inputs
    // missing params, nums.length < 2, more than two params, target is not an int

    // store the number as property, index as value
    let obj = {};

    for (let i = 0; i < nums.length; i++){

    // if the target - nums[i] is in the object, return []
    let number = nums[i];
    let complement = target - number;
    if (complement in obj){
        return [obj[complement], i]
    } 
    else {
        obj[number] = i;
    }
    }

};
