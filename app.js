const express = require("express");
const bodyparser = require ("body-parser");
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
const path = require ('path');
const route = require("./routes/userRoutes");


const app = express();

app.use (bodyparser.json());
dotenv.config();
const PORT = process.env.PORT || 4000;
const MONGOURL = process.env.MONGO_URL;


// app.use('/add-a-product' ,  (req, res, next) =>{
//     res.sendFile(path.join(__dirname ,  'index.html'));
// });

// app.use('/store' ,  (req, res,next) =>{
//     console.log("form submitted:" , req.body );
//     res.send("your form submitted successfully");

// });

mongoose.connect (MONGOURL).then(()=>{
    console.log("Database connected successfully")
    app.listen( PORT , ()=>{
        console.log(`server is running on the port ${PORT}`)
    });
})
.catch((error) => {
    console.log (error) 
}); 


app.use("/api/user", route);