

function secondSmallest(arr) {
    let small = Infinity;
    let secSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < small) {
            secSmallest = small;
            small = arr[i];
        } else if (arr[i] < secSmallest && arr[i] !== small) {
            secSmallest = arr[i];
        }
    }

    return secSmallest === Infinity ? undefined : secSmallest;
}

const arr = [-101, -20, -30, 40];

console.log(secondSmallest(arr));  // Output: -30
