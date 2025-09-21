// // find the longest string

// let str = "my name is midhun amabadan , i am from kochi kothamangalam";

// let largest = "";
// let value = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] !== " ") {
//     value += str[i];
//     // console.log(value)
//   } else if (str[i] == " ") {
//     if (value.length > largest.length) {
//       largest = value;
//     }
//     value = "";
//   }
// }

// if (value.length > largest.length) {
//   largest = value;
// }

// console.log(largest);

//--------------------------------------------------------------------------




// find the longest string using reduce()

// let str='my name is midhun amabadan , i am from kochi kothamangalam'

// let largest=str.split(' ').reduce((acc,curr)=>curr.length>acc.length?curr:acc,'')

//   console.log(largest)