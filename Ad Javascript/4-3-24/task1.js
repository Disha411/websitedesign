let num = [1,2,3,4,5,6,7,8,9] // find 15 available or not

let searchnumber = 15
let available = num.find((e) =>{
    return e === searchnumber
}) 
console.log(available)
