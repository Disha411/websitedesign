
// let arr = [1, 2, 4, 7, 2, 3, 4];
  
// let big = 0;
// for (let i = 0; i <= arr.length; i++) {
//   if ((big>arr)) {
//     console.log("arr is maximum")    
// } else {
//     console.log("big is maximum") 
// }
// }

function findMinMax() {
  let arr = [1, 2, 4, 7, 2, 3, 4];

  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);
   
  console.log("Minimum element is:" + minValue);
  console.log("Maximum Element is:" + maxValue);
}

findMinMax()