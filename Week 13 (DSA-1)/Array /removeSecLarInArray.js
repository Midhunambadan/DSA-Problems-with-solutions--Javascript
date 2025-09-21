


// Delete the second largest element from an array.
let arr=[4,2,5,7,3,6,8]
// output secondlargest=7

let largest=-Infinity
let secondlargest=-Infinity
let index=-1

for(let i=0;i<arr.length;i++){
  if(arr[i]>largest){
    secondlargest=largest
    index=arr.indexOf(secondlargest)
    largest=arr[i]
  }
  if(arr[i]>secondlargest && arr[i]!==largest){
    secondlargest=arr[i]
    index=i
  }
}

console.log(secondlargest,index)

arr.splice(index,1)
console.log(arr)