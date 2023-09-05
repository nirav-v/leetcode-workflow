/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */

// flattended Arr[]
// have levels var to keep track of current depth
// loop over arr, if item is Arr, levels++, if levels === depth, concant arr itemsonto new arr 
// if levels still < depth, recursilvey run flatten fn on current item
    // else push item to new Arr

var flat = function (arr, n) {
    if (n === 0) return arr;
    let flattenedArr = [];

    function flatten(arr, levels){
        for (let item of arr){
            if (Array.isArray(item) && (levels < n)){
                flatten(item, levels + 1);
            } else {
                flattenedArr.push(item);
            }
        }
        return flattenedArr;
    }
    return flatten(arr, 0);
};

// n = 3
// levels = 1;
// flattendArr = [1, 2, 3]
// [[1,2],[3,[4,[5,[6]]],7],[8,9,10]]
            // flatten([3,[4,[5,[6]]],7])
            //         flatten([5,[6]])
