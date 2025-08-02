// //Prime number


// const arr = [1,2,3,4,5,6,7,8,9,10]

// for(var i=0;i<arr.length;i++){
//     var flag=1;

//     if (arr[i] <= 1)
//     flag= 0;
// for(var j=2;j<=arr[i]/2;j++){
  
//     if(arr[i]%j===0){
//         flag=0;
//         break;
//     }
// }

// if (flag==1){
//     console.log(arr[i]);
// }
// // else{
// //     console.log("not a prime number");
// // }
// }


// // function isPrime(num) {
// //     if (num <= 1) return false;
// //     // if (num === 2) return true;
// //     if (num % 2 === 0) return false;
// //     for (let i = 3; i<=num/2; i++) {
// //       if (num % i === 0) return false;
// //     }
// //     return true;
// //   }

// //   const array = [4, 7, 5, 2, 1, 3, 7,0, 9, 1];
// //   const primeNumbers = array.filter((number) => isPrime(number));
// //   console.log(primeNumbers);


// //How to reverse word but dont change the word positions

// const str = 'Hai Midhun How Are You?';

// // Split the string into an array of words
// const words = str.split(' ');

// // Reverse each word
// const reversedWords = words.map(word => {
//     // Split the word into an array of characters, reverse it, and join it back into a string
//     return word.split('').reverse().join('');
// });

// // Join the reversed words back into a single string
// const reversedStr = reversedWords.join(' ');

// console.log(reversedStr); // Output: 'iaH nuhdiM woH erA ?uoY'





// //palindrome


// const array1 = [1, 2, 3, 5];

// // Clone the array using slice before reversing
// const array2 = array1.slice().reverse();




// if (JSON.stringify(array1) === JSON.stringify(array2)) {
//     console.log('palindrome');
// } else {
//     console.log('not palindrome');
// }




// //array nested str sum



// const array=[ {a:1,b:[2,3,4]},[],5 ]

// const obj1=array[0].a
// const obj2=array[0].b

// const fsum=obj2.reduce((acc,curr)=>{
//   return acc=acc+curr  
// },0)

// console.log(obj1+array[2]+fsum);



// //empty object check

// const obj={}

// if(Object.values(obj).length==0){
//     console.log('empty object');
// }else{
//     console.log('not empty ');
// }	



function findDistinctElements(arr) {
    let occurrence = {};
    
    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (occurrence[element] === undefined) {
            occurrence[element] = 1;
        } else {
            occurrence[element]++;
        }
    }
    
    // Collect elements that appear only once
    let distinctElements = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (occurrence[element] === 1) {
            distinctElements.push(element);
        }
    }
    
    return distinctElements;
}

// Example usage:
let arr = ["d", "b", "c", "b", "c", "a"];
let distinctElements = findDistinctElements(arr);
console.log(distinctElements); // Output: ["d", "a"]

