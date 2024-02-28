// task
// console.log("today is 28,february 2024 - Wednesday");

let today = new Date();
let dayNum = today.getDay();
let monthnum = today.getMonth()


let weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let month = [
    "january", "february", "march", "april", "may"
]


function printday(params) {
    console.log(`today is ${today.getDate()},${month[monthnum]} ${today.getFullYear()} - ${weekDay[dayNum]}`);
}
printday()
