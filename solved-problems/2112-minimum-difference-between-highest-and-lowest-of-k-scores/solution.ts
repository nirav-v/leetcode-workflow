function minimumDifference(nums: number[], k: number): number {
    if (k === 1) return 0;

    let minDiff = Infinity;

    nums = nums.sort((a,b) => a - b);

    let i = 0;
    let j = k - 1;

    while (j < nums.length) {

        let diff = nums[j] - nums[i]
  
        minDiff = Math.min(minDiff, diff)
        i++;
        j++
    }


    return minDiff
};

// [9,4,1,7]
