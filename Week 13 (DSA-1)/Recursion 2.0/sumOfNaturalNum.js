
// Sum of natural numbers up to n
// 1,2,3,4,5,6,7 etc ...

function sumOfNaturalNumbers(num){

    if(num==0) return 0
    return num+sumOfNaturalNumbers(num-1)
}
let num=5

console.log(sumOfNaturalNumbers(num))