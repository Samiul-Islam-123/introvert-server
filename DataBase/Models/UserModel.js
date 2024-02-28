const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    username : String,
    email : String,
    password:String,
    verified : Boolean,
    profileURL : String,
    otp : {
        value : Number,
        expTime : Number
    },
    profile : {
        followers : [{
            type : mongoose.Schema.ObjectId,
            ref : "user"
        }],

        following : [{
            type : mongoose.Schema.ObjectId,
            ref : "user"
        }]
    }
})

const UserModel = new mongoose.model('user', Schema);
module.exports = UserModel;