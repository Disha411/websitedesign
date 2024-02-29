// task => [1,2,3,4,5]

// odd => +10
// even => +20

// total of odd & Even numbers

var arr = [1, 2, 3, 4, 5];

totalOdd = 0
totalEven = 0


for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 !== 0) {

        // console.log("odd number is " + arr[i]);
        totalOdd = totalOdd + arr[i]+ 10

    } else if (arr[i] % 2 == 0) {
        // console.log("even number is " + arr[i]);
        totalEven = totalEven + arr[i] + 20
    }
}
console.log("total of Odd numbers is" + totalOdd)
console.log("total of Even numbers is" + totalEven)
