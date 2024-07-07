import mongoose from "mongoose"

const movie = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    director: String,
    releaseDate: Date,
    rating: Number
})
export default mongoose.model("Movie",movie)