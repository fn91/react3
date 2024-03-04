import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import * as ITEMS_API from "../../reduxitemapi/products";


 // Async trunks


 export const getTrunks = createAsyncThunk (

"products/getProducts",

async () =>{

try {

const response = await ITEMS_API.getTrunksMiddleware()
return response

}catch (fail){
throw new fail (fail.message)

}



}


 );


 export const addProductThunk = createAsyncThunk(
  "products/addProduct",
  async (newProduct) => {
    try {
      await ITEMS_API.addProductMiddleware(newProduct);
      return newProduct;
    } catch (fail) {
      throw new fail(fail.message);
    }
  }
);
export const updateProductThunk = createAsyncThunk(
  "products/updateProduct",
  async (products) => {
    try {
      await ITEMS_API.updateProductMiddleware(products);
      return products;
    } catch (fail) {
      throw new fail(fail.message);
    }
  }
);

export const deleteProductThunk = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    try {
      await ITEMS_API.deleteProductMiddleware(id);
      return deleteProductThunk;
    } catch (fail) {
      throw new fail(fail.message);
    }
  }
);




//Slices

const InicioState = {
products:null,
loading:true,
error:null,


}

const productSlice = createSlice ({
name: "products",
InicioState,
reducers:{},
extraReducers:(builder)=> {
builder

.addCase(getTrunks.fulfilled,(state,action)=>{

state.loading= false;
state.product=action.payload;

})

.addCase(deleteProductThunk.fulfilled, (state, action) => {
  state.loading = false;
  state.products = state.products.filter(
    (product) => product.id !== action.payload
  );
})
.addCase(addProductThunk.fulfilled, (state, action) => {
  state.loading = false;
  state.products = [...state.products, action.payload];
})
.addCase(updateProductThunk.fulfilled, (state, action) => {
  state.loading = false;
  state.products = state.products.map((product) =>
    product.id === action.payload.id ? action.payload : product
  );
})


.addMatcher(
(action) => action.type.endsWitch("pending"),

(state,action) => {
  state.loading=false;
  state.error=action.error.message;


}

)

.addMatcher(
  (action) => action.type.endsWitch("rejected"),
  
  (state,action) => {
    state.loading=false;
    state.error=action.error.message;
  
  
  }
  
  )
  




}


})

export default productSlice.reducer

export const {getProducts}= productSlice.actions;
export const getAllProducts= (state)=> state.products.products;
export const getProductsLoad = (state)=> state.products.loading;
export const getProductsFail= (state)=> state.products.error;
