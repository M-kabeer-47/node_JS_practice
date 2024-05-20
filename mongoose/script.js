import mongoose from "mongoose";
import User from "./User.js";
mongoose.connect("mongodb://localhost/testdb").then(()=>{
    console.log("Database connected");
})
// async function deleteYasir(){
//     await User.deleteMany({name: "Yasir"})
// }

// deleteYasir();

User.create({name: "Yu2", hobbies: ["Swimming","Gaming"],email:"angelaYu@gmail.com"})
