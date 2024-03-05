/* eslint-disable react/prop-types */

import {UserContext} from "../..context/UserContext"
import {useContext}from "react";
import {Navigate,useLocation} from "react-router-dom"

export default function ProtectedRoute ({children}) {

const {user}= useContext (UserContext)
const location =useLocation ()


return user.isLoggin ? (
    children
): (

<Navigate 
to="/login"
state={location}
/>
)



}


