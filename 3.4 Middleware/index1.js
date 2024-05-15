import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const app = express();
const dir_name = dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded({extended: true}))
app.get("/",(req,res)=>{
  res.sendFile(dir_name + "/public/index.html")
})
app.post("/submit",(req,res)=>{
  console.log(req.body);
})
app.listen(3000,(req,res)=>{
  console.log("Server listening on Port 3000");
})
