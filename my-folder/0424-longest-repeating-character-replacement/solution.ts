function characterReplacement(s: string, k: number): number {

    let longest = 0

    let charCounts = {}

    let l = 0
    let r = 1

    for (let r = 0; r < s.length; r++) {
        // add count to map
        if (charCounts[s[r]]) charCounts[s[r]] += 1
        else charCounts[s[r]] = 1

        // get most frequent char from window, subtract from window size, check if result is within allowed replacements
        let mostFreuqent = getMaxCharCount(charCounts)
        let windowSize = r - l + 1

        while (windowSize - mostFreuqent > k) {
            // decrement left char in map
            charCounts[s[l]] -= 1
            mostFreuqent = getMaxCharCount(charCounts)
            // shrink window
            l++
            windowSize = r - l + 1
        }
        longest = Math.max(longest, r - l + 1)

    }

    return longest
};

function getMaxCharCount(obj) {
    let maxCount = 0
    for (const key of Object.keys(obj)) {
        maxCount = Math.max(maxCount, obj[key])
    }
    return maxCount
}
