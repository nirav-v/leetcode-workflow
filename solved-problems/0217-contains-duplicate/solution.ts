function containsDuplicate(nums: number[]): boolean {
    const dups = new Set();
    for (const num of nums){
        if (dups.has(num)) return true;
        else dups.add(num);
    }
    return false
};
