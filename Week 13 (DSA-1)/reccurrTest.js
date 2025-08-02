//sum of n numbers

// function sum(n){
//     if(n<=0){
//         return 0
//     }else{
//         return n+sum(n-1)
//     }
// }

// console.log(sum(5))

//given number is odd or 




// function checkIsPrime(num) {
//     if (num < 2) {
//         return false;
//     }
//     for (let i = 2; i <= num/2; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }


// function sumPrime(limit, sum = 0) {
//     if (limit < 2) {
//         return sum;
//     } else {
//         if (checkIsPrime(limit)) {
//             sum += limit;
//             console.log(limit)
//         }
//         return sumPrime(limit - 1, sum);
//     }
// }
// console.log(sumPrime(10));




//--------count--------
let str='aabbbbccccddd'


    let obj = {}

    let count=0
    for(let i=0;i<str.length;i++){
        
    if(obj[str[i]] ) {
        obj[str[i]]++
    } else {
        obj[str[i]] = 1
    }
    }
    // obj.push(count)
    


console.log(obj)