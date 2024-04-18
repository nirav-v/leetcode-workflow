function lengthOfLongestSubstring(s: string): number {
    let l = 0;
    const duplicates = new Set();

    let result = 0;

    for (let r = 0; r < s.length; r++){
        while (duplicates.has(s[r])){
            duplicates.delete(s[l])
            l++
        }
        
        duplicates.add(s[r])
        result = Math.max(result, r - l + 1)

    }

    return result
};
