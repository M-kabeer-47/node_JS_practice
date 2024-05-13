import express from "express"
const app =express();
app.listen(3000,()=>{
    console.log("Server listening on Port 3000");
})
app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>")
})
app.post("/register", (req,res)=>{
    res.sendStatus(201);
})
app.put("/user/Angela",(req,res)=>{
    res.sendStatus(200)
})
app.patch("/user/Angela", (req,res)=>{
    res.sendStatus(200)
})
app.delete("/user/Angela",(req,res)=>{
    res.sendStatus(200)
})