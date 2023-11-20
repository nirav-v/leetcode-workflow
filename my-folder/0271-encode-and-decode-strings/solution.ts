/**
 * Encodes a list of strings to a single string.
 */


// ["H/*llo","World"]
function encode(strs: string[]): string {
	let encodedStr = ""
    for (let i = 0; i < strs.length; i++){
        let str = strs[i]
        for (let j = 0; j < str.length; j++){
            if (str[j] === "/"){
                // escape separator with '//' to denote that the original string has an '*'
                encodedStr += "//";
            } else encodedStr += str[j];
        }
        encodedStr+="/*";
    }
    return encodedStr;
};

/**
 * Decodes a single string to a list of strings.
 */
// "H//*llo/*World/*"
function decode(encodedStr: string): string[] {
    console.log(encodedStr)
    let decodedStr = [];

    let currentStr = ""
    let i = 0;
    while (i < encodedStr.length){
        if (encodedStr[i] + encodedStr[i + 1]=== "/*"){
            decodedStr.push(currentStr);
            currentStr="";
            i+=2
        }  else if (encodedStr[i] + encodedStr[i + 1] === "//"){
            currentStr+= "/";
            i+=2
        } else {
            currentStr += encodedStr[i];
            i++;
        }
       
    }
    return decodedStr;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
