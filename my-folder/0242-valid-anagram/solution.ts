function isAnagram(strA: string, strB: string): boolean {
      if (strA.length !== strB.length) return false;

        // SLOW easy solution with built in methods (sort in alpha order and compare eqaulity)
        // if (strA.split('').sort().join('') === strB.split('').sort().join('')) return true;
        // else return false;


    function getCharCounts(str) {
        const counts = {};
        for (const char of str) {
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
        }
        return counts;
    }
    const strACounts = getCharCounts(strA);
    const strBCounts = getCharCounts(strB);

    for (const letter of Object.keys(strACounts)) {
        if (strACounts[letter] !== strBCounts[letter]) {
        return false;
        }
    }
    return true;
};
