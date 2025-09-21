let arr = [3, 4, 1, 9, 2, 3, 6, 5, 7, 9, 6, 4];

for (let i = 0; i < arr.length; i++) {
  let flag = false;

  // only check odd, skip even early
  if (arr[i] % 2 !== 0) {
    for (let j = i + 1; j < arr.length && arr[j] % 2 !== 0; j++) {
      flag = true;
      arr.splice(j, 1);
      j--; // adjust index after splice
    }
  }

  if (flag) {
    arr.splice(i, 1);
    i--; // adjust outer index after splice
  }
}

console.log(arr);
