import mongoose from "mongoose";
const addressSchema = new mongoose.Schema({
    street :String,
    city : String,
    zipCode: Number
})
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    hobbies: [String],
    address: addressSchema
    
})
export default mongoose.model("User",userSchema);