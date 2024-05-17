import express from "express"
import cors from "cors"
import axios from "axios";
import {dirname} from "path"
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;
const dirName = dirname(fileURLToPath(import.meta.url))
app.use(cors());
app.use(express.json());  // Middleware to parse JSON bodies

// app.get("/",(req,res)=>{
//   res.sendFile(dirName + "/App.jsx")
// })
app.post('/postSecret', async (req, res) => {
  try {
    const response = await axios.post('https://secrets-api.appbrewery.com/secrets',req.body);
    res.json(response.data);
    console.log(res.json);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

app.post('/addUser', async (req,res)=>{
  try{
    const response = await axios.post("https://secrets-api.appbrewery.com/register",{
    username: "abdulSami",
    password: "123"
  })
  res.json({
    msg: response.data
  });
  console.log(response.data);
  }
  catch(error){
    console.log("Couldn't add a user");
  }
  
  
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
