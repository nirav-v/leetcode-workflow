function characterReplacement(s: string, k: number): number {
    let res = 0;
    let i = 0;
    let counts = {}
    for (let j = 0; j < s.length; j++){
        let char = s[j]
        if (counts[char]) counts[char]++;
        else counts[char] = 1;
        
        const countValues: number[] = Object.values(counts);
        const mostFrequentCount = Math.max(...countValues);
        console.log(counts)
        while ((j - i + 1) - mostFrequentCount > k){
            counts[s[i]] -=1;
            i++;
        }

        res = Math.max(res, (j - i + 1));

    }

    return res;
// AABABBA
};
