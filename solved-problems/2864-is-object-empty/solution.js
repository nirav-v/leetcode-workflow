/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // Object.keys() runs faster than Object.entries() since it only has to access the keys and not look up the values
    if (Object.keys(obj).length < 1) return true;
    return false;
};
