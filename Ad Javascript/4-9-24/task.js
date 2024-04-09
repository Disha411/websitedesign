//addition of marks
//highest marks

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


// let totalmarks = 0
// data[0].marksheet.map((e)=>{
//     // console.log(e.marks);
//     totalmarks = totalmarks + e.marks
// })
// console.log("total marks =",totalmarks)



// let max = 0;
// let sub =""

// data[0].marksheet.map((e)=>{
//     if (e.marks > max) {
//         sub = e.Subject;
//         max = e.marks;
//     }
// });
// console.log(sub)


let max = 95;
let min = 80;

data[0].marksheet.map((e) => {
    if (e.marks >= min) {
       
        min = e.marks;
    }
});
console.log(min)
