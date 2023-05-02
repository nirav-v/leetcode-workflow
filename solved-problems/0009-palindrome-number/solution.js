/**
 * @param {number} x
 * @return {boolean}
 */

 // 1001
// copy = 1001
// remainder = 1
// newNum = 1
// while copy > 10 
    // copy = 10
    // remainder = 0
    // newNum = 100


var isPalindrome = function(x) {
// input check for negative nums (-121 cannot be palindrome)
if (x < 0) return false;
// check for single digit nums (9 is palindrome i would think)
if (x < 10) return true;

// create a copy of number to mutate - pulling of last num with modulo 10 then dividing by 10
    let copy = x;
    let remainder =  copy % 10;
    let newNum = remainder;
    // continue doing this while copy is >= 10, we haven't reached 1s place yet
    while (copy >= 10 ){
        // subtract previous remainder, divide by 10, then get next last digit
        copy = (copy - remainder) / 10;
        remainder = copy % 10
        // mulitply newNum by 10 to move over a decimal place befor adding on remainder (concatenating the digits)  
        newNum = newNum * 10;
        newNum += remainder

    }
    //  compare  newNum to x for equlaity
    return newNum === x;
};
