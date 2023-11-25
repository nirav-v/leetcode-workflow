function isPalindrome(s: string): boolean {
    const isAlphaNumeric = (str: string) =>/^[a-zA-Z0-9]+$/.test(str);

    if (s.length < 1) return false;

    let i = 0;
    let j = s.length - 1;
// "A man, a plan, a canal: Panama"
             

    while (i < j){
        while (!isAlphaNumeric(s[i]) && i < j){
            i+=1

        }
        while (!isAlphaNumeric(s[j]) && i < j){
            j-=1
        }
        // check if i and j crossed over in the inner while loops
        // if (i >= j) break;

        if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;

        i++;
        j--;
    }

    return true;
};
