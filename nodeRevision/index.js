import express from "express"
const server = express();

server.listen(3000,(req,res)=>{
    console.log("Server listening on port 3000");
    
})
server.get("/",(req,res)=>{
    console.log("BADO BADI");
})
