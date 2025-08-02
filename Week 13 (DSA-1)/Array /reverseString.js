

// const arr = ['ambadan']; // Initial array with a single string element

// let str = arr[0]; // Extract the string from the array

// // Reverse the string
// let reversedStr = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
// }

// arr[0] = reversedStr; // Store the reversed string back in the array

// console.log(arr); // Output: ['nadamba']

//------------------------------------------------------------------------------------------------------



// 
let str = ['midhun ambadan'];
let inputStr = str[0];
let res = '';
let word = '';

// Traverse the string from end to start
for (let i = inputStr.length - 1; i >= 0; i--) {
    if (inputStr[i] !== ' ') {
        // Build the current word in reverse
        word = inputStr[i] + word;
    } else {
        // Add the word to result when a space is encountered
        res += word + ' ';
        word = '';
    }
}

// Add the last word
res += word;

console.log(res);
