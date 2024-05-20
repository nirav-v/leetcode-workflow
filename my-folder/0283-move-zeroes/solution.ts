/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    // [3,1,0,0,12]
    let l = 0
    for (let r in nums){
        if (nums[r] !== 0){
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++
        } 
    }
};
