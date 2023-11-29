type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    // apply the reduce fn to the result of the previous function call

    for (const num of nums){
        init = fn(init, num)
    }
    return init;
};
