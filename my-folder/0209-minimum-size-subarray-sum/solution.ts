function minSubArrayLen(target: number, nums: number[]): number {
    let minLength = Infinity;
    let sum = 0

    let l = 0
    for (let r = 0; r < nums.length; r++){

        sum+=nums[r];

        if (sum >= target){
            minLength = Math.min(minLength, r - l + 1)
        }

        while (sum >= target){
            minLength = Math.min(minLength, r - l + 1)
            sum-=nums[l]
            l++
        }
    }

    if (minLength < Infinity) return minLength
    else return 0


};
