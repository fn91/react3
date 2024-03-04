import axios from "axios";
import { useEffect,useState } from "react";
import {v4 as uuidv4} from "uuid";


export default function CustomProducts (){

const [product,setProduct] =useState ([]);
const [isnewModal,setisnewModal]=useState(false);
const[modalModel,setmodalModel]=useState("");
const [formu,setFormu]=useState({
title: "",
price:"",
descrip:"",


});

const[isCharge,isSetCharge]=useState([true]);
  const[fail,setFail]=useState([null]);


  const API_URL= "http://localhost:3000/products";

  useEffect (()=>{

isSetCharge(true);
const geteProducts =async () => {

  try {

     const response = await axios.get (API_URL);
    setProduct(response.data)




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


const handleChangeForm = async (e)=> {
e.preventDefault();

if (modalModel=== "new"){
const newProd ={
id:uuidv4(),
title: formu.title,
price:formu.price,
descrip:formu.descrip,
image:"https://via.placeholder.com/150/92c955",


};

try {

await axios.post(API_URL,newProd);
setProduct((prevProduct)=>[...prevProduct,newProd])
setisnewModal(false);

}catch (fail) {
    console.fail("Error al crear nuevo producto",fail)

}
}
if (modalModel=== "edita"){

    const searchProduct = product.find(
        (product)=> product.id.toString() ===formu.id.toString()

    );
    
    const actuProduct = {
        ...searchProduct,
        title:formu.title,
        price:formu.price,
        descrip:formu.descrip,


    };


    try {
        await axios.put(`${API_URL}/${formu.id}`, actuProduct);
        setProduct((prevProducts) => {
          const newProducts = prevProducts.map((product) => {
            if (product.id === formu.id) {
              return actuProduct;
            }
            return product;
          });
          return newProducts;
        });
        setisnewModal(false);
      } catch (error) {
        console.error("Error updating product", error);
      }
    }
  };

    
  const addProduct = () => {
    setisnewModal(true);
    setFormu({
      price: "",
      title: "",
      description: "",
    });
  };

  const editProduct = (id) => {
    const filteredProduct = product.filter((product) => product.id === id);
    setFormu({
      price: filteredProduct[0].price,
      title: filteredProduct[0].title,
      description: filteredProduct[0].description,
      id: filteredProduct[0].id,
    });
    setisnewModal(true);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProduct((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };




return {

    product,
    formu,
    isnewModal,
    modalModel,
    isCharge,
    fail,
    setFail,
    setFormu,
    deleteProduct,
    addProduct,
    editProduct,
    setisnewModal,
    setmodalModel,
    setProduct,
    handleChangeForm,





};





}









