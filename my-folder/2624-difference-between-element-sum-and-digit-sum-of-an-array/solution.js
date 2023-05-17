/**
 * @param {number[]} nums
 * @return {number}
 */

// input array of positive ints
// ouput abs val of element sum - digit sum

// digit sum requires summing all individual digits, so doulbe digit numbers must be split.
// sum will never be negative since all poistivie ints, so we can use 0 as starting point

//  [1,15,6,3]


var differenceOfSum = function(nums) {
    
    // // calculate the element sum
    // let elSum = 0;
    // for (const num of nums){
    //     elSum+=num;
    // }

    // // calculate the digit sum
    // let digSum = 0;
    // let bigNum = nums.join(''); //concatenates digits from array
    // console.log(bigNum);

    // // continue getting remainder and dividing by 10 until we have gotten the 1s place digit
    // while (bigNum > 0.9){
    //     let rem = bigNum % 10;
    //     console.log(rem)
    //     digSum += rem
    //     bigNum = Math.floor(bigNum /10); 
    // }

    // return Math.abs(elSum - digSum);

    let elSum = 0;
    for (const num of nums){
        elSum+=num;
    }

//   // calculate the digit sum
//     // convert number to a string go to each char, then convert to number to add todigSum
    let digSum = 0;
    let stringNum = nums.join('').toString();

    for (char of stringNum){
        // console.log(char);
    digSum += parseInt(char);
    }
    return Math.abs(elSum - digSum);

};
