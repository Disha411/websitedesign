setTimeout(() => {
    console.log("-------setTimeOut------");
  }, 5000);
  
  let id = setInterval(() => {
    console.log("-----------  setInterval----------->");
  }, 2000);
  
  console.log("------");
  setTimeout(() => {
    clearInterval(id);
  }, 10000);
  
  