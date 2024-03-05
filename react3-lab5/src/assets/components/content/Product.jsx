/* eslint-disable react/prop-types */
import "./Product.css"
import {UserContext} from "../content/UserContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"


export default function Product({

product, 
deleteProduc,
ediProduc,
TypeProduct,

}){

const {user,setUser}=useContext(UserContext)
const navigate =useNavigate()

const handleAddCart = (e) => {

e.stopPropagation ();

setUser({
...user,
shoppingCart : [...user.shoppingCart,product.id]

});
}

const handleCartClick = () =>{

navigate (`/product/$[product.id]`);


};

const handleEditProduct = (e) =>{
e.stopPropagation()
ediProduc(product.id)
TypeProduct("edite")


};


const handleDeleteProduct = (e) =>{

e.stopPropagation()
deleteProduc(product.id)


};


return (


<div 
onClick={handleCartClick}
className="card"
>
<img
className="imagen-card"
src={product.image}
alt={product.title}


/>

<div
className="cuerpo-card">
<h3 className="title">{product.title}</h3>
<p className="description">{product.description}</p>
<p className="price">{product.price}</p>
</div>

{user.isLoggin &&(
<button
onClick={handleAddCart}
className="btn-añadir"
>Agregando articulos
</button>

)}

{user.role === "admin" && (
<div className="deleedit-btn">
 <button
 onClick={handleEditProduct}
 ></button>   
<button
onClick={handleDeleteProduct}
></button>
</div>

)}



    
</div>



)






}