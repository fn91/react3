/* eslint-disable no-unused-vars */
import { useState,useSelector } from "react";
import {v4 as uuidv4} from "uuid";
import { getAllProducts } from "../redux/reducers/itemsReducer,js";
import {
  addProductThunk,
  updateProductThunk,
} from "../redux/reducers/itemsReducer";
import { useDispatch } from "react-redux";

export default function CustomProducts (){
  const products = useSelector(getAllProducts);
  const dispatch =useDispatch();
const [isnewModal,setisnewModal]=useState(false);
const[modalModel,setmodalModel]=useState("");
const [formu,setFormu]=useState({
title: "",
price:"",
descrip:"",
category:"",
image:"",


});


const handleSubmittForm= async (e) =>{

e.preventDefault()

}


if (modalModel=== "new" ){

const newProduct = {

id :uuidv4,
title:formu.title,
price:formu.price,
descrip:formu.descrip,
image:formu.image,
category:formu.category


};

try {
dispatch (addProductThunk(newProduct))
setmodalModel(false)

}catch (fail){
  console.fail("Erro al crear un nuevo producto",fail);
}



}


if ( modalModel== "edit"){
const findProduct = products?.find(
  (product) => product.id.toString() === formu.id.toString()
);
const editedProduct = {
  ...findProduct,
  title: formu.title,
  price: formu.price,
  description: formu.description,
};

try {
  dispatch(updateProductThunk(editedProduct));
  setisnewModal(false);
} catch (fail) {
  console.fail("Error update product", fail);
}
}


const openModelEdit = (id) => {
  const filteredProduct = products?.filter(
    (product) => product.id.toString() === id.toString()
);
  setFormu({
    ... filteredProduct [0]
  });
  setisnewModal(true);
};





return {
formu,
setFormu,
isnewModal,
setisnewModal,
modalModel,
setmodalModel,
openModelEdit,
handleSubmittForm,




};



}















