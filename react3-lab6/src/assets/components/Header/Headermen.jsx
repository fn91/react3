import "./Headermen.css"
export default function Headermen(){

const Datamenu =[

{id: 1,title:"Inicio"},
{id: 2,title:"Categorias"},
{id: 3,title:"Ofertas"},
{id: 4,title:"Contacto"},
{id: 5,title:"Descripcion"}

]

return(
<nav>
<ul
className="navegator-ul"
>
{Datamenu.map((item)=>(
    <li key={item.id}>{item.title}</li>

) )}

</ul>

</nav>



)


}