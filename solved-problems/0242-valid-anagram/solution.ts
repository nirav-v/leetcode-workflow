function isAnagram(s: string, t: string): boolean {
    // keep tack of every letter in s, and how many times it occurs
    const sChars = {}

    // cannot be anagrams if different lengths
    if (s.length !== t.length) return false;

    for (const char of s){
        if (!sChars[char]) sChars[char] = 1;
        else sChars[char]++;
    }

    for (const char of t){
        if (!sChars[char]) return false;
        else sChars[char]--;
    }

    return true;

};
