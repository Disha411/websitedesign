// let num = [1,2,3,4,5,6,7,8,9] // sum of odd numbers with use of reducer


// let oddtotal = num.reduce((LRV, e) => {
//  if ( e % 2 !== 0) {
//     return LRV+e
//  }else{
//      return LRV;
//  }
// });
// console.log("-----------  oddtotal----------->", oddtotal)



// task => [5,10,15,20,25]

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 25]

let fivetable = num.filter((e, i) => {
    return e % 5 === 0;
})
console.log(fivetable)
