function checkInclusion(s1: string, s2: string): boolean {
    let i = 0;
    let j = 0;

    const s1CharCounts = {}

    for (const char of s1){
        if (s1CharCounts[char]) s1CharCounts[char] +=1
        else s1CharCounts[char] = 1
    }

    const counts = {}


    for (let j = 0; j < s2.length; j++){

        if (counts[s2[j]]) counts[s2[j]]+=1
        else counts[s2[j]] = 1;

        // shrink window if we go past s1 length
        if ((j - i + 1) > s1.length){
            counts[s2[i]]--;
            i++;
        }


        // console.log(s1CharCounts, counts)

        // compare the char counts of current substring to s1
        let matches = 0;
        for (const key of Object.keys(s1CharCounts)){
            if (s1CharCounts[key] === counts[key]) matches+=1;
        }
        // console.log(s1.length, matches)
        if (matches === Object.keys(s1CharCounts).length) return true;
    }

    return false;
};
