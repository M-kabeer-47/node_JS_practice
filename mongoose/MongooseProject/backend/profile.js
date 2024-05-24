import mongoose from "mongoose";
const profileSchema = mongoose.Schema({
    fullName: String,
    email: {
        type:String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})
export default mongoose.model("Profiles",profileSchema);