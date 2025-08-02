//bubbleSort

function BubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        console.log(arr[i]);
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

let arr = [-9, 24, 1, 2, 1, 1, 20, -1];

console.log(BubbleSort(arr));
