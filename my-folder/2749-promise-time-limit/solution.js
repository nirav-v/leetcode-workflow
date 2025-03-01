/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

// Can also use promise.race() method

var timeLimit = function(fn, t) {
	return async function(...args) {
        // timer should return promise that rejects after t miliseconds
        const timer = new Promise((resolve, reject) => {
            setTimeout(()=> reject("Time Limit Exceeded"), t);
        });

        // fn is an async function that returns a promise 
        const fnPromise = fn(...args); 


        return Promise.race([timer, fnPromise]);
    
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
