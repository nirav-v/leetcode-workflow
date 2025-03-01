/**
 * @param {number} n
 * @return {boolean}
 */

// 64 6
// 32 5
// 16 4
// 8  3
// 4  2
// 2  1

var isPowerOfTwo = function(n) {
    // cannot get zero using exponents
    if (n === 0) return false;
    // base 2 logarithim of n - whatever you would power 2 to, to get n
    let exponent = Math.log2(n);
    // check if it is a whole number
    if (Math.floor(exponent) === exponent) {
     return true;   
    }
    else return false;
};
