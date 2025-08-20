let arr = [2, 5, 6, 4, 2, 3, 7, 8, 2, 4, 5];

// output=[2,5,6,4,3,7,8,5]

function evenDuplicatesRemove(arr) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    if (arr[i] % 2 === 0) {
      for (let j = 0; j < i; j++) {
        if (arr[i] == arr[j]) {
          isDuplicate = true;
          break;
        }
      }
    }
    if (!isDuplicate) {
      arr[k] = arr[i];
      k++;
    }
  }
  arr.length = k;
  return arr;
}

console.log(evenDuplicatesRemove(arr));
