function longestConsecutive(nums: number[]): number {
    // form a set of all nums in the array
    // check if each num is the start of a consecutive sequence if the set does not contain its preceding number
    let set = new Set(nums);

    let longest = 0;

    for (let num of nums){
        if (!set.has(num - 1)){
            let length = 1
            while (set.has(num + 1)){
                length++;
                num++;
            }
            longest = (Math.max(length, longest))
        }
    }
    return longest;

};
