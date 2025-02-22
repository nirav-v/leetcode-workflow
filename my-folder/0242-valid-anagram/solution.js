/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if (s.length !== t.length) return false

    const sCounts = {}
    const tCounts = {}

    for (let i = 0; i < s.length; i++){
        const sLetter = s[i]
        const tLetter = t[i]
        
        if (!sCounts[sLetter]) sCounts[sLetter] = 1
        else sCounts[sLetter]++

        if (!tCounts[tLetter]) tCounts[tLetter] = 1
        else tCounts[tLetter]++
    }

    for (const letter of Object.keys(sCounts)){
        if (sCounts[letter] !== tCounts[letter]) return false
    }

    for (const letter of Object.keys(tCounts)){
        if (tCounts[letter] !== sCounts[letter]) return false
    }

    return true 
};
