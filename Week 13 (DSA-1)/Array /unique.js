
function unique(arr) {
    let seen={}
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(seen[arr[i]]){
            seen[arr[i]]++
        }else{
            seen[arr[i]]=1
        }
    }
    for(let i=0;i<arr.length;i++){
        if(seen[arr[i]]===1){
            result.push(arr[i])
        }
    }
    return result
}
let arr=[1,1,1,2,3,2,4,5]
console.log(unique(arr))

