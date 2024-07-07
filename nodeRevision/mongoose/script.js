import mongoose from "mongoose";
import Movie from "./Movie.js"
async function connectDatabase(){
    await mongoose.connect("mongodb://localhost/testdb")
    console.log("Database connected");

}
connectDatabase();
const movie =  await Movie.create({
    name: "Blade Runner 2079",
    director: "Mathew Jameison",
    releaseDate: "2024-12-11"
})

const movies = await Movie.find();
console.log(movies);



