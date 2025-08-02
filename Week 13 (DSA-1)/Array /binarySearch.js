const array = [30, 10, 40, 20, 50, 30, 70];
const target = 30;

let sortedArr = array.sort((a, b) => a - b);

// function midElement(sortedArr, target) {
//     let left = 0;
//     let right = sortedArr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (sortedArr[mid] === target) {
//             return mid;
//         } else if (target < sortedArr[mid]) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }

//     return -1;
// }

// console.log(midElement(sortedArr, target));




// Recursive binary search function
function recurrsive(sortedArr, target, left, right) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (sortedArr[mid] === target) {
    return mid;
  } else if ( target<sortedArr[mid]) {
    return recurrsive(sortedArr, target, left, mid-1);
  } else {
    return recurrsive(sortedArr, target, mid+1,right);
  }
}

function recurrindex(sortedArr, target) {
  return recurrsive(sortedArr, target, 0, sortedArr.length - 1);
}

console.log(recurrindex(sortedArr, target));
