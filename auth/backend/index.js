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
    const response2 = await axios.get("https://secrets-api.appbrewery.com/all?page=1",{
        auth:{
            username: "Josh23",
            password: "127"
        }
    })

    console.log(response2.data);
    res.send(response2.data)
    
})
app.get("/getAPIkey",async (req,res)=>{
    const response3 = await axios.get("https://secrets-api.appbrewery.com/generate-api-key");
    let apiKey = response3.data.apiKey
    const response4 = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${apiKey}`)
    res.send(response4.data);

})
app.get("/getToken", async (req, res) => {
    
        // First API call to get the token
        const authResponse = await axios.post("https://secrets-api.appbrewery.com/get-auth-token", {
                username: "Josh23", 
                password: "127"
            
        });

        // Extract the token from the response
            let token = authResponse.data.token;
            const secretsResponse = await axios.get("https://secrets-api.appbrewery.com/secrets/2", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        console.log("Secrets received:", secretsResponse.data);
        res.send(secretsResponse.data)

        // Second API call to get the secrets using the token
       
});


