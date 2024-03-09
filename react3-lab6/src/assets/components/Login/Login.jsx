import "./Login.css"
import { useContext } from "react"
import { useNavigate,useLocation } from "react-router-dom"
import {UserContext} from "./context/UserContext"
import {useForm} from "react-router-form"

export default function LoginForm () {
const {user,setUser}=useContext(UserContext);
const navigate =useNavigate()
const location =useLocation()

const {

    regis,
    handleSubmit,
    watch,
    formState: {errors},
    trigger,
} =useForm();

const onSub= handleSubmit ((formu) => {
    if (user.isLogin){

        setUser({

            ... user,
            isLogin:false,
            role:"user",


        });
        navigate("/");





    }else if (!user.isLogin) {

        if (!formu.name || !formu.email) {
            alert ("Tiene que rellenar todos los campos")
            return;


        }

        const emailUser = formu.email.trim();
        const rol = emailUser.includes ("admin") ? "admin": "user";

        setUser( {
            ...user,
            ... formu,
            isLogin: true,
            rol,


        });
        navigate(location.state?.pathname);


    }




})

     return (

        <form
        

        onSubmit= {onSub}
        className="login-initial"
        
        
        
        >

        <>
        <label htmlFor="name">Nombre
        </label>
        {errors.name &&(
            <p className="login-name-error">{errors.name.message}</p>
        )}

        <input
        type="text"
        id="name"
        {...regis("name",{
            required:"Necesitas introducir tu nombre",
            minLength: {value:6 , message: "Minimo 6 caracteres"},
            maxLength:{value:25 , message: "Minimo 25 caracteres"},
            onBlur: () => trigger("name"),

        })}
        />

        <label htmlFor="email">Email</label>
        {errors.email &&(
            <p className="login-name-error">{errors.email.message}</p>
        )}
         <input
        type="email"
        id="email"
        {...regis("email",{
            required:"Necesitas introducir tu email para continuar",
            pattern: {

                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message:"El email que estas usando no es correcto",

            },
            onBlur: () => trigger("email"),

        })}
        />

        <label htmlFor="password">Contraseña</label>
        {errors.password &&(
            <p className="login-name-error">{errors.password.message}</p>
        )}

        <input
            type="password"
            id="password"
            { ...regis("password",{
                required: "Por favor introduzca una contraseña valida",
                onBlu: () =>trigger("password"),
                minLength:{value: 10 ,message: "Minimo 10 caracteres"}

            })}


        />

        <label htmlFor="confirmaContrasena">Repite la password</label>
        {errors.confirmarContrasena&&(
            <p className="login-name-error">{errors.confirmarContrasena.message}</p>
        )}
        <input
            type="password"
            id="confirmPassword"
            {...regis("confirmaPassword",
            { 
                regis:"Por favor repite la password",
                onBlur: () => trigger ("confirmaPassword"),
                validate: (value) =>
                value === watch ("password") || "La contraseña no es la misma",



            })}


        />
        
        </>
            {user.isLogin ? <button>Off</button>:<button>Login</button>}
            {user.isLogin &&<p>{`Quiers de verdad cerrar sesion,${user.name}?`}</p>}



        </form>





     )

}


