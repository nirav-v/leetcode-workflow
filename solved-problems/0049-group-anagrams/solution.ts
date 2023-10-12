function groupAnagrams(strs: string[]): string[][] {
    const result = [];

    // create a hash map where each unique key has a value of an array with all grouped anagrams

    // key: the string with letters sroted, all anagrams will be equal after sorting
    // value: array of all anagrams matching that key

    const map = {};

    for (const str of strs){
        let sorted = str.split("").sort().join("");
        if (map[sorted]) map[sorted].push(str);
        else map[sorted] = [str];
    }

    for (const key of Object.keys(map)){
        result.push(map[key]);
    }

    return result;
};
