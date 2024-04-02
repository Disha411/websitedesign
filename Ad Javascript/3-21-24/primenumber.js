var number = 10
// var number = 7

if (number == 1){
    console.log(`${number} is neither prime or composite number`);
}else if (number < 1) {
    console.log(`${number} is not a prime number`);
}else{
    for (i = 2; i < number; i++) {
        if (number % i == 0 || number === 7) {
            var res = `${number} is not a prime number`
            break;
        }else{
            var res = `${number} is a prime number`
        }  
    }
    console.log(res);
}