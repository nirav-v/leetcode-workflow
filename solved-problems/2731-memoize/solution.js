/**
 * @param {Function} fn
 */



function memoize(fn) {
    // create a cache to store result for each arugment
    const cache = {};
    return function(...args) {
            // console.log(cache);
        // check the cache, if input is not there, caculate and store result in cache, return result
        if (cache[args] || cache[args] === 0) return cache[args];
        
        let result = fn(...args);
        cache[args] = result;
        return result;

    

        // if (args.length === 1){
        //     const result = fn(args[0])
        //     cache[args] = result;
        //     return result;
        // } else {
        //     const result = fn(args[0], args[1])
        //     cache[args] = result;
        //     return result;
        // }


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
