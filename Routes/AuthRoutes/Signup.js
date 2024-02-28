const UserModel = require('../../DataBase/Models/UserModel');

const SignupRoute = require('express').Router();
const { SecuredPassword, generateOTP } = require('./../../Utils/PasswordSecure')
const sendEmail = require('../../Utils/Email')



SignupRoute.post('/signup', async (req, res) => {
    const { username, email, password, profileURL } = req.body;
    if (!username || !email || !password) {
        res.json({
            success : false,
            message : "All fields missing"
        })
    }


    else {
        //check for previous user
        const prevUsers = UserModel.findOne({
            email : email
        })

        if(prevUsers){
            res.json({
                success : false,
                message : "Email already exists"
            })
        }
        else{

            try {
                //encrypting password
                const encryptedPassword = await SecuredPassword(password);
                const OTP = generateOTP();
                console.log(OTP)
                const currentUser = new UserModel({
                    username: username,
                    email: email,
                    password: encryptedPassword,
                    verified: false,
                    profileURL: profileURL,
                    otp: {
                        value: OTP.value,
                        expTime: OTP.expTime
                    }
    
                })
    
                //send verification mail to user
                await sendEmail(email, "OTP verification",
                    `
        Subject: OTP Verification
    
        Dear ${username},
    
        Thank you for registering with our service. To complete your registration and ensure the security of your account, please enter the following One-Time Password (OTP):
    
        ${OTP.value}
    
        This OTP is valid for 5 minutes.
    
        If you did not request this OTP, please disregard this email.
    
        Thank you,
    
        Team Introvert
    
    `)
    
                //save user data
                await currentUser.save();
    
                res.json({
                    success: true,
                    message: "Sign up successful"
                })
            }
            catch (error) {
                console.log("Error during sign up : " + error);
                res.json({
                    success: false,
                    message: "Error occured during Signup process"
                })
            }

        }
    }
})

module.exports = SignupRoute;