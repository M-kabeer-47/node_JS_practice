
import data from "./MOCK_DATA.json" assert { type: "json" };
import express, { json } from "express"
const server = express();
let PORT = 3000
server.listen(PORT,(req,res)=>{
    console.log(`Server listening on Port ${PORT}`);
})
server.use(express.urlencoded({extended: false}))
server.get("/users",(req,res)=>{
    const html = `
    <ul>
    ${data.map(user=>{
        return `<li>${user.first_name+" "+user.last_name}</li>`
    }).join("")}}
    </ul>
    `
    res.send(html);
})
server.get("/user/:id",(req,res)=>{
    const id = Number(req.params.id);
    console.log(id);
    const user =data.find(user=>{
        return id===user.id
    }
        
    )
    
    res.send(`<li>${JSON.stringify(user.first_name)}</li>`)
})

server.post("/createUser",(req,res)=>{
    console.log(req.body);
})