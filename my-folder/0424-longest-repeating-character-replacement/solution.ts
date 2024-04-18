function characterReplacement(s: string, k: number): number {
    let l = 0
    const charCounts = {}

    let longest = 0

    for (let r = 0; r < s.length; r++) {

        if (charCounts[s[r]]) charCounts[s[r]] += 1
        else charCounts[s[r]] = 1

        let mostFrequent = getMostFrequent(charCounts)

        while (((r - l + 1) - mostFrequent) > k) {
            charCounts[s[l]] -= 1
            l++
            mostFrequent = getMostFrequent(charCounts)
        }

        longest = Math.max(longest, r - l + 1)
    }

    return longest
};

function getMostFrequent(charCounts) {
    let mostFrequent = 0
    for (const char of Object.keys(charCounts)) {
        mostFrequent = Math.max(mostFrequent, charCounts[char])
    }
    return mostFrequent
}
