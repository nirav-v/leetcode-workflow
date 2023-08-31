/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

// use sort method with compare fn comparing the results of fn(a) with fn(b)

var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};
