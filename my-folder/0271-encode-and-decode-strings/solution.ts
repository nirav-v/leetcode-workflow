/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
// 	Initialize an empty string (or a string builder/stream for efficiency) to hold the encoded string.
// Iterate over each string in the input list. For each string:
// Replace each occurrence of the slash character / with two slash characters //. This is our way of "escaping" the slash character.
// Add the escaped string and our chosen delimiter /: to the encoded string.
// Return the encoded string after all strings in the input list have been processed.

    let encodedStr = "";

    for (let word of strs){

        for (let char of word){
            if (char === "/") encodedStr+="//";
            else encodedStr+= char;
        }

        encodedStr+="/:"
    }

    return encodedStr;

};

/**
 * Decodes a single string to a list of strings.
 */
function decode(encodedStr: string): string[] {
// 	Initialize an empty list to hold the decoded strings.
// Initialize an empty string to build the current string being decoded.
// Iterate over the characters in the encoded string. For each character:
// If the character and the next one form the delimiter /:, add the current string to the list of decoded strings and clear the current string for the next one. Skip the next character in the string.
// If the character and the next one form the escaped slash //, add a single slash to the current string. Skip the next character in the string.
// Otherwise, add the character to the current string.
// Return the list of decoded strings after all characters in the encoded string have been processed.

    let result = [];

    let currentStr = "";
    let i = 0;
    while (i < encodedStr.length){
        if (encodedStr[i] + encodedStr[i + 1] === "/:") {
            result.push(currentStr);
            currentStr="";
            console.log(i)
            i += 2;
        } else if (encodedStr[i] + encodedStr[i + 1] === "//") {
            currentStr+="/";
            i+=2;
        } else {
            currentStr+=encodedStr[i];
            i++;
        }
    }

    return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
