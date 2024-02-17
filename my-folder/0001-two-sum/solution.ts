function twoSum(nums: number[], target: number): number[] {
    let pastNums = {}
    for (let i = 0; i < nums.length; i++){
        
        const complement = target - nums[i];
        if (pastNums[complement] !== undefined){
            return [pastNums[complement.toString()], i]
        } else {
            pastNums[nums[i]] = i;
        }


    }
};
