const mongoose = require('mongoose');

const ConnectToDataBase = async()=>{
    try{
        const url = process.env.DATABASE_URL;
        console.log("Connecting to Database...");
        await mongoose.connect(url);
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("Error occured during DataBase connection : \n"+error);
    }
}

module.exports = ConnectToDataBase;