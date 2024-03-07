// task => [1,2,3,4,5]

// odd => +10
// even => +20

// total of odd & Even numbers

var arr = [1, 2, 3, 4, 5];
let newarr=[]
totalOdd = 0
totalEven = 0


for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 !== 0) {
        console.log((arr[i]+10));
        newarr+=arr[i]+10

    } else if (arr[i] % 2 == 0) {
        console.log((arr[i]+20));
        // newarr+=arr[i]+20
    }
}

console.log(newarr);