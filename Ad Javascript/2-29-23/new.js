function printNumbers(start, end) {
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            console.log(i);
        }
    } else {
        for (let i = start; i >= end; i--) {
            console.log(i);
        }
    }
    
}


console.log("Numbers from 1 to 5:");
printNumbers(1, 5);

console.log("Numbers from 5 to 1:");
printNumbers(5, 1);