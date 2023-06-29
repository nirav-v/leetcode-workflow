/**
 * @param {Function[]} functions
 * @return {Function}
 */

// [x => x + 1, x => x * x, x => 2 * x]

var compose = function(functions) {

	return function(x) {
        let prevResult = x; //there will be no prevResult on 1st function call so it should use the original value of x
        if (functions.length === 0) return x;
        for (let i = functions.length -1; i >= 0; i--){
        // execute first callback passed to outer function on x, store result 
        // call each subsequent callback on previous result
            prevResult = functions[i](prevResult);
        }
        return prevResult;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
