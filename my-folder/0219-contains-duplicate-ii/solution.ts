function containsNearbyDuplicate(nums: number[], k: number): boolean {

    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) !== null && Math.abs(i - map.get(nums[i])) <= k) return true

        map.set(nums[i], i)
    }

    return false


};

// {1: 2, 0: 1}
// [1,0,1,1]

