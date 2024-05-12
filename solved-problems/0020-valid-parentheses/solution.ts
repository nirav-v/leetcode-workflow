function isValid(s: string): boolean {
    // push opening brackets to stack
    // if closing bracket, pop from stack and check that the popped value is the corresponding opening bracket

    const bracketsMap = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    const stack = []

    for (const bracket of s){
        if (bracketsMap[bracket]) stack.push(bracket) // opening bracket
        else { //closing bracket
            const poppedVal = stack.pop()
            if (bracketsMap[poppedVal] !== bracket) return false
        }
    }

    return stack.length === 0
};
