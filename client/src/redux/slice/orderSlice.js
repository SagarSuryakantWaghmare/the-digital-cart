import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch user orders
export const fetchUserOrders = createAsyncThunk(
    "orders/fetchUserOrders",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/orders/my-orders`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

// Async thunk to fetch order details by id
export const fetchOrderDetails=createAsyncThunk("orders/fetchOrderDetails",async(
    orderId,{rejectWithValue}
)=>{
    try {
        const response=await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/orders/${orderId}`,
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("userToken")}`,
                }
            }
        )
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});


const orderSlice=createSlice({
    name:"orders",
    initialState:{
        orders:[],
        totalOrders:0,
        orderDetails:null,
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        // Fetch user orders
        .addCase(fetchUserOrders.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchUserOrders.fulfilled,(state,action)=>{
            state.loading=false;
            state.orders=action.payload.orders || action.payload; // Handle different response structures
            state.totalOrders=action.payload.totalOrders || action.payload.length || 0;
            state.error=null;
        })
        .addCase(fetchUserOrders.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload?.message || action.payload || "Failed to fetch orders";
        })

        // Fetch order details
        .addCase(fetchOrderDetails.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchOrderDetails.fulfilled,(state,action)=>{
            state.loading=false;
            state.orderDetails=action.payload.order || action.payload; // Handle different response structures
            state.error=null;
        })
        .addCase(fetchOrderDetails.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload?.message || action.payload || "Failed to fetch order details";
        })
    }
})

export default orderSlice.reducer;