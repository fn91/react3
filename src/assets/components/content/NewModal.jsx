/* eslint-disable react/prop-types */
import "./NewModal.css";


export default function NewModal ({

formu,
setFormu,
newModalType,
handleChangeForm,
setNewModalOpen,
}){

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


<label htmlFor="title">Title</label>
<input
type="txt"
id="title"
name="title"
// eslint-disable-next-line react/prop-types
value={formu.title}
onChange={(e)=>setFormu({...formu,title:e.target.value})}

/>

<label htmlFor="preci">Precio</label>
<input
type="txt"
id="price"
name="price"
// eslint-disable-next-line react/prop-types
value={formu.price}
onChange={(e)=>setFormu({...formu,price:e.target.value})}

/>



<label htmlFor="Descrip">Descrip</label>
<input
type="txt"
id="descrip"
name="descrip"
// eslint-disable-next-line react/prop-types
value={formu.title}
onChange={(e)=>setFormu({...formu,descrip:e.target.value})}

/>



<button type="save">Save</button>



</form>
</div>
      </div>




)







}



