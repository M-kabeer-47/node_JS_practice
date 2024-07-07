import express from "express";
import mongoose, { mongo } from "mongoose";
import bodyParser from "body-parser";
import profile from "./profile.js";
import cors from "cors";
import bcrypt from "bcrypt";
import { Result } from "antd";

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/testdb").then(() => {
  console.log("Database connected");
});

app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(3001, () => {
  console.log("Server listening on Port 3001");
});
async function registerProfile(fullName, email, password) {
  console.log("check");
  console.log(password);
  let hashedPassword = await bcrypt.hash(password, 10);
  try {
    await profile.create({ email: email, password: hashedPassword });
  } catch (er) {
    console.log(er);
  }

  const userq = await profile.find({
    fullName: fullName,
    email: email,
    password: password,
  });
  console.log(userq);
  console.log("Registered successfully");
}
async function checkExistence(email) {
  console.log("Checking existence");
  const user = await profile.findOne({ email: email });
  console.log(user);
  return user;
}

app.post("/register", async (req, res) => {
  const { email, fullName, password } = req.body;
  let profiles = await profile.countDocuments({});
  console.log(profiles);
  if (profiles === 0) {
    registerProfile(fullName, email, password);
    res.send(true);
  } else if (await checkExistence(email)) {
    console.log("User already registered");
    res.send(false);
  } else {
    registerProfile(fullName, email, password);
    res.send(true);
  }
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let email1 =  email.toLowerCase()
    console.log(email1);
  if (await profile.exists({ email: email1 })) {
    
    const user = await profile.findOne({ email: email1 });
    let storedPassword = user.password;
    let result = await bcrypt.compare(password, storedPassword);
    console.log(result);
    if (result) {
      console.log("Logged in successfully");
    } else {
      console.log("Incorrect password");
    }
  } else {
    console.log("Doesnt exist");
  }
});

console.log(await profile.find());
