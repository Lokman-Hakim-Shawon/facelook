import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Mainlayout from './Mainlayout/Mainlayout';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout/>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />

  </React.StrictMode>,
)
