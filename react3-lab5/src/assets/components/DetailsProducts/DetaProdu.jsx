import "./ProductDetails.css"
import {Link,useParams} from "react-router-dom"
import { useContext,useState,useEffect } from "react"
import {UserContext} from "./context/UserContext"
import axios from "axios";
import Cargando from "../Cargando/Cargando";

export default function DetaProdu (){

const {user,setUser}=useContext(UserContext)
const {id}= useParams()
const [products,setProducts] = useState([]);
  const[isCharge,isSetCharge]=useState([true]);
  const[fail,setFail]=useState([null]);

  const hadleAddCart = () => {

    setUser ({
        ... user,
      
        shoppingItems : [...user.shoppingItems,searchProduct.id],
    })


};


  const API_URL= "http://localhost:3000/products";

  useEffect (()=>{

isSetCharge(true);
const geteProducts =async () => {

  try {

     const response = await axios.get (API_URL);
    setProducts(response.data)




  }catch (fail) {

    if (fail.response && fail.response.status === 403){
      setFail("No stock");



    }else {

      setFail ("Error stock products")


    }



  } finally {

    setTimeout(()=>{
      isSetCharge(false);
    }, 200);

  }
};
geteProducts();
}, []);
useEffect(() => {
    if (fail) {
      alert("Error loading products");
      setFail(null);
    }
  }, [fail]);
  
  if (isCharge) {
    return <Cargando/>;
  }

  


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