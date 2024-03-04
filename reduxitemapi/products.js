import axios from "axios";
const API_URL = "http://localhost:3000/products";

export const addProductMiddleware = async (newProduct) => {

try {


    await axios.post(API_URL,newProduct)

}catch (fail) {

throw fail (fail.message)
}

};

export const deleteProductMiddleware= async (id )=> {

try {

await axios.delete(`${API_URL}/${id}`);



}catch (fail){
throw new fail (fail.message)


}



}


export const getTrunksMiddleware = async() =>{

try{

const response = await axios.get (API_URL);
return response.data;




}catch (fail){
throw new fail (fail.message)


}



}

export const up = async() =>{

    try{
    
    const response = await axios.get (API_URL);
    return response.data;
    
    
    
    
    }catch (fail){
    throw new fail (fail.message)
    
    
    }
    
    
    
    }
    

    export const updateProductMiddleware = async (product) => {
        try {
          await axios.put(`${API_URL}/${product.id}`, product);
        } catch (error) {
          throw new Error(error.message);
        }
      };
      