function searchInsert(nums: number[], target: number): number {
    // check if current num is less than target and net num is greater than
    
    // cases where num is smaller larger than all nums in array
    if ( target <= nums[0]) return 0;
    if (target > nums[nums.length -1] ) return nums.length;

    for (let i = 0; i < nums.length; i++){

        if (nums[i] === target) return i;

        if (nums[i] < target && nums[i + 1] > target) return i + 1;
    }

};
