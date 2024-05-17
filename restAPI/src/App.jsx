import axios from "axios";
import { useState } from "react";

export default function App() {
    const [res, setRes] = useState("");

  const addUserHandler = async () => {
    try {
      const response = await axios.post("http://localhost:3000/addUser");
      console.log(response.data.msg);
      setRes(response.data.msg)
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <>
    <form action="post">
    <button formAction="add/User" onClick={addUserHandler}>Add User</button>
    </form>
    <div>{res}</div>
      
    </>
  );
}
