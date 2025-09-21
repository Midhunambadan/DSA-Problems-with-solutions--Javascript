

function removeDuplicates(arr){
  let seen={}
  for(let i=0;i<arr.length;i++){
  let flag=false
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]==arr[j]){
        for(let k=j;k<arr.length-1;k++){
          arr[k]=arr[k+1]
        }
        flag=true
        arr.length--
        
      }
    }
    if(flag){
      for(let m=i;m<arr.length-1;m++){
        arr[m]=arr[m+1]
      }
      arr.length--
      i--
      
    }
  }
  return arr
}
let arr=[5,3,4,5,1,3,2,5]

console.log(removeDuplicates(arr))



