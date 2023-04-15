/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// accepts an existing array and a callback function
// returns a new array of elemetns that evaluated to true when passed to callback fn

var filter = function(arr, fn) {
    // create newArray
    let newArray = [];
    // loop over array
    // perform callback for each array item
    for (let i = 0; i < arr.length; i++){
        if (fn(arr[i], i)) {
            newArray.push(arr[i])
        }
    }
    return newArray
};
