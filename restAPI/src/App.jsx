import { useState } from "react";
import "./index.css"
import axios from "axios";
// import express from "express";

export default function App() {

  const [id,updateID] = useState()
  const [secret,updateSecret] = useState()
  const [score,updateScore] = useState()
  const [token,updateToken] = useState()
  async function getByID(){
    const res =  await axios.post("https://secrets-api.appbrewery.com/register",{
      username: "AbdulBari",
      password: "123"
    })
    console.log(res.data);
   let token =  await axios.post("https://secrets-api.appbrewery.com/get-auth-token",{
      username: "AbdulBari",
      password: "123"

  }  
    )
    console.log(token.data);
    updateToken(token.data);
    
    const activity = await axios.get(`https://secrets-api.appbrewery.com/secrets/${id}`)
    
  }
  function onchange(e){
    const {name,value} = e.target;
    switch(name){
      case "id":
        updateID(value)
        break;
    

    case "secret":
      updateSecret(value);
      break;

      case "score":
        updateScore(value)
  }
  

}
function onSubmit(e){
  e.preventDefault();
}
  return (
    
    <div className="container">
      
      <div className="content">
        <p></p>
      </div>

      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">ID</label>
        <input type="text" name="id" onChange={onchange} />
        <label htmlFor="">Secret</label>
        <input type="text" name="secret" onChange={onchange} />
        <label htmlFor="">Score</label>
        <input type="number" name="score" onChange={onchange}/>
        <div className="buttons">
          <button className="get">Get</button>
          <button className="post">Post</button>
          <button className="put">Put</button>
          <button className="patch">Patch</button>
          <button className="delete" onClick={getByID} onSubmit={onSubmit}>Delete</button>
        </div>
      </form>
    </div>
  );
}
