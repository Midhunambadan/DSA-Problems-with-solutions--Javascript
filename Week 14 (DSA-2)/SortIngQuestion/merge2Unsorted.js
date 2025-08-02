//merge sort two sorted array 

function mergeSort(arr){
    if(arr.length<2 ) return arr
 
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
 
    return merge(mergeSort(left),mergeSort(right))
 
 }
 
 function merge(left,right){
     let sortedArr=[]
     let i=0,j=0
     while(i<left.length && j<right.length){
         if(left[i]<right[j]){
             sortedArr.push(left[i])
             i++
         }else{
             sortedArr.push(right[j])
             j++
         }
     }
 
     while(i<left.length){
         sortedArr.push(left[i])
         i++
     }
 
     while(j<right.length){
         sortedArr.push(right[j])
         j++
     }
     return sortedArr
 }
//  let arr1=[5,6,6,7]
//  let arr2=[2,1,3,4]

 let arr1=[10,20,30]
let arr2=[70,50,40]
 
 let sortedArr1 = mergeSort(arr1);
 let sortedArr2 = mergeSort(arr2);
 
 let final1 =merge(sortedArr1,sortedArr2)
 
 console.log(final1);
 