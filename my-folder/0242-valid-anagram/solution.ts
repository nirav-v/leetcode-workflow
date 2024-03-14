function isAnagram(s: string, t: string): boolean {

    if (s.length !== t.length) return false;

    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const sCount = sMap.get(s[i])
        if (sCount) sMap.set(s[i], sCount + 1)
        else sMap.set(s[i], 1)

        const tCount = tMap.get(t[i])
        if (tCount) tMap.set(t[i], tCount + 1)
        else tMap.set(t[i], 1)
    }

    for (const letter of sMap.keys()){
        if (tMap.get(letter) !== sMap.get(letter)) return false;
    }
    
    return true;
};
