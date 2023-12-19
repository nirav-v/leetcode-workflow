function isValid(s: string): boolean {
    const stack = [];

    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    const openingBrackets = new Set(Object.keys(brackets));


    // push and pop from stack as we go
    for (const char of s){
        if (openingBrackets.has(char)){
            stack.push(char);
        } else {
            const top = stack.pop();
            if (brackets[top] !== char) return false;
        }
    }
    return stack.length === 0;

};
