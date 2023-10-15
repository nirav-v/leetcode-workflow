function groupAnagrams(strs: string[]): string[][] {


    // create a hash map where each unique key has a value of an array with all grouped anagrams
    // cannot use a stringified map for the keys, because they will not be ordered; eg 'eat' and 'tea' will not have eqaul keys

    // option 1
    // key: the string with letters sorted, all anagrams will be equal after sorting SLOW to sort each string
    // value: array of all anagrams matching that key

    // option 2
    // key: array of 26 indeces, each corresponding to a lowercase letter in the anagram
    // for each char in an anagram, get its ascii value - 97, find the corresponing position in key array and + 1
    // value: all strings that match those same letters and counts

    // {
    //     [1, 0 , 1, 1]: ['abd', 'cda', 'bad']
    // }

   

    const map = {};

    for (const str of strs){
        // build key for each str containing counts of each char
        const key = new Array(26).fill(0);

        for (let i = 0; i < str.length; i++){ 
            const index = str.charCodeAt(i) - 97;
            key[index] += 1;
        }
        if (map[JSON.stringify(key)]) {
            map[JSON.stringify(key)].push(str) 
        } else {
            map[JSON.stringify(key)] = [str];
        }
    }

    return Object.values(map);
};
