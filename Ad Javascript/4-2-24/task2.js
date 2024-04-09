// find 6 character in this and given true or false
let arr = ["disha bulsara", "urvish", "vinita"]

// let available = arr.some((e) =>{
    // return e.length > 6
// }) 
// console.log(available)





// find bulsara in this  given true or false

let available = arr.some((e)=>{

    return e.includes("bulsara")
})
console.log(available)
