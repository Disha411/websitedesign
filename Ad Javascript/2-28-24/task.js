// task
// console.log("today is 28,february 2024 - Wednesday");

let today = new Date();
let dayNum = today.getDay();
let month_num = today.getMonth()


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
    console.log(`Today is ${today.getDate()},${month[month_num]} ${today.getFullYear()} - ${weekDay[dayNum]}`);
}
printday()
