
import "./Card.css"

// eslint-disable-next-line react/prop-types
export default function Card ({producto}){


// eslint-disable-next-line react/prop-types
const {imagen,titulo,precio,cantidad}=producto

return(

<div className="shop-container">

<img
className="imagen-buy"
src={imagen}
alt={titulo}

/>
<span className="notificacion">{cantidad}</span>

<div className="shopping-card-body">
        <p>{titulo}</p>
        <p>Precio por unidad: {Number(precio)?.toFixed(2)}€</p>
        <p>Precio total: {Number(precio)?.toFixed(2) * cantidad}€</p>
      </div>





</div>





)



}