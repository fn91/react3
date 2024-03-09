import { useReducer } from "react";

const formulaReducer = (state,action) => {

switch (action.type){

    case "SET_USERNAME":
        return {...state, username: action.payload}

        case "SET_Direc":
            return {...state, email: action.payload.toLowerCase()}

            case "RENEW":
                return {username: " ", email: ""}
            
            default:
            return state;

}


};


export default function Formulario () {

const [formula,dispatch] = useReducer (formulaReducer,{

name:"",
email:"",



});

const SetUsername= (username) =>{
dispatch({type:"SET_USERNAME",payload:username})

};

const SetEmail= (email) =>{
    dispatch({type:"SET_Direc",payload:email})
    
    };

    const renew= () =>{
        dispatch({type:"RENEW"})
        
        }
        return{formula,SetUsername,SetEmail,renew}

}