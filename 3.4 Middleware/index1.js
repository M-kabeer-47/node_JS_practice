
import bodyParser from "body-parser"
import { log } from "console"
import express from "express"


import {dirname} from "path"
import { fileURLToPath } from "url"
const dirName = dirname(fileURLToPath(import.meta.url))
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
let user = {}
app.post("/submit",(req,res)=>{
   console.log(req.body);
    
})

app.get("/",(req,res)=>{
    res.sendFile(dirName + "/public/index.html")

})
app.listen(3000,(req,res)=>{
  console.log("Server running on port 3000");
})

