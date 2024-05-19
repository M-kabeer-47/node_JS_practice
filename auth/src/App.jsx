import axios from "axios";
import { useState } from "react";

export default function App() {
  const [content,changeContent] = useState();
 async function noAuth(){
    try{
      const response = await axios.get("http://localhost:3002/noAuth")
      console.log(response.data);
      changeContent(JSON.stringify(response.data))

    }
    catch(error){
      console.log(error);
    }
  }
  async function basicAuth(){
    const response = await axios.get("http://localhost:3002/basicAuth")
    console.log(response.data);
    changeContent(JSON.stringify(response.data));
    
  }
  async function APIkey(){
    const response = await axios.get("http://localhost:3002/getAPIkey")
    console.log(response.data);
    changeContent(JSON.stringify(response.data));
  }
  async function getToken(){
    const response = await axios.get("http://localhost:3002/getToken")
    console.log(response.data);
    changeContent(JSON.stringify(response.data));
  }
  
  
  function handleClick(button){
    switch (button){
      case "1":
       noAuth();
       break;

       case "2":
        basicAuth();
        break;
        case "3":
          APIkey();
          break;
        case "4":
          getToken();
          break;
    }
    

    
  }
  return (
    <div className="buttons">
      <button onClick={()=>{
        handleClick("1");
      }}>No Auth</button>
      <button onClick={()=>{
        handleClick("2")
      }}>Basic Auth</button>
      <button onClick={()=>{
        handleClick("3")
      }}>Api Key Auth</button>
      <button  onClick={()=>{
        handleClick("4")
      }}>Token Auth</button>

      <p>
        {content}
      </p>
    </div>

  );
}
