type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const result = [];
    arr.forEach((item, index) => {
        if (fn(item, index)) result.push(item);
    })
    return result
};
