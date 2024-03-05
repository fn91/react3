import "./Login.css"
import { useContext } from "react"
import { useNavigate,useLocation } from "react-router-dom"
import {UserContext} from "./context/UserContext"
import Formulario from "../../hooks/Formulario"

export default function LoginForm () {
const {user,setUser}=useContext(UserContext);
const {formula,setName,setEmail,renew}=Formulario()
const navigate =useNavigate()
const location =useLocation()


const handleSubmit = (e) => {

e.preventDefault()


if (user.isLoggin){
setUser({

... user,
isLoggin: false,
role: "user",

});
navigate ("/")


} else if (!user.isLoggin) {
if (!formula.name || !formula.email) {
alert ("Rellena los campos");
return;


}

const useEmail=formula.email.trim()
const role= useEmail.includes ("@admin") ? "admin": "user";

setUser({
... user,
... formula,
isLoggin:true,
role,


})

renew ();
navigate(location.state?.pathname)

}



}


return (
<formula
onSubmit= {handleSubmit}
className="loggin-formulario"

>
    {!user.isLoggin(
<>
<label htmlFor="name">Nombre</label>
<input
type="text"
name="name"
id="name"
value={formula.name}
onChange={(e)=>setName(e.target.value)}
/>

<label htmlFor="email">Email</label>
<input
type="email"
name="email"
id="email"
value={formula.email}
onChange={(e)=>setEmail(e.target.value)}
/>



</>
    )}
{user.isLoggin ? <button>Loginout</button>:<button>Logeado</button>} 
{user.isLoggin && <p>{`vas cerrar sesion, ${user.name}`}</p> }

</formula>
    



)



}