import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Middle from "../Components/Middle/Middle";


const Router =createBrowserRouter([
        {
            path:'/',
            element: <Home></Home>,
            children:[
                {
                    path:"/",
                    element: <Navigate to={"/category/01"}></Navigate>,
                },
                {
                    path:'/category/:id',
                    element: <Middle></Middle>,
                    loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                },
            ],
        },
        {
            path:'about',
            element:<About></About>
        },
        {
            path:'career',
            element:<Career></Career>
        }

])
   

export default Router;