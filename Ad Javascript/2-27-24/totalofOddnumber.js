// total of odd numbers

var arr = [21, 22, 23, 24, 25];

total = 0

for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 !== 0) {

        console.log("odd number is " + arr[i]);
        total = total + arr[i]
    }    
}
console.log(total);

