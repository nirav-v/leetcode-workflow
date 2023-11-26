function threeSum(nums: number[]): number[][] {
// [-1,0,1,2,-1,-4]

    let obj = {...nums};

    const result = []
    // sort input array
    nums = nums.sort((a,b)=> a - b);

    // first num in outer loop, two pointers for next two nums in remainder of sorted array
    for (let i = 0; i < nums.length; i++){
        let l = i + 1;
        let r = nums.length - 1;
        
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        while (l < r){
            const sum = nums[i] + nums[l] + nums[r]
            if (sum < 0) {
                l+=1
            } else if (sum > 0){
                r-=1
            } else {
                result.push([nums[i] , nums[l] , nums[r]])
                l+=1;
                while (l < r && nums[l] === nums[l -1]){
                    l+=1;
                }
            }
        }
    }

    return result;

};

// [-4, -1, -1, 0, 1, 2]
//
