let str ='hi  am  ambadan'

let arr=str.split('')
console.log(arr);

for(let i=0;i<arr.length;i++){

       if(arr[i]==' '&& arr[i+1]==' '){
        arr.splice(i,1)
       }
}
let newStr=arr.join("")

console.log(newStr);




// -----------------------------------------------------------------------------------------------------------


// let str='midhun'
// let arr=[1,2,3,4,5,6]
// let res=str.split('')
// let sam=arr.join(' ')

// console.log(sam)
// console.log(res);


// let str=['midhun','ambadan','akr']
// console.log(str.includes('akr'));


// let arr = [1,8, 2, 3, 4];
// console.log(arr.findIndex(x => x >3));
//1


// let arr = [1, 2, 3, 2];
// console.log(arr.lastIndexOf(3));
 // 3
