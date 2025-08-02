

function sum(num){

    if(num<=1){
        return 1
    }

    return num+sum(num-1)
}

console.log(sum(5))


//-------------------------fibonnacci------------------------

function fibonnacci(n){

    if(n<=1){
     return n
    }
 
    return fibonnacci(n-1)+fibonnacci(n-2)
    
 
 }
 
  console.log(fibonnacci(6))
 

  // find the sum of all elements in an array using recursion

function sumOfArray(arr, index = 0) {
    if(index >= arr.length) {
        return 0
    } 
    return arr[index] + sumOfArray(arr, index + 1)
}
console.log(sumOfArray([1,2,3,4,5]));
