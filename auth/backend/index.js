import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.listen(3002,()=>{
    console.log("Server listening on Port 3002");
})
app.get("/noAuth",async (req,res)=>{
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    res.send(response.data);
    console.log(response.data);
})
app.get("/basicAuth",async(req,res)=>{
    // const response = await axios.post("https://secrets-api.appbrewery.com/register",{
    //     username: "Josh23",
    //     password: "127"
    // })
    // console.log(response.data);
    const response2 = await axios.get("https://secrets-api.appbrewery.com/all?page=1",{
        auth:{
            username: "Josh23",
            password: "127"
        }
    })

    console.log(response2);
    res.send(response2.data)
    
})
app.get("/getAPIkey",async (req,res)=>{
    const response3 = await axios.get("https://secrets-api.appbrewery.com/generate-api-key");
    console.log(response3.data);
})