function containsNearbyDuplicate(nums: number[], k: number): boolean {
    // [1,2,3,1]

    let l = 0

    let prevNums = new Set([nums[l]])

    for (let r = 1; r < nums.length; r++) {
        if (Math.abs(r - l) > k) {
            prevNums.delete(nums[l])
            l++
        }

        if (prevNums.has(nums[r])) return true

        prevNums.add(nums[r])

    }

    return false


};

// look for duplicates where the difference between their indeces is <= k
