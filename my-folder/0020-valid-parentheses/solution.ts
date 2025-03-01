
// ([])[]{}
function isValid(s: string): boolean {
    
    const openingBrackets = new Set(['[', '(', '{'])

    const bracketsMap = {
        ')': '(',
        ']': '[',
        '}': '{',
    }

   const stack = []

    for (const bracket of s){
        if (openingBrackets.has(bracket)){
            stack.push(bracket)
        } else {
            const poppedValue = stack.pop();
            if (poppedValue !== bracketsMap[bracket]) return false;
        }
    }

    return stack.length === 0;

};
