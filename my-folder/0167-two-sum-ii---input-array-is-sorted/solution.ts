function twoSum(numbers: number[], target: number): number[] {
    // [2,7,11,15]
    // [2,3,4]
    let i = 0;
    let j = numbers.length - 1

    while (i < j){
          const sum = numbers[i] + numbers[j]
      
            if  (sum > target) j-= 1;
            else if (sum < target) i+=1;
            else  return [i + 1, j + 1];
        
    }

};
