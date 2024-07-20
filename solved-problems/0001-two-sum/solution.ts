function twoSum(nums: number[], target: number): number[] {
    let map = new Map()
    for (let i = 0; i < nums.length; i++){
        
        let desiredValue = target - nums[i];
        if (map.has(desiredValue)){
            return [i, map.get(desiredValue)]
        } 
        
        map.set(nums[i], i)
        
    }
};
