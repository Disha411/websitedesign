// total of odd & Even numbers

var arr = [21, 22, 23, 24, 25];

totalOdd = 0
totalEven = 0


for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 !== 0) {

        console.log("odd number is " + arr[i]);
        totalOdd = totalOdd + arr[i]
    }else{

        totalEven = totalEven + arr[i]
    }
}
console.log("total of Odd numbers is" +totalOdd);
console.log("total of Even numbers is" +totalEven)
