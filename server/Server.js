const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.status(200).send("hello welcome in mern world");

})

app.get("/register", (req, res)=>{
    res.status(200).send("hello this is my 2nd api Naeem, now you can move to backend" )

})

const port= 5000;
app.listen(port, ()=>{
    console.log("my server is running");
})