function lengthOfLongestSubstring(s: string): number {
    let result = 0

    const repeats = new Set()

    let l = 0
    for (let r = 0; r < s.length; r++) {
        while (repeats.has(s[r])) {
            repeats.delete(s[l])
            l++
        }
        repeats.add(s[r])
        result = Math.max(result, r - l + 1)
    }

    return result
};
