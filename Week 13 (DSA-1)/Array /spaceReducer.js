let str ='hi  am  ambadan'

let arr=str.split('')
// console.log(arr);

for(let i=0;i<arr.length;i++){

       if(arr[i]==' '&& arr[i+1]==' '){
        arr.splice(i,1)
       }
}
let newStr=arr.join("")

console.log(newStr);