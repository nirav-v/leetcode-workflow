/**
 * @param {Function[]} functions
 * @return {Function}
 */

// [x => x + 1, x => x * x, x => 2 * x]

var compose = function(functions) {

	return function(x) {
    
        if (functions.length === 0) return x;
        for (let i = functions.length -1; i >= 0; i--){
        // execute first callback passed to outer function on x, store result 
        // call each subsequent callback on previous result
            x = functions[i](x);
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
