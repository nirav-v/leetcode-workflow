function isPalindrome(s: string): boolean {

    //solution 1: removing spaces and replacing special chars using regex
    // s = s.split(' ').join('');
    // s = s.replace(/[^a-zA-Z0-9]/g, '');
 
 
    // let i = 0
    // let j = s.length - 1;

    // while (i <= j){
    //     if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    //     else {
    //         i++
    //         j--
    //     }
    // }
    // return true;

    // two pointers
    // if char code not in valid alpha numeric range, skip
    // if chars not equal while i < j, return false

 

    function isAlpha(char: string): boolean {
        if (
            !char.match(/[^a-zA-Z0-9]/)
        // (char.charCodeAt(0) >= 'A'.charCodeAt(0) && char.charCodeAt(0) <= 'Z'.charCodeAt(0)) || 
        // (char.charCodeAt(0) >= 'a'.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
        // (parseInt(char) >=0 && parseInt(char) <=9)
        ) return true;

        return false;
    }

    let i = 0;
    let j = s.length - 1;


    while (i < j){
       
       while (!isAlpha(s[i]) && i < j) i++;
       while (!isAlpha(s[j]) && j > i) j--;

        if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;

        i++;
        j--;
    }

    return true;
};
