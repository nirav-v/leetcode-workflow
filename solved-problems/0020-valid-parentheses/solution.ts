function isValid(s: string): boolean {
// every time we encounter an opening character push it the top of a stack, store the desired closing character in a set
// if a closing char in the set is encountered, pop from the stack remove char from set
// else push the char to the set (closing char without an opener)
'{{()))}}'
    let chars = {
        '}':'{',
        ']':'[',
        ')':'('
    };

    let stack = []
 
    for (let char of s) {
        if (chars[char]) {
            if (stack[stack.length -1] !== chars[char]) return false;
            stack.pop();
        } else stack.push(char)
    }

    return stack.length === 0;

// 
};
