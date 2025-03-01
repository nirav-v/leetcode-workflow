/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    while (k >0){
        const popped = nums.pop()
        nums.unshift(popped)
        k--
    }
};
