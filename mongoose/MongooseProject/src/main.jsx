import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Loggedin from "./loggedIn.jsx"
import { Auth0Provider } from '@auth0/auth0-react';
const router = createBrowserRouter([
 {
 path:"/",
element: <App />
 },
 {
  path: "/Login",
  element: <Login />
 },{
  path: "/Register",
  element: <Register />
 },
 {
  path: "/Loggedin",
  element: <Loggedin />
 }

 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Auth0Provider
    domain="dev-f2x1w4icxxh4018c.us.auth0.com"
    clientId="74kydSLdSK1wTHlZu92C3H3ZisHGqSD2"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/Loggedin"
    }}
  >
    <RouterProvider router={router}>
   

    <App />
    
    </RouterProvider>
    </Auth0Provider>
    
    
    
  </React.StrictMode>,
)

