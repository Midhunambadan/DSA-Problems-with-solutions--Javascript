

function findmultiple(number,count,current=1,multiples=[]){
    if(current>number){
        return multiples;
    }
    multiples.push(number*current)
    return findmultiple(number,count,current+1,multiples)
}

let count = 5
let number = 5

console.log(findmultiple(number,count))