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
    await axios.get("http://localhost:3002/getAPIkey")
  }
  
  function handleClick(button){
    switch (button){
      case "1":
       noAuth();

       case "2":
        basicAuth();
        case "3":
          APIkey();
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
      <button>Token Auth</button>

      <p>
        {content}
      </p>
    </div>

  );
}
