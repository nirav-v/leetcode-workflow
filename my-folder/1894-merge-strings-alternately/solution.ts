function mergeAlternately(word1: string, word2: string): string {
    // pushing to array more effiecient than appending to string (recreates new string in memory every time)
    let result = []

    let i = 0
    let j = 0;

    // alternate adding on chars staring with word1
    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            result.push(word1[i]);
            i++
        }

        if (j < word2.length){
            result.push(word2[j]);
            j++
        }
    }

    return result.join("")
};

// "ab" "pqrs"
