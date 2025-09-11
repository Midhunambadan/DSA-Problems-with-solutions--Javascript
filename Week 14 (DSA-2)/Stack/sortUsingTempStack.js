


function sort(arr) {
  let tempStack = [];

  while (arr.length > 0) {
    let key = arr.pop();

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > key) {
      arr.push(tempStack.pop());
    }

    tempStack.push(key);
  }

  return tempStack;
}

let arr = [-10, 3, 9, 2, 5, 4];

console.log(sort(arr));
