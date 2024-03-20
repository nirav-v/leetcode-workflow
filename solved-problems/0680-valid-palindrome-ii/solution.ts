function checkPalindrome(s, i, j){
        while (i < j){
            if (s[i] !== s[j]) return false
            i++;
            j--;
        }

        return true
}

function validPalindrome(s: string): boolean {
    
    let i = 0;
    let j = s.length - 1;

    
    while (i < j){
        // if both end are eqaul assume its a palindrome and keep checking middle
        // if both ends are not equal see if it would be a plaindrom if we removed one of the ends, if not then a single deletion would not make a difference
        if (s[i] !== s[j]) {
           return checkPalindrome(s, i + 1, j) || checkPalindrome(s, i, j - 1)
        } 
        
        i++;
        j--;
    }

    return true
// "abca"
};
