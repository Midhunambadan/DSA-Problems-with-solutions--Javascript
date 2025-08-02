let str='ambadan'

function reverse(str){
    if(str===''){
        return ''
    }
    return reverse(str.substr(1))+str[0]

    
}

// console.log(str.substring(1),str.charAt(0))

console.log(reverse(str))