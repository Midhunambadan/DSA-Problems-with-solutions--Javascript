let arr = [1, 6, 2, 6, 3, 8, 2, 4, 5, 1, 6, 3];
let output = [1, 3, 8, 4, 5, 1, 3];

function removeEvenNumbers(arr) {
  let res = [];
  let k = 0;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        clearInterval;
        count++;
      }
    }

    if (arr[i] % 2 !== 0 || (arr[i] % 2 == 0 && count == 1)) {
      res[k] = arr[i];
      k++;
    }
  }

  return res;
}

console.log(removeEvenNumbers(arr));
