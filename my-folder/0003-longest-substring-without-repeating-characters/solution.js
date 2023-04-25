/**
 * @param {string} s
 * @return {number}
 */


// input: String
// output: Number - length of longest unique substring


// currentLength and longest variables
// Set() for which chars have been encountered
// iterate over chars 
// if char is in the Set already, save longest as max between current and longest,    

        // check if repeating chars are consecutive, clear set and add current char
        // else remove duplicate char from set then add the current char
        
// else add char to the Set and increment currentLength

// "pwwkew"
//  "dvdf"
// {}
// currentLength = 3
// longest = 3




var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let currentLength = 0;
    let charSet = new Set();

    for (let i = 0; i < s.length; i++){
        let char = s[i];
        if (charSet.has(char)){

            // iterate over the set to delete all values preceding and including the existing duplicate 
                for (const trash of charSet){
                    charSet.delete(trash);
                    currentLength--;
                    if (trash === char){
                        break;
                    }
                }

                // then add the current char to the set and reset currenLength
                charSet.add(char)
                currentLength++;
                longest = Math.max(longest, currentLength);

            }
            else {
                charSet.add(char);
                currentLength++;
                longest = Math.max(longest, currentLength);
            }
    }

    return longest;
}

