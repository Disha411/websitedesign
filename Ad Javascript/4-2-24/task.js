//find odd-even numbers with the use of filter()

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let oddno = arr.filter((e, i) => {
    return e % 2 != 0;
})
console.log(oddno)



let evenno = arr.filter((e, i) => {
    return e % 2 === 0;
})
console.log(evenno)


