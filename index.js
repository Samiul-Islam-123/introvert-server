//imports
const express = require('express');
const dotenv = require('dotenv')

//custom files
const ConnectToDataBase = require('./DataBase/Connection');
const SignupRoute = require('./Routes/AuthRoutes/Signup');
const LoginRouter = require('./Routes/AuthRoutes/Login');

const app = express();

//middlewares
app.use(express.json());
dotenv.config();

//routes

app.get('/', (req,res)=>{
    res.json({
        success : true,
        message : "Hellow, Server is up and running"
    })
})

//custom routes
app.use('/auth', SignupRoute);
app.use('/auth', LoginRouter);


//starting server
const PORT = 5500;
app.listen(PORT, async()=>{
    await ConnectToDataBase();
    console.log("Server is up and running on PORT : "+PORT);
})