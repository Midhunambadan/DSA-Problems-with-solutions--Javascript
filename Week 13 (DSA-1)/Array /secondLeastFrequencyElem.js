
// find the second least frequency element

let arr=[1,1,2,1,3,2,1,5,6,5,7,5]

// 1:4 
// 2:2 output result
// 3:1 
// 5:3 
// 6 :1 
// 7:1

let seen={}
for (let i = 0; i < arr.length; i++) {
  if (seen[arr[i]]) {
    seen[arr[i]]++
  } else {
    seen[arr[i]] = 1
  }
}

let small = Infinity, secondSmall = Infinity
let smallElem = null, secondSmallElem = null

for (let key in seen) {
  let freq = seen[key]

  if (freq < small) {
    // shift values
    secondSmall = small
    secondSmallElem = smallElem

    small = freq
    smallElem = key
  } else if (freq < secondSmall && freq !== small) {
    secondSmall = freq
    secondSmallElem = key
  }
}

console.log("Second least frequency element:", secondSmallElem)






















