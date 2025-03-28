require("dotenv").config();
const express =require("express");
const connectDB = require("./config/db");
const app =express();

connectDB();
const PORT = process.env.PORT || 8000

app.get("/", (req,res)=>{
    res.send("CFLOW Backend is running...");
});
app.listen(PORT,() =>console.log(
    `Server is running on port ${PORT}`
));