import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import profile from "./profile.js";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const secretKey = "ty%Yxd3:a";

function setUser(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    secretKey
  );
}

function getUser(token) {
  if (!token) {
    return null;
  }
  return jwt.verify(token, secretKey);
}

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allow credentials (cookies)
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

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
  let hashedPassword = await bcrypt.hash(password, 10);
  try {
    await profile.create({ email: email, password: hashedPassword });
  } catch (er) {
    console.log(er);
  }
  console.log("Registered successfully");
}

async function checkExistence(email) {
  const user = await profile.findOne({ email: email });
  return user;
}

app.post("/register", async (req, res) => {
  const { email, fullName, password } = req.body;
  let profiles = await profile.countDocuments({});
  if (profiles === 0) {
    registerProfile(fullName, email, password);
    res.send(true);
  } else if (await checkExistence(email)) {
    res.send(false);
  } else {
    registerProfile(fullName, email, password);
    res.send(true);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let email1 = email.toLowerCase();
  if (await profile.exists({ email: email1 })) {
    const user = await profile.findOne({ email: email1 });
    let storedPassword = user.password;
    let result = await bcrypt.compare(password, storedPassword);
    if (result) {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 7);
      const token = setUser(user);
      res.cookie("uid", token, {
        expires: expiryDate
      });
      res.send(true);
    } else {
      res.status(401).send("Incorrect password");
    }
  } else {
    res.status(404).send("User does not exist");
  }
});

app.get("/login", (req, res) => {
  res.send("<h1>LOGIN</h1>");
});
function authenticateToken(req, res, next) {
  const token = req.cookies.uid;
  if (token == null) {
      console.log("No auth");
      req.authenticated = false;
      next();
  }
else{
  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user;
    console.log(req.user);
    req.authenticated = true
    next()
    
  });
}
  
}
app.get("/authenticate",authenticateToken,(req,res,next)=>{
  
  if(req.authenticated===false){
    res.send(false)
  }
  else if(req.authenticated === true){ 
    res.send(true)
  }
    

  
  
})
