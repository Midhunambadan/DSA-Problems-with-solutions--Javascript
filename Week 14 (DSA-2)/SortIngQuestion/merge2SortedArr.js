function merge(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    // Merge elements from both arrays in sorted order
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them to merged array
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them to merged array
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

// Example usage:
let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];



let mergedArray = merge(array1, array2);
console.log(mergedArray);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
