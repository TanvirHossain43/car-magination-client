import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../LayOut/Alltoys/AllToys";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<SignUp></SignUp>
        },
        {
          path:'alltoys',
          element:<AllToys></AllToys>,
          loader:()=> fetch('http://localhost:5000/alltoys')
        }
      ]
    },
  ]);


  export default router;