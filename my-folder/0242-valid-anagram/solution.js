/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {

    // account for strings being the same length
    if (s.length !== t.length){
        return false;
    }

    // initialize two objects to store count of letters in each string 
    // so they can be compared for eqaul counts of each letter 
    let sObj = {}
    let tObj = {}

    function createCountObj(arr, obj){
        for (const char of arr){
        // if char is already a key in object, increment its value, else intialize the key to a value of 
            if (obj[char]){
                obj[char]++;
            } else {
                obj[char] = 1
            }
        }
    }

    // create objects from s and t arrays
    createCountObj(s, sObj);
    createCountObj(t, tObj);



    // loop over keys in s object, compare to keys in t object

    for (const key in sObj){
        if (sObj[key] !== tObj[key]){
            return false
        }
    }
    return true
};
