function isPalindrome(s: string): boolean {
    let l = 0
    let r = s.length - 1

    while (l < r){
   
        while (l < r && !isAlphaNumeric(s[l])) {
            // stop checking we go out of bounds 
            l+=1
        }

        while (l < r && !isAlphaNumeric(s[r])) {
            r-=1
        }

        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;

        l++;
        r--;
    }

    return true
};


function isAlphaNumeric(char) {
    let code = char.charCodeAt();
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  
    return true;
};
