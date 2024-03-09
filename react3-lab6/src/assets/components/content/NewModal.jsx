/* eslint-disable react/prop-types */
import "./NewModal.css";
import {useForm} from "react-hook-form";


export default function NewModal ({

formu,
setFormu,
newModalType,
handleChangeForm,
setNewModalOpen,
}){
    const {
        regis,
        formState: {errors},
        trigger,
    } =useForm ();

return (

<div className="ed-modal">
<div className="ed-modal-conte">

<button onClick={()=>setNewModalOpen(false)}

className="ed-close-btn"
>

</button>

{newModalType=== "nw"?(
    <h2>Nuevo producto</h2>

):(
    
    <h2>Editando producto</h2>

)}

   <form
   onSubmit={handleChangeForm}
    className="form-change-modal-container"
   >

    <label htmlFor="titulonombre">Titulonombre</label>
    {errors.titulo && (
            <p className="modal-error-msg">{errors.titulo.message}</p>
          )}
    <input
    type="text"
    id="titulo"

        {...regis( "titulo",{
            required: "Introduce un titulo",
            onBlur: () => trigger ("title"),
            maxLength:{
                value:25,
                message: " El titulo maximo es de 25"


            },
            minLength: {  value:8,
                message: " El titulo minimo es de 8"


            }

        })}
        value={formu.titulo}
        onChange={(e)=> setFormu({...formu,titulo:e.target.value})}
    
        />

        <label htmlFor="precio">
        Precio </label>
        {errors.precio && (
            <p className="modal-error-msg">{errors.precio.message}</p>
          )}
        <input
        type="number"
        id="precio"

        {...regis ("precio",{
            required: "Introduce un precio",
            min:{
                value: 0.02,
                message:"El precio siempre tiene que ser mayor de 0.02",
            },
            onBlur: () =>  trigger ("precio"),


        })}
        value={formu.precio}
        onChange={(e)=> setFormu({...formu,precio:e.target.value})}
        />

        <label htmlFor="descripcion">Descripcion</label>
        {errors.description && (
            <p className="modal-error-msg">{errors.description.message}</p>
          )}
            <textarea
            type="text"
            id="descripcion"

            {...regis ("descripcion",{
                required: "Introduce una nueva descripcion",
                
                maxLength: {
                    value: 150,
                    message: "Este es el maximo de caracteres que puedes escribir"
                },

                minLength: {
                    value: 15,
                    message: "Este es el minimo de caracteres que puedes escribir"
                },

                onBlur:  () => trigger("descripcion"),

    
            })}
            value={formu.descripcion}
            onChange={(e)=> setFormu({...formu,descripcion:e.target.value})}
            />


<label htmlFor="categoria">
        Categoria </label>
        {errors.categoria && (
            <p className="modal-error-msg">{errors.categoria.message}</p>
          )}
           
           <input
           
           type="text"
           id="categoria"
           {...regis ("description",{
            required: "Introduce una nueva descripcion",
            
            maxLength: {
                value: 20,
                message: "Este es el maximo de caracteres que puedes escribir"
            },

            minLength: {
                value: 4,
                message: "Este es el minimo de caracteres que puedes escribir"
            },

            onBlur:  () => trigger("categoria"),


        })}
        value={formu.categoria}
        onChange={(e)=> setFormu({...formu,categoria:e.target.value})}
        />

          
        <label htmlFor="imagen">Imagen</label>
        {errors.imagen && (
            <p className="modal-error-msg">{errors.imagen.message}</p>
          )}
           
         <input

            type="text"
            id="imagen"
            {...regis("imagen",{
                required:"Introduce la imagen en Url",
                validate: (value) => {

                    const pattern = new RegExp (

                        '^(https?:\\/\\/)?'+
                        // valida nombre de dominio
                        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
                        // valida OR direccion ip (v4)
                        '((\\d{1,3}\\.){3}\\d{1,3}))'+
                        // valida puerto y path
                        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
                        // valida queries
                        '(\\?[;&a-z\\d%_.~+=-]*)?'+
                        // valida fragment locator
                        '(\\#[-a-z\\d_]*)?$','i')
                        "i"
                     ;
                    return  !! pattern.test (value) || "Introduce una uRL"
                },
                onBlur: () => trigger ("imagen"),
              
            })}
            value={formu.imagen}
            onChange={(e)=> setFormu({...formu,imagen:e.target.value})}
       

            />
        
            <button type="guardado">Guardar </button>

  
   
   </form>
 </div>
 </div>


)

}