// task => [1,2,3,4,5]

// odd => +10
// even => +20

// total of odd & Even numbers

var arr = [1, 2, 3, 4, 5];


for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 !== 0) {
        // arr[i] += 10
        arr[i] = arr[i] + 10
        console.log((arr[i] + 10));

    } else {
        // arr[i] += 20
        arr[i] = arr[i] +20
        console.log((arr[i] + 20));
    }
}
console.log(arr);

