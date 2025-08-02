

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }

    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)

    return merge(mergeSort(left),mergeSort(right))

}

function merge(left,right){
    let sortedArr=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}

const arr=[-1,3,0,10,3,-9]

console.log(mergeSort(arr))




//merge sort to sort an array of string based on their lengths----------------------------------------------


// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
    

//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)

//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     let sortedArr=[]
//     while(left.length && right.length){
//         if(left[0].length<right[0].length){
//             sortedArr.push(left.shift())
//         }else{
//             sortedArr.push(right.shift())
//         }
//     }
//     return [...sortedArr,...left,...right]
// }

// let arr=["banana", "apple", "grape", "kiwi", "peach"]
// console.log(mergeSort(arr))
