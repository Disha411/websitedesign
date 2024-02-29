//find min number of array

let arr = [1, 2, 30, 40, 5]
let max = arr[0]
let min = arr[0]


for (i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    } else if (arr[i] > max) {
        max = arr[i]
    }
}
console.log("Minimum number is:" + min);
console.log("Maximum number is:" + max);



// let minVal = Math.min(...arr);

// console.log(minVal);