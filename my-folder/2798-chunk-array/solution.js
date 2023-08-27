/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */


// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]
var chunk = function(arr, size) {
    let buffer = [];
    let chunk = [];
    let counter = 0;
    // loop over arr, push each num onto chunk, increment counter, once counter === size OR at last num of arr, push chunk onto buffer, reset chunk to [], reset counter to 0
    for (let i = 0; i < arr.length; i++){
        let num = arr[i];
        chunk.push(num);
        counter++;
        if (counter === size || i === arr.length - 1){
            buffer.push(chunk);
            chunk = [];
            counter = 0;
        }
    }

    return buffer
};
