/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
    //  s = "abc", t = "ccahbgdc"
    //       i            j
    // 'ab' 'baab'

    // start i and j at 0
    // i tracks index in s string, j for t string
    // compare s[i] to t[j] 
    // if not equal, increment j
    // else increment i
    // if i passes through whole s string, return true

var isSubsequence = function(s, t) {

    // if strings are identical
    if (s === t) return true;

    let i = 0;
    let j = 0;

    // if j goes past end of t string, not all chars were found
    while (j < t.length){
        if (s[i] !== t[j]){
            j++
        } else {
            i++
            j++
        }
        if (i === s.length){
            return true
        }
    }
      return false
};
