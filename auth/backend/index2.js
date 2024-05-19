import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(3002, () => {
    console.log("Server listening on Port 3002");
});
 
app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        res.send(response.data); // Send response data to the client
        console.log(response.data); // Log response data
    } catch (error) {
        console.error("Error:", error.message); // Log any errors
        res.status(500).send("Internal Server Error"); // Send a 500 error response to the client
    }
});
