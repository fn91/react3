import "./Footer.css"
import {Usercontext} from "../../context/Usercontext"
import { useContext } from "react"

export default function Footer (){

const {user} = useContext (Usercontext)
return (
<footer
className={`footer-conte ${user.isDarkMode ? "dark-mode": "light-mode"}`}

>
<div className="footer-princi">
<ul>
<li>Contacto</li>
<li>Email:correoemail.com</li>
<li>Telefono Contacto</li>
</ul>
<ul>
  <li>Redes Sociales</li>
  <li>Facebook</li>  
  <li>Twitter</li>
  <li>Instagram</li>
</ul>

<ul>
  <li>Dirección</li>
  <li>Calle: </li>  
  
  <li>Ciudad:</li>
</ul>

</div>
<p> © 2023 MiTienda todos los derechos reservados</p>
</footer>
)



}