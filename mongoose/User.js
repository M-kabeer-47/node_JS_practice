import mongoose from "mongoose";
const addressSchema = new mongoose.Schema({
    street :String,
    city : String,
    zipCode: Number
})
const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 10,
        max: 50,
        default: ()=> 42
    },
    email: {
        type : String,
        required: true,
        lowercase: true
    },
    hobbies: [String],
    address: addressSchema
    
})
export default mongoose.model("User",userSchema);