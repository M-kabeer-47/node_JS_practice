import express from "express"
import cors from "cors"
import axios from "axios";

const app = express();
const PORT = 5173;

app.use(cors());

app.post('/register', async (req, res) => {
  try {
    const response = await axios.post('https://secrets-api.appbrewery.com/register', req.body);
    res.json(response.data);
    console.log(res.json);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

app.post('/get-auth-token', async (req, res) => {
  try {
    const response = await axios.post('https://secrets-api.appbrewery.com/get-auth-token', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
