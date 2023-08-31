/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

// loop over every object in arr1, push object to output arr, store {obj.id: output index} in an memory object
// in subesequent loop (not nested): 
// loop over all items in arr2, check if obj.id is in memoryObj, if so get the value which is the index in output array and override all existing keys

var join = function(arr1, arr2) {
    const output = [];
    const memoryObj = {};

    for (let item1 of arr1){
        output.push(item1);
        // store id and index in the output arr incase we need to override it later
        memoryObj[String(item1.id)] = output.length - 1;
    }   

    for (let item2 of arr2){
        const id = String(item2.id)
        //  check if there is a conflicting id from arr1 that we saved in memory
        if (id in memoryObj){
            const index = memoryObj[id]
            const currentItem = output[index]
            // loop over the keys in item2, assign override any keys in currentItem with item2[key]
            for (let key of Object.keys(item2)){
                currentItem[key] = item2[key];
            }
        } else {
            output.push(item2)
        }
    }

    return output.sort((a, b) => a.id - b.id);
};
