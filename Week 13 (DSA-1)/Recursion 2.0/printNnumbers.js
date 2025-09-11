

// Print numbers from 1 to n using recursion.
// let n=10
// function printNum(n){
//   if(n<=0) return 
//   printNum(n-1)
//   console.log(n) 
// }
// printNum(n)

// Print numbers from n to 1 using recursion.


let n1=10
function printNum(n1){
  if(n1<=0) return 
  console.log(n1) 
  printNum(n1-1)
}
printNum(n1)
