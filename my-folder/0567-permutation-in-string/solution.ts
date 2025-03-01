function checkInclusion(s1: string, s2: string): boolean {
    // permutation if: same length, same counts of each char
    const s1Counts = new Map()
    const windowCounts = new Map()

    for (const char of s1){
        if (s1Counts.get(char)) s1Counts.set(char, s1Counts.get(char) + 1)
        else s1Counts.set(char, 1)
    }

    let l = 0

    for (let r = 0; r < s2.length; r++){
        // resize window from left if needed
        if ((r - l + 1) > s1.length){
            windowCounts.set(s2[l], windowCounts.get(s2[l]) - 1)
            l++
        }

        // add new right char to windowCounts
        if (windowCounts.get(s2[r])) windowCounts.set(s2[r], windowCounts.get(s2[r]) + 1)
        else windowCounts.set(s2[r], 1)

        // check if all chars match in count between s1 and s2
        let matches = 0
        windowCounts.forEach((value, key)=> {
            if (windowCounts.get(key) === s1Counts.get(key)) matches++
        })

        if (matches === s1Counts.size) return true
    }

    return false

};
