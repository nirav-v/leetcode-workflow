
// acbabcbb

function lengthOfLongestSubstring(s: string): number {
    let result = 0
    let i = 0
    let j = i
    if (s.length <= 1) return s.length

    let set = new Set()

    while (j < s.length){
        if (!set.has(s[j])){
            set.add(s[j])
            result = Math.max(result, set.size)
            j++;
        } else {
            set.delete(s[i])
            i++
        }   
    }

    return result;


};
