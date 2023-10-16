function topKFrequent(nums: number[], k: number): number[] {
    
    // convert each array value to str, use as key in hashmap to store count
    let counts = {}
    for (const num of nums){
        const key = num.toString();
        counts[key] = counts[key] ? counts[key] + 1 : 1;
    }

    // // returns array of object keys from greatest to least frequecy 
    // const sortedKeys = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

    // const result = [];

    // let i = 0;
    // while(i < k){
    //     result.push(parseInt(sortedKeys[i]));
    //     i++;
    // }
 
    // return result;
    // create a set for storing past values that have been pushed to result
    // const passtValues = new Set();
    // // while i < k, loop through object keys, find the greatest count, 
    // // if > mostFrequent
    // return mostFrequent;

   // altrnative to a sorting, use array of nums.length to map each num to the index of how may time is occurs

    const frequencies = new Array(nums.length + 1);
    // fill array indeces with nums that have that frequency
    for (const key of Object.keys(counts)){
        if (frequencies[counts[key]]) frequencies[counts[key]].push(parseInt(key))
        else  frequencies[counts[key]] = [parseInt(key)];
    }
 

    let result = []
    for (let i = frequencies.length - 1; i >= 0; i--){
        if (k === 0) break;
        if (frequencies[i]) {
            result.push(...frequencies[i]);
             k-= frequencies[i].length;
        }
       
    }

    return result;
};
