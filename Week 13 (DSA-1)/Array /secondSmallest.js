let arr = [10, 12, 3, 4, 5, 6, 7, 8, 4,2];

function findSmallestAndSecondSmallest(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements");
    }

    let small = Math.min(arr[0], arr[1]);
    let secondSmall = Math.max(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] < small) {
            secondSmall = small;
            small = arr[i];
        } else if (arr[i] < secondSmall && arr[i] != small) {
            secondSmall = arr[i];
        }
    }

    return {smallest: small, secondSmallest: secondSmall};
}

const result = findSmallestAndSecondSmallest(arr);
console.log("Smallest element:", result.smallest);
console.log("Second smallest element:", result.secondSmallest);
