/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    // initialize counter only once in outer function
    let count = n - 1;
    // inner function body is returned into global memory when outer is called. Maintains referecne to count variable
    return function() {
        count = count + 1; // increment count during each invocation 
        return count;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
