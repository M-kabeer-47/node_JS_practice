import express from "express";
import {dirname} from "path"
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const dir_name = dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded({extended: true}))
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
app.get("/",(req,res)=>{
  res.sendFile(dir_name + "/public/index.html")
})
app.post("/submit",(req,res)=>{
  const {street,pet} = req.body
  res.send(`<h1>Your band name is</h1>
  <h2> ${street + " " + pet}
  `)
  
})