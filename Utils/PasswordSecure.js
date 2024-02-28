const bcrypt = require('bcrypt');

const SecuredPassword = async(password)=>{
    //perfoming password hashing
    let salt =await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

const VerifyPassword = async(testPassword, hashedPassword)=>{
    if(bcrypt.compare(testPassword, hashedPassword))
        return true;

    else
        return false;
}

const generateOTP = ()=>{
   // Generate two random numbers between 0 and 999
   let first = Math.floor(Math.random() * 1000);
   let second = Math.floor(Math.random() * 1000);

   // Concatenate the two numbers and ensure it is a 6-digit number
   let OTP = parseInt(("" + first + second).slice(0, 6)); // Take only the first 6 digits
    
   //set expiry time as 5 mins
   let expTime = new Date().getTime() + 5;


    return {value : OTP, expTime : expTime}
    
}

module.exports = {SecuredPassword, VerifyPassword, generateOTP};