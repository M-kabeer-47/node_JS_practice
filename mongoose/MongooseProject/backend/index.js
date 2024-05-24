import express from "express"
import mongoose, { mongo } from "mongoose";
import bodyParser from "body-parser"
import profile from "./profile.js";
import cors from "cors";
const app =express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/testdb").then(()=>{
    console.log("Database connected");
})

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.listen(3000,()=>{
    console.log("Server listening on Port 3000");
})
async function registerProfile(fullName,email,password){
    console.log("check");
    await profile.create({fullName: fullName,email: email,password: password})
    console.log("Registered successfully");
    
}
async function checkExistence(email) {
    console.log("Checking existence");
    const user = await profile.findOne({ email: email });
    console.log(user);
    return user;
}

 app.post("/register",async(req,res)=>{
    const {email,fullName,password} = req.body;
    let profiles= await profile.countDocuments({})
    console.log(profiles);
    if(profiles === 0){
        registerProfile(fullName,email,password)
        res.send("true")
    }
    else if( await checkExistence(email) ){
        console.log("User already registered");
        res.send("false");
    }
    else{
        
       registerProfile(fullName,email,password)
       res.send("true")
    }
    
})
