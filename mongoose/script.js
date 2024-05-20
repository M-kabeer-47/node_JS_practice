import mongoose from "mongoose";
import User from "./User.js";
mongoose.connect("mongodb://localhost/testdb").then(()=>{
    console.log("Database connected");
})
// async function deleteYasir(){
//     await User.deleteMany({name: "Yasir"})
// }

// deleteYasir();
try{
    const users = await User.find({name: {$in: ["Samad","Ali"]}, age: {$gt: 10}
})
console.log(users);
}
catch(e){
    console.log(e.message);
}

