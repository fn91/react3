/* eslint-disable no-unused-vars */
import Layout from "../assets/components/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import MainContent from "../assets/components/content/MainContent";
import Login from "../assets/components/Login/Login";
import Protected from "../assets/components/Protected/ProtectedRoute";
import ShopCard from "../assets/components/ShopCard/ShopCard";
import DetailsProducts from"../assets/components/DetailsProducts/DetaProdu";
import Fail from "../assets/components/fail/fail";

export const router = createBrowserRouter([


{
    path: "/",
    element:<Layout/>,
    children:[

        {
            path: "/",
            element:<MainContent/>


        },

        {
            path: "/product/:id",
            element:(
                <Protected>

                <DetailsProducts/>


                </Protected>


            ),


        },

        {
            path: "/cart",
            element: (
            <Protected>
            <ShopCard/>

            </Protected>
            ),


        },

        {
            path: "/login",
            element:<Login/>


        },

    ],
    
},


{
    path: "*",
    element:<Fail />,
  },


 



])
