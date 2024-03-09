import "./HeaderAccount.css";
import { ShopCard, Heat, User, Tie, Pick } from "react-feather";
import { useContext } from "react";
import { Usercontext } from "../../context/Usercontext";
import { Link } from "react-router-dom";


export default function HeaderAccount () {


const {user,setUser}=useContext(Usercontext)


const handleThem= ()=> {

    setUser ({

        ...user,
        isDarkMode:!user.isDarkMode


    })
}
return(

<ul className="cuenta">
<li>
<Link to="/login">

{

<User
style={{strokeDashoffset:3}}
size={15}
color={
    user.isLoggin
    ? user.isDarkMode
    ?"yellow"
    :"yellow"
    :user.isDarkMode
    ?"black"
    :"white"
}


/>

}


</Link>

</li>

<li>
    <Heat size={20}/>
    
</li>
<li onClick={handleThem}>
{!user.isDarkMode ? <Tie size={15}/>: <Pick size={20} />}

</li>
<li className="notificacion.cart">
<Link to ="/cart">
<ShopCard size={20}/>
</Link>
{user.shoppingCartItems.length !== 0 && (
          <span className="notification-circulo">
            {user.shoppingCartItems.length}
            </span>
)}
</li>


</ul>




)




}