
function valid(s) {
    const stack = [];
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    for (const i of s) {
        if (bracketMap[i]) {
            stack.push(i);
        } else {
            if (bracketMap[stack.pop()] !== i) {
                return false;
            };
        }
    }
    return stack.length === 0;
};

let s = "()]{}"
console.log(valid(s))