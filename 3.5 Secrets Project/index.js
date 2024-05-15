//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express"
import {dirname} from "path"
import { fileURLToPath } from "url"
import bodyParser from "body-parser"

const app = express();
const dirName = dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded({extended: true}))
app.listen(3000,(req,res)=>{
    console.log("Server running");
})
app.get("/",(req,res)=>{
    res.sendFile(dirName + "/public/index.html")
    // res.send("Hello")
})
app.post("/check",(req,res)=>{
    const {password} = req.body;
    if(password === "ILOVEPROGRAMMING"){
        res.sendFile(dirName + "/public/secret.html")
    }
    else{
        res.sendFile(dirName + "/public/index.html")
    }
})