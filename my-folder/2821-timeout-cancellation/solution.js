/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

var cancellable = function(fn, args, t) {
    let called = false;
    // use setTimeout to delay fn by t miliseconds, thread immediately sends cb to web api and moves to next line of synchrounous code
    setTimeout(() => {
        if (called) return "cancelled";
        return fn(...args) // check if the inner cancel function has been called, if not call fn after t miliseconds
    }, t); // when callback gets sent to web api and callback queue, its lexical reference to 'called' still has a value of false bc it is not reassigned until the returned cancelFn below has been invoked after the given cancelTime, therefore if t is less than the cancelTime, the setTimeout callback will get pushed to the Call Stack before the cancelFn
    return function cancelFn() {
        called = true;
    }
};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now() 
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr))
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *           
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
