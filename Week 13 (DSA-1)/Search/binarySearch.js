// const arr1=[10,20,30,100,40,50,60,70,80,90]
// const arr=arr1.sort((a,b)=>a-b)
// let target=70
// // result 6

// function midElement(arr,target){
//     let left =0
//     let right=arr.length-1
//     while(left<=right){
//         let mid=Math.floor((left+right)/2)
//         if(target==arr[mid]){
//             return mid
//         }else if(target<arr[mid]){
//             right=mid-1
//         }else if(target>arr[mid]){
//             left=mid+1
//         }
       
//     }
//     return -1
// }
// const result=midElement(arr,target)
// console.log(result)



// binary search using recursion
 
function binarySearch(arr,tar,left=0,right=arr.length-1){
        
    if(left>right){
        return -1
    }
        let mid= Math.floor((left+right)/2)

        if(tar===arr[mid]){
            return mid
        }else if(tar>arr[mid]){
            return binarySearch(arr,tar,mid+1,right)
        }else {
            return binarySearch(arr,tar,left,mid-1)
        }
    }


 const array= new Array(1,2,3,4,5,6,7,8)

 const target=5 // output= 4

 console.log(binarySearch(array,5))

 