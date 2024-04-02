// "4322052" => loop   => 22 same number repeat


// 5 => 01010 => loop

let number = 5
let newStr = "";


for (let i = 1; i <= number; i++) {

    if (i % 2 === 0) {
        newStr = newStr + number[i]
        let str = 0
        let newStr = str

        console.log("🚀 ~ newStr:", newStr)
    } else {
        newStr += "0" + "1"
    }
}

console.log(newStr);



