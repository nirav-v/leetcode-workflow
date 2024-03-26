/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    
    let i =0
    let j = 1

    while (j < nums.length){
        if (nums[i] === 0){
            // make sure we move j up to a non-zero num
            while (nums[j] === 0) j++;
            // break early if j went out of bounds
            if (nums[j] === undefined) break
            // swap i and j nums
            let temp = nums[i];
            nums[i] = nums[j]
            nums[j] = temp
        }
        i++
        j++
    }
};

//    i j
// [1,0,0,3,12]

// [1,3,12,0,0]

