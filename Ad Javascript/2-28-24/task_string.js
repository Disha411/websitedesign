// task1
// let personname = "urvish"
// let newStr = ""
// let i

// // //ans =>  name[0] = "u_r_v_i_s_h"

// for (let i = 0; i < personname.length; i++) {

//     newStr = newStr + personname[i] 
//     if (i !== personname.length - 1) {
//         newStr += "_";
//     }
// }

// console.log("New string is :" +newStr);




//task2 => u_v_s_
let personname = "urvish"
let newStr = "";


for (let i = 0; i < personname.length; i++) {

    if (i %2 === 0) {
        newStr = newStr + personname[i]
    }else{
        newStr += "_"

    }
}

console.log("New string is :" + newStr);




// u_v_sh
// r_vi
// ravis =>r_v_s
// for (let i = 0; i < name.length; i++) {
//   console.log("-----------   name[i]----------->", name[i]);
// }