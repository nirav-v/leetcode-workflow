function longestCommonPrefix(strs: string[]): string {
    // ['flower', 'flow', 'flight']
    // declare a var to store the prefix result
 
    // start i and j at 0
  

    // loop over each string
    // while i < shorter words length
    // make a local prefix var ""
    // compare result and next at i and j
    // if i and j are equal append to prefix
    // else reassign result to current word and break
    let prefix = strs[0];

    function includesPrefix(str: string, prefix: string){
   
        for (let i = 0; i < prefix.length; i++){
            if (prefix[i] !== str[i]) return false
        }
        
        return true;
       
    }

    for (let i = 1; i < strs.length; i++){
        while (!includesPrefix(strs[i], prefix)){
          prefix = prefix.slice(0, prefix.length - 1);
        }
    }

    return prefix;

};
