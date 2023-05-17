/**
 * @param {string} s
 * @return {number}
 */

// inputs: string of chars
// ouput: number of 3 char substring with no repeating characters

// xyzzaz
// "aababcabc"
// iterate over list adding the current char and the next two chars to a set
// if the length of the set is 3, that means they were all unique values and we increment count
// clear the set and move to next char


// "xyzzaz"
// "aababcabc"


var countGoodSubstrings = function(s) {
    let charSet = new Set();
    let count = 0;
    for (let i = 0; i < s.length; i++){

        charSet.add(s[i]).add(s[i+1]).add(s[i+2]);

        if (charSet.size === 3) count++;

        charSet.clear();

        if (i === s.length - 3){
            return count;
        }
    }

    return count;
};
