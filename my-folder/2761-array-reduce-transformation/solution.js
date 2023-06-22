/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

// nums = [1,2,3,4]
//  fn = function sum(accum, curr) { return accum + curr; }
// i: 1
// accum: ;



var reduce = function(nums, fn, init) {
    if (nums.length === 0) return init;
    // for each number in arr, invoke the callback fn passing it arguments of the current accumlator value and the the current number
    let accumulator;

    for (let i = 0; i < nums.length; i++){
        if (i === 0) {
            accumulator = fn(init, nums[0])
        } else {
            accumulator = fn(accumulator, nums[i]);
        }
    }
    return accumulator;
}
