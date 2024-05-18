import axios from 'axios';
import React, { useState } from 'react';


export default function App() {
  const [username,updateUsername] = useState();
const [password,updatePassword] = useState();
function handleChange(e){
  const {name,value} = e.target;
  switch (name){
    case "username":
      updateUsername(value)
      break;
  
  case "password":
    updatePassword(value)
    break;
}
}
function handleSubmit(e){
  e.preventDefault()
}
  return (
    <>
      <div className="login-card">
        <div className="card-header">
          <div className="log">Login</div>
        </div>
        <form onSubmit={handleSubmit}> 
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input required name="username" id="username" type="text" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input required name="password" id="password" type="password" onChange={handleChange} />
          </div>
          <div className="form-group">
            <input value="Login" type="submit" onClick={async ()=>{
              const response = await axios.post("http://localhost:3001/addUser",{
                username,
                password
              })
            }}/>
          </div>
        </form>
      </div>
    </>
  );
}
