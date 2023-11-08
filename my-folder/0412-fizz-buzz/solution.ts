function fizzBuzz(n: number): string[] {
    
    const result = [];
    
    for (let i = 1; i <= n; i++){
        result[i - 1] = i.toString();
        switch (true){
            case ((i % 3 === 0) && (i % 5 === 0)): 
                result[i - 1] = "FizzBuzz";
                break;
            case i % 3 === 0:
                result[i - 1] = "Fizz";
                break;
            case i % 5 === 0:
                result[i - 1] = "Buzz";
                break;
            default:
                result[i - 1] = i.toString();
                break;
        }
    }


    return result;
};
