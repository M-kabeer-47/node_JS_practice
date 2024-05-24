import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login.jsx'
import Register from './Register.jsx'
const router = createBrowserRouter([
 {
 path:"/",
element: <App />
 },
 {
  path: "/Login.jsx",
  element: <Login />
 },{
  path: "/Register.jsx",
  element: <Register />
 },{
  path: "/Login.jsx/Register.jsx",
  element: <Register />
 }
 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    
  </React.StrictMode>,
)

