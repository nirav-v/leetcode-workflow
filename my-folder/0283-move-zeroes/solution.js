/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


 // Input array of nums [0,1,0,3,12]
// Ouptput original array of same nums with zeroes moved to the end [1,3,12,0,0]
// negative numbers?
// no zeroes?
// *must mutate original array in place

// general idea: remove all zeroes, then add on the same number of zeroes to the end

// loop over nums
// keep count of the number of zeroes
// keep track of the original length of th array

// for nums within length of the original array, if num is 0, shift every following number's index down by 1 
// for num zeroes in array, push a zero onto the end of array


// var moveZeroes = function (nums) {
//   let numZeroes = 0;
//   let originalArrLength = nums.length;

//   for (let i = 0; i < nums.length; i++) {
//     // we want to keep repeating this loop until all zeroes are at the end of array

//     // keep looping over nums and doing a swap for each zero encountered
//     for (let j = 0; j < nums.length - 1; j++) {
//       if (nums[j] === 0) {
//         // swap the values
//         nums[j] = nums[j + 1];
//         nums[j + 1] = 0;
//       }
//     }
//   }

//   console.log(nums);
//   retrun 
// };









var moveZeroes = function (nums) {
   // count the number of zeroes, use this to create a known range of indices that we want to place 0's at the end
  // [[0, 0, 1]] 
  //   0  1  2 
  // [[0, 0, 1]] 
  
  // numZeroes = 2
  // zeroIdx = 0
  // counter = 0


  // Loop through array once and gather numZeroes

  // Have a counter (init to 0)
  // Loop while (counter < numZeros) {
  //    Loop until we find a zero --> store in zeroIdx
  //    Starting from zeroIdx, loop and shift values left by one until the end 
  //    Set nums[nums.length - 1 - counter] = 0
  //    increment counter
  // }

let numZeroes = 0;
let zeroIdx = 0;
let counter = 0;

for (num of nums ){
    if (num === 0){
        numZeroes++;
    }
}

while (counter < numZeroes){
    for (let i =0; i < nums.length; i++){
        if (nums[i] ===0){
            zeroIdx = i;
            break;
        }
    }
    // shifting everyting left, except last index
    for (let j = zeroIdx; j < nums.length - 1 - counter; j++){
        nums[j] = nums[j + 1];
    }
    
    // set last index - counter to 0
    nums[nums.length - 1 - counter] = 0;
    
    counter++;
}
  
};



