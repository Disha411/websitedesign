// "4322052" => loop   => 22 same number repeat
// is prime number or not => video
// pelendrom string  or not => video 

// 5 => 01010 => loop

// let number = 5
// let newStr = "";


// for (let i = 0; i < number.length; i++) {

//     if (i %2 === 0) {
//         newStr = newStr + number[i]
//     }else{
//         newStr += "1" + "0"

//     }
// }

// console.log( newStr);



function convertToBinary(number) {
    let binaryString = '';
    while (number > 0) {
        binaryString = (number % 2) + binaryString;
        number = Math.floor(number / 2);
    }
    return binaryString;
}

console.log(convertToBinary(10)); 