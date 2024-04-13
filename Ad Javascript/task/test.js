
function generateOTP() {

    let otp = "";
    otp =  Math.floor(Math.random() * 10000000);
    return otp
}

let sevenDigitOTP = generateOTP();

console.log(sevenDigitOTP); 