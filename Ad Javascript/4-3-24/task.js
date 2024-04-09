let num = [11,2,3,4,54645,567,8,9,0,9]; //find any number which have more than 4 character

// let newnum = num.map(String)
// console.log(newnum)


let available = num.find((e) =>{
    return e.toString().length > 4
}) 
console.log(available)
