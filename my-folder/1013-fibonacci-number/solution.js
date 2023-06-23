/**
 * @param {number} n
 * @return {number}
 */

// to determine the fibobonacci number at any positiion, we just have to know what fib at positions 0 and 1 are
// by recursively calling fib on the previous two positions every call will eventually simpligy down to either fib(1) or fib(0), which we know is 1 and 0, respectively

// 0, 1, 1, 2, 3, 5, 8

// fib(4)
// fib(3) + fib(2)
// fib(2) + fib(1) + fib(1) + fib(0)
// fib(1) + fib(0) + 1 + 1 + 0
// 1 + 0 + 1 + 1 +0
var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    return fib(n -1) + fib(n-2)
};
