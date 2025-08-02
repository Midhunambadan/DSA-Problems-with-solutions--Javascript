const arr=[70,50,-1000,1,2,3,4,5,6,7,8,9,0,-2,2,80,7]

//find second largest and second smallest element 
let lar=0
let secLar=0
function elements(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>lar){
            secLar=lar
            lar=arr[i]
        }
    }
    return lar,secLar
}

let res=elements(arr)

console.log(secLar)