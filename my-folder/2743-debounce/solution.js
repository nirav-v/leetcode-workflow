/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

// set a timeout to return the result of debounced function after t ms
// track the time that has elpased before the returned function is invoked
// if elapsed time is less than t, clear the timeout and reset it 


var debounce = function(fn, t) {

    let timeoutId;

    return function(...args) {

        clearTimeout(timeoutId);    
        timeoutId = setTimeout(() => fn(...args), t);
    }
};

// const dlog = debounce(log, 50); elapsedTime: 0
// setTimeout(() => dlog(1), 50); elapsedTime: 0
// setTimeout(() => dlog(2), 75); elapsedTime: 25, t: 50


/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
