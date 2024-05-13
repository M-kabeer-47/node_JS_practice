import express from "express";
const app = express();

app.get("/aboutus", (req, res) => {
    res.send("<h1>About Us</h1>")

});

app.listen(3000, () => {
    console.log("Server is running on Port 3000");
});
