const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const app=express()

app.get("/", (req, res) => {
    console.log("server running.....");
    res.send("Hello from Express!");
});

app.listen(process.env.PORT,()=>{
    console.log(`connected on port ${process.env.PORT}`)
})