/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    // keep track of calls to inner function so that we do not increment n on the first call
    let calls = 0;
    // inner function body is returned into global memory when outer is called. Maintains referecne to count variable
    return function() {
        calls++;
        if (calls === 1) return n;
        n = n + 1; // increment count during each invocation 
        return n;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
