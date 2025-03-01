/**
 * @param {string} s
 * @return {number}
 */


// initiliaze a result num
// Iterate over each symbol in string, look up the integer value in object
// if written largest to smallest symbol left to right ('XII')
// add it to result
// if smaller symbol before larger ('IV') 
// convert the integer value of small symbol to negative before adding to result

var romanToInt = function(s) {
    // hash table storing roman symbols as keys and integers as values
    const romanSymbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let result = 0;

    for (let i = 0; i < s.length; i++){
        if (romanSymbols[s[i]] < romanSymbols[s[i + 1]]){
            result = result - romanSymbols[s[i]];
        }
        else {
            result = result + romanSymbols[s[i]];
        }
    }

    return result;
};
