function checkPalindrome(str) {
    
    //   let str = "maam";
    let loopCount = Math.trunc(str.length / 2);
    let result = "string is palindrome";
    
    for (let i = 0; i < loopCount; i++) {
      let firstCh = str[i];
      let lastIndex = str.length - 1 - i; // to manage deference between index and length  - index start with 0 and length count is start with 1 so we need to remove 1 from length to manage that 1 gap between index and length

      let lastCh = str[lastIndex];
      console.log("-----------  lastCh----------->", lastCh);
      console.log("-----------  firstCh----------->", firstCh);
      
      if (firstCh !== lastCh) {
        result = "string is not pelendroms";
        break;
      }
    }
    return result;
  }
 
 
  let xyz = checkPalindrome("maamq");
  console.log("-----------  xyz----------->", xyz);