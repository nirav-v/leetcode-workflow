function twoSum(nums: number[], target: number): number[] {
   
    // map key - number, value - index
    const numsMap = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const complement = target - num
     
        // check that the map has the complement, if it does return our current num index and the complement index
        if (numsMap[complement.toString()] !== undefined) {
            return [i, numsMap[complement]]
        }

        // store num: index in our map
        numsMap[num] = i
    }

    // default, should never reach here assuming there is at least one valid combination in the array
    return [0, 0]

};
