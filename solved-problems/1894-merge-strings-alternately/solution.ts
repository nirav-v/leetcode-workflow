function mergeAlternately(word1: string, word2: string): string {
    let i = 0
    let j = 0

    let result = ''

    // while still letters left in either word
    while ((i < word1.length) || j < word2.length){
        // verify the specfic word still has letters left before trying to add    
        if (i < word1.length){
            result +=word1[i]
            i++
        }
        if (j < word2.length){
            result+=word2[j];
            j++
        }
    }

    return result

};
