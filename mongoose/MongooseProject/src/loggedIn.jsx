import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Loggedin() {
    const [loggedin, setLoggedin] = useState(false);
    const navigate = useNavigate();
    const { user, isAuthenticated, isLoading,logout } = useAuth0();
    console.log(user)
    return(
        <>
        {isAuthenticated? <h1>Hi {user.nickname}</h1>:
         <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
         Log Out
       </button>}
        </>
    )

}