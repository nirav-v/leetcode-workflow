/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let i = 0;
    let j = i;

    while (j < nums.length){
        if (nums[j]){
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp 
            i++
        }
        j++
    }

};

// [1,3,12,0,0]
