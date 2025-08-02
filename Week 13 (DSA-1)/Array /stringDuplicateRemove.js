function removeDuplicates(input) {
    let seen = {}; // Object to keep track of seen characters
    let result = ''; // Result string to build the output

    for (let i = 0; i < input.length; i++) {
        // let char = input[i];
        if (!seen[input[i]]) {
            seen[input[i]] = true; // Mark this character as seen
            result += input[i] ; // Add the character to the result
        }
    }
    
    return result;
}

const input = "abcabcfabcd"
const output = removeDuplicates(input);
console.log(output); // Should print "abcd"
