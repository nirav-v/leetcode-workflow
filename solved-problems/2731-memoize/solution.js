/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    
    const cache = {};
    
    return function(...args) {
        // either call fn or return the cahced value if it exists
       
        const cachedValue = cache[args];
        if (cachedValue !== undefined) return cachedValue;
        // call the function and store result in cache 
        let result = fn(...args);
        cache[args] = result;
        return result 
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
