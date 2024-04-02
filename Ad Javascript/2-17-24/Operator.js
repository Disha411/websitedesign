// if(10==10 || 20==10)
// {
//     console.log("=====1====");
// }


// if(10==10 || 20==20)
// {
//     console.log("=====2====");
// }

// if(10==10 && 20==10)
// {
//     console.log("=====3====");
// }

// if(10==10 && 20==20)
// {
//     console.log("=====4====");
// }


// let x="test";// ""/null/undefined/0/false

// if(x && x===1){
//     console.log("-----x----",x);
// }else{
//     console.log("nothing have x");
// }


/*
// "" -- null -- undefined - 0 - false => falsy value
let m = "10";
let m2 = 10;

console.log("----------- m == m2----------->", m == m2);
console.log("----------- m === m2 ----------->", m === m2);
*/

/*
if (10 == 10 || 20 == 10) {
  console.log("---1-->");
}
if (true || true) {
  console.log("---2-->");
}

if (true && false) {
  console.log("---3-->");
}
if (true && true) {
  console.log("---4-->");
}

 t || f = t
 f || f = f
 f && t = f
 t && t = t
*/

let x = "urvish"; // "" / null / undefined / 0 /false
if (x && x !== "test") {
  console.log("-----------  x----------->", x);
} else {
  console.log("nothing have x");
}