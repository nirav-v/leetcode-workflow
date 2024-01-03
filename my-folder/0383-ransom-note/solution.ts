function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineLetters = {};
    
    for (const letter of magazine){
        if (magazineLetters[letter]) magazineLetters[letter]+=1;
        else magazineLetters[letter] = 1;
    }

    for (const letter of ransomNote){
       if (magazineLetters[letter]) magazineLetters[letter] -=1;
       else return false;
    }

    return true;

};
