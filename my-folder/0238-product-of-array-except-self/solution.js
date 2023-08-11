/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

        // [1,2,3,4]
        // nums.length === 4

    // loop over each num, if index !== nums.length -1, count towards product
    // length--

    let result = [];

   

    let indexToExclude = 0; 
for (let num of nums){
   let product = 1;
// exclude last index on first iteration, decrement each time
    for (let i = 0; i < nums.length; i++){
        if (i !== indexToExclude){
            product = product * nums[i];
        }
       
    };
    result.push(product);
    indexToExclude++;
}

return result; 
}
