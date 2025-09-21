const arr = [-101, -20, -30,40];

let lar = -Infinity;
let secLar = -Infinity;

function elements(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lar) {
            secLar = lar;
            lar = arr[i];
        } else if (arr[i] > secLar && arr[i] !== lar) {
            secLar = arr[i];
        }
    }
    return secLar;
}

let res = elements(arr);

console.log(secLar);  // What will this print?
