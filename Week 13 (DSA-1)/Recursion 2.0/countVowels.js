
// Count vowels in a string recursively

let str='midhun'
let vowels='aeiou'

function countVowels(str,vowels,i=0,count=0){
  if(i==str.length) return count
  if(vowels.includes(str[i])) count++ 
  return countVowels(str,vowels,i+1,count)
}

console.log(countVowels(str,vowels))
