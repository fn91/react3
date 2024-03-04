import "./ShopCart.css";
import Card from "./Card";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cargando from "../Cargando/Cargando"


export default function ShoppingCart() {
  const { user, setUser } = useContext(UserContext);
  const [products,setProducts] = useState([]);
  const[isCharge,isSetCharge]=useState([true]);
  const[fail,setFail]=useState([null])

 
  const productCounter = {};
  user.shoppingCartItems.forEach((id) => {
    productCounter[id] = productCounter[id] ? productCounter[id] + 1 : 1;
  });
  const mapeo = Object.keys(productCounter).map((id) => {
    const product = products?.find(
      (product) => product.id.toString() === id.toString()
    );
    return {
      ...product,
      quantity: productCounter[id],
    };
  });

  const total = mapeo.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const handleCheckout = () => {
    alert("Serás redirigido a la pasarela de pago");
    setUser({ ...user, shoppingCartItems: [] });
  };

  const handleReset = () => {
    setUser({ ...user, shoppingCartItems: [] });
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


  return (
    <main className="shopping-cart-container">
      <h2>Carrito de Compras</h2>
      {mapeo.map((product) => {
        return (
          <Card
            key={product.id}
            product={product}
          />
        );
      })}

      <p className="total">Total a Pagar: {Number(total)?.toFixed(2)}€</p>

      <div className="cart-btn-container">
        <button
          onClick={handleCheckout}
          className="btn-comprar"
        >
          Comprar
        </button>
        <button
          onClick={handleReset}
          className="btn-resetear"
        >
          Resetear Carro
        </button>
      </div>
    </main>
  );
}
