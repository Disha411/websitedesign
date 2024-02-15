// single thing multy details
let person = {
    name: "uv",
    age: 23,
  };

  console.log(person);
  
 
 
 
  // let x =
  let obj = {
    str: "hello world",
    num: 123,
    nul: null,
    und: undefined,
    bol: true,
    arr: [10, 20, 30, 40],
    object: { city: "surat", pin: { a: 20, b: 50 } },
    print: function (params) {
      console.log("---print--->");
    },
  };
  
  let x = [1, 2, 3, 4];
  console.log("-----------  x[2]----------->", x[2]);
  
  console.log(obj.str);
  console.log(obj.und);
  console.log(obj.object.city);
  console.log(obj.object.pin.b);
  console.log(obj.arr[2]);
  
  obj.print();
  
  
  