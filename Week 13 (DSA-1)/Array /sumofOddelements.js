const arr=[1,2,3,4,5,0,-3]
let sum=0

function sumOfOdd(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            sum=sum+arr[i]
        }
       
    }
    return sum
}
let res=sumOfOdd(arr)
console.log(res);