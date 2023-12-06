/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    // -------
      // for (let i = 0; i < k; i++){
      //     const removed = nums.pop();
      //     nums.unshift(removed)
      // }
    // ----------

    // swap first num with last num
    // swap last num with prev num 
    let i = 0;
    while (i < k){
      let last = nums[nums.length -1];
      nums.unshift(last)
      nums.pop();
      i++;
    }

};

// [1, 2]
// [2, 1]
// [1, 2]
// 2, 1
