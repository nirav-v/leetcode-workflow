function characterReplacement(s: string, k: number): number {
    
    // store the count of each char in a hash map
    // if the count least frequent chars (length of substring - count of most frequent char) is more than k possbile changes, decrement that char count in the object and move the substring forward
// calculate the max length

let res = 0;
const counts = {}
let i = 0;

for (let j = 0; j < s.length; j++){

    if (counts[s[j]]) counts[s[j]] += 1;
    else counts[s[j]] = 1;

    
    const charValues: number[] = Object.values(counts)
    const mostFrequentCharCount = Math.max(...charValues)


    if ( (j - i + 1) - mostFrequentCharCount > k){
        counts[s[i]]-=1
        i++;
    }

    res=Math.max(res,  j - i + 1)
}   

return res;
};
