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
import UpdateDetails from "../components/UpdateDetails/UpdateDetails";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";


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
        path: 'addatoy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: 'mytoys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },

      {
        path: 'alltoys',
        element: <AllToys></AllToys>,
      },

      {
        path: 'viewdetails/:id',
        element: <PrivateRoute> <ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://car-toys-server.vercel.app/alltoys/${params.id}`)
      },
      {
        path: 'updatedetails/:id',
        element: <PrivateRoute><UpdateDetails></UpdateDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://car-toys-server.vercel.app/alltoys/${params.id}`)

      },

    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);


export default router;