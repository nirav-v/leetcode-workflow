function lengthOfLongestSubstring(s: string): number {
    let l = 0
    let r = 0
    let longest = 0
    let duplicates = new Set()

    while (r < s.length) {
        while (duplicates.has(s[r])) {
            duplicates.delete(s[l])
            l++
        }
        
        longest = Math.max(longest, r - l + 1)
        duplicates.add(s[r])
        r++
    }

    return longest
};
