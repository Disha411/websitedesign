//addition of marks
//highest marks
//55 above marks

let data = [
    {
        name: "Urvish",
        marksheet: [
            {
                Subject: "English",
                marks: 50,
            },
            {
                Subject: "Maths",
                marks: 95,
            },
            {
                Subject: "Science",
                marks: 85,
            }
        ]
    }
]

// addition of all marks

/*
let totalmarks = 0
data[0].marksheet.map((e)=>{
    // console.log(e.marks);
    totalmarks = totalmarks + e.marks
})
console.log("total marks =",totalmarks)
*/


// find highest marks
/*
let max = 0;
let sub =""
data[0].marksheet.map((e)=>{
    if (e.marks > max) {
        sub = e.Subject;
        max = e.marks;
    }
});
console.log(sub)
*/


//find marks between 45 to 95

// let max = 95;
// let min = 45;

/*
data[0].marksheet.map((e) => {
    if (e.marks > min && e.marks < max) {

        num = e.marks
    }
});
console.log(num)

*/


//find all marks between 45 to 95
/*
let num = data[0].marksheet.filter((e, i) => {
   return e.marks > min && e.marks < max
})
console.log(num)

let newnum = num.map((e)=>{
    return e.marks
})
console.log(newnum)
*/




// find all marks above 55

/*
let marksabove55 = data[0].marksheet.filter((e, i) => {
    return e.marks > 55
})
console.log(marksabove55)



let newmarks=marksabove55.map((e)=>{
   return e.marks
})
console.log(newmarks)
*/
