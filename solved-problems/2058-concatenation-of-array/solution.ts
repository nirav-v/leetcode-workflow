function getConcatenation(nums: number[]): number[] {
    const initialLength = nums.length;
    const result = new Array(initialLength * 2)

    for (let i = 0; i < initialLength; i++){
        result[i] = nums[i]
        result[i + initialLength] = nums[i]
    }

    return result;
};
