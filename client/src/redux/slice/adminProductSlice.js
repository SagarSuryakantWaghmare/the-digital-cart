import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;
const USER_TOKEN = `Bearer ${localStorage.getItem("userToken")}`;
// async thunk to fetch admin products
export const fetchAdminProuducts = createAsyncThunk("adminProuducts/fetchProducts", async () => {
    const response = await axios.get(`${API_URL}/api/admin/prouducts`, {
        headers: {
            Authorization: USER_TOKEN,
        }
    });
    return response.data;
});

// async function to create a new product
export const createProduct = createAsyncThunk("adminProuducts/createProduct", async (productData) => {
    const response = await axios.post(
        `${API_URL}/api/admin/products`,
        productData,
        {
            headers: {
                Authorization: USER_TOKEN,
            }
        }
    )
    return response.data;
})

// async function to update an existing product
export const updateProduct = createAsyncThunk(
  "adminProducts/updateProduct",
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}/api/admin/products/${id}`,
        productData,
        {
          headers: {
            Authorization: `Bearer ${USER_TOKEN}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// async thunk to delete a product
export const deleteProduct=createAsyncThunk('adminProducts/deleteProduct',async(id)=>{
    await axios.delete(`${API_URL}/api/admin/products/${id}`,
        {
            headers:{
                Authorization:{
                    Authorization:USER_TOKEN
                },
            }
        }
    )
    return id;
});

const adminProductSlice=createSlice({
    name:"adminProducts",
    initialState:{
        products:[],
        loading:false,
        error:null,

    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAdminProuducts.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchAdminProuducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.products=action.payload;
        })
        .addCase(fetchAdminProuducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
        // Create product
        .addCase(createProduct.fulfilled,(state,action)=>{
            const index=state.products.findIndex(
                (product)=>product._id===action.payload._id
            );
            if(index!==-1){
                state.product[index]=action.payload;
            }
        )
        // Delete product
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            state.products=state.products.filter(
                (product)=>product._id!==action.payload
            );
        });
    }
});

export default adminProductSlice.reducer;