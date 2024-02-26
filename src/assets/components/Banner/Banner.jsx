import { useContext } from "react";
import { useLocation } from "react-router-dom";
import {UserContext} from "../..context/UserContext";
import "./Banner.css";


export default function Banner (){

const {user }=useContext(UserContext);
const location =useLocation ()
const route =location.pathname.split ("/")[1];


const banner = () => {

    if (user.isLoggin && route=== ""){
        return <p>{user.name},aprovecha de tu 20% de descuento!</p>
    }else if (!user.isLoggin && route == "login"){
         return <p>Inicia sesion para disfrutar de nuevos descuentos</p>   
    }else if  (user.isLoggin && route == "cart"){
        return <p>{user.name},se aplicaran el 20% descuento al finalizar la compra </p>

    } else {
        return <p>! 20% de descuento para nuevos usuarios que compren !</p>


    }


    }

    return <div className="bannerespecial">{banner()}</div>

    } 











