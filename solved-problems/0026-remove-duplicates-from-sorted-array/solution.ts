function removeDuplicates(nums: number[]): number {
    
    let l = 1
   
    for (let r = 1; r < nums.length; r++){
        if (nums[r] !== nums[r -1]){ //tells us that we found a new unique value
            nums[l] = nums[r]
            l++
        }
    }

    return l

};


