//selection sort

const arr = [9, 5, 2, -7, 1, 8, 4, 6, 3]

for(let i=0; i<arr.length; i++){
    let smallest = i
    for(let j=i+1; j<arr.length; j++){
        if(arr[j] < arr[smallest]){
            smallest=j
        }
    }
    if(smallest!==i){
        temp=arr[i]
        arr[i]=arr[smallest]
        arr[smallest]=temp
    }
}
console.log(arr);