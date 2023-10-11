

function containsDuplicate(nums: number[]): boolean {
    // brute force: for each element, loop over remaining elements and check for duplicates
    // O(n^2)
    // for (let i = 0; i < nums.length; i++){
    //     for (let j = i + 1; j < nums.length; j++){
    //         if (nums[i] === nums[j]) return true;
    //     }
    // }
    // return false;


    // O(n)
    // loop through, store each element in a Set, if an element is already in the set, return true

    let uniqueNums = new Set();
    for (const num of nums){
        if (uniqueNums.has(num)) return true;
        uniqueNums.add(num);
    }
    return false;
};
