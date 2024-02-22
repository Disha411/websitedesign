/*
let age = 26;


if (age > 18) {
    console.log("you are allow to drink")
    if (age < 25) {
        console.log("you are allow for softdrink")
    }
    else {
        console.log("you are allow to drink alcohol")
    }
} else {
    console.log("you are not allow to drink alcohol")

}
*/


/*
let marks = 35

if (marks <= 33) {
    console.log("Student failed")
}else if (marks <= 50) {
    console.log("Student is below average")
}else if (marks <= 70) {
    console.log("Student average")
} else {
    console.log("Student is brillient")
}
*/






let marks = 32

switch (marks) {
    case (marks <= 33):
        console.log("Student is failed")
        break;

    case (marks <= 50):
        console.log("Student is below average")
        break;

    default:
        console.log("Student is good")
        break;
}


