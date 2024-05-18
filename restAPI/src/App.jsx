import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [res, setRes] = useState("");

  useEffect(() => {
    axios.post("http://localhost:3000/addUser")
      .then((response) => {
        setRes(response.data);
      }) 
}, [res])

  return (
    <>
    <div>{res}</div>
    <form action="post">
    <button formAction="add/User">Add User</button>
    </form>
    <div></div>
    </>
  );
}
