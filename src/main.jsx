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
import Videopage from './pages/Videopage';
import Groups from './pages/Groups';
import Shop from './pages/Shop';
import Friends from './pages/Friends';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/video',
        element:<Videopage/>
      },
      {
        path:'/groups',
        element:<Groups/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/friends',
        element:<Friends/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />

  </React.StrictMode>,
)
