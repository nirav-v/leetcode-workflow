function strStr(haystack: string, needle: string): number {
    
    let i = 0;
    let j = 0;
    let currentStr = "";
    while (j < haystack.length){
        while (currentStr.length < needle.length){
            currentStr+=haystack[j]
            if (currentStr === needle) return i;
            j++;   
        }
        currentStr = ""
        i++;
        j = i;
    }
    return -1;
};
// leeto
// leetcode

// sadbutsad
