import "./ProductDetails.css"
import {Link,useParams} from "react-router-dom"
import { useContext, } from "react"
import {UserContext} from "./context/UserContext"

export default function DetaProdu (){

const {user,setUser}=useContext(UserContext)
const {id,products}= useParams()


const hadleAddCart = () => {

    setUser ({
        ... user,
      
        shoppingItems : [...user.shoppingItems,searchProduct.id],


    })


};


const searchProduct= products?.find (
(products) => products.id.toString() == id.toString ()

);

const {titulo,price,description,imagen,categoria} =searchProduct;

return(

<main className="detalles-productos-contenedor">
<img
src={imagen}
alt={titulo}

/>

<div className="detalles-productos">
<Link to="/">Volver</Link>
<h2>{titulo}</h2>
<p className="detalles-precio">{price}</p>
<p>{description}</p>
<p className="categorias-productos">Categoria : {categoria}</p>

<button
onClick={hadleAddCart}
className="boton-detalles"
>
    Agregar items al carro
</button>


</div>
</main>


)



}