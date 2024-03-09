
import  { createContext,useEffect,useState } from "react";

export const UsersContext = createContext ()


// eslint-disable-next-line react/prop-types
export default function UseProvider({children}) {

    const [users,setUsers]=useState (
()=>
        JSON.parse (localStorage.getItem("useData")) || {
            name: "",
            email:"",
            isLoggin:false,
            isDarkMode:true,
            shoppingCartItems:[],
            role:"",


        }

    );
    useEffect (()=>{
        localStorage.setItem("useData",JSON.stringify(users));
    }, [users]);

    return(
        <UsersContext.Provider value={{users,setUsers}}>
            {children}

        </UsersContext.Provider>



    )

    



}