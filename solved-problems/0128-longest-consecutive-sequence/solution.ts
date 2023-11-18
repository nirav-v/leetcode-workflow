function longestConsecutive(nums: number[]): number {

    let longest = 0;

    let numsSet = new Set(nums);

        for (let num of nums){
            // check if num is the start of a new sequence
            if (!numsSet.has(num - 1)){
                let currentLength = 1;
                while (numsSet.has(num + currentLength)){
                    // num = num + 1;
                    currentLength++;
                }
                longest = Math.max(currentLength, longest);
            }
        }

    return longest;

};
