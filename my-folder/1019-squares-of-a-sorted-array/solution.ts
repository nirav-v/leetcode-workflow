function sortedSquares(nums: number[]): number[] {
    
    let l = 0;
    let r = nums.length - 1;

    let res = new Array(nums.length);
    let resIndex = res.length - 1

// [-4,-1,0,3,10]
// [        16,100]
    // compare abs val of both nums 
    while (l <= r){

        if (Math.abs(nums[l]) > Math.abs(nums[r])){
            res[resIndex] = nums[l] **2;
            l++;
        } else {
            res[resIndex] = nums[r] ** 2;
            r--;
        }

        resIndex--;

    }

    return res;
};



