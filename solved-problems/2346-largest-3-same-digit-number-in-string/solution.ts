function largestGoodInteger(num: string): string {
    
    let result = ""
    for (let i = 0; i < num.length; i++){
        if (num[i] === num[i +1] && num [i]=== num[i+2]){
            const sequence = num[i] + num[i+1] + num[i +2]
            if (!result.length || parseInt(sequence) > parseInt(result)){
                result = sequence;
            }
        }
    }
    return result
};
