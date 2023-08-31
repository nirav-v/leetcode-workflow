/**
 * @param {Function} fn
 * @return {Array}
 */


// run fn on each item in this array
// check if the key already exists in the object, if so push the current item onto the arr at that key
// if key does not exist, create it with a value of [current item]


Array.prototype.groupBy = function(fn) {
    const grouped = {};

    for (let item of this){
        const key = fn(item);
        if (key in grouped){
            grouped[key].push(item)
        } else {
            grouped[key] = [item]
        }
    }
    return grouped

};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
