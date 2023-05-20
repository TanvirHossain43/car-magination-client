import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../LayOut/Alltoys/AllToys";
import ViewDetails from "../LayOut/ViewDetails/ViewDetails";
import AddToy from "../Pages/AddToys/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path:'addatoy',
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path:'mytoys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },

      {
        path: 'alltoys',
        element: <AllToys></AllToys>,
      },
      {
        path: 'viewdetails/:id',
        element:<PrivateRoute> <ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/alltoys/${params.id}`)
      }
    ]
  },
]);


export default router;