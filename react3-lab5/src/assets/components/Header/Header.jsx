import Headermen from "./Headermen";
import HeaderAccount from "./HeaderAccount";
import { useState } from "react";
import { Search } from "react-feather";
import { Usercontext } from "../../context/Usercontext";
import { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Header.css";

export default function Header () {

const [formVal,setVal]=useState("")
const[,setSearchParam]=useSearchParams()
const {user}= useContext(Usercontext)


const handleSubmit = (e) => {

e.preventDefault ();
setSearchParam({search:formVal})



}


return (

<header
className= {`header-container ${user.isDarkMode ? "dark-mode" : "light-mode"}`}

>
<Link to="/">
    <h1 className={user.isLoggin ? "loggin-title" : ""}>MiTienda</h1>
</Link>
<Headermen/>
<form onSubmit={handleSubmit}>
<input
className="busc-input"
type="text"
placeholder="Buscando productos"
value={formVal}
onChange={(e)=> setVal(e.target.value)}


/>

<button
className="boton-header"
type="submit"
>
<Search size={18}/>
</button>
</form>
<HeaderAccount/>

</header>



)


}