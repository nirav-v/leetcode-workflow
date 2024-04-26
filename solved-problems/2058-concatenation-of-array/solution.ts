function getConcatenation(nums: number[]): number[] {
    const nums2 = new Array(nums.length * 2)

    for (let i = 0; i < nums.length; i++){
        nums2[i] = nums[i]
        nums2[i + nums.length] = nums[i]
    }

    return nums2
};
