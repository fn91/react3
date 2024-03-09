import {Link} from "react-router-dom";
import "./fail.css";

export default function Fail () {
return (

<div className="fail-container"> 
<h1>404 Fail not found</h1>
<p>Pagina not worked</p>
<Link
className="fail-found"
to="/"
>
Devuelta al principio
</Link>
</div>
)



}