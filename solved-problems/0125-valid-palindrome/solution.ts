function isPalindrome(s: string): boolean {

    let i = 0;
    let j = s.length - 1;

    function isAlphaNumeric(char) {
        const code = char.charCodeAt(0);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
        return true;
    };

    while (i < j) {

        while (s[i] && !isAlphaNumeric(s[i])) {
            i++;
        };

        while (s[j] && !isAlphaNumeric(s[j])) {
            j--;
        };

        if (!s[i] || !s[j]) break;

        if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;

        i++;
        j--;
    }

    return true;

}; 
