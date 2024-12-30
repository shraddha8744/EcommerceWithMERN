const express = require("express")
require("dotenv").config()
const connection=require("./database/connection.js")


const app=express()
app.use(express.json())
connection()


const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log("server started at ",port);
    
})