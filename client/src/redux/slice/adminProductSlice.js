import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;

// async thunk to fetch admin products
export const fetchAdminProducts = createAsyncThunk("adminProducts/fetchProducts", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_URL}/api/admin/products`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

// async thunk to fetch single product details (admin)
export const fetchProductDetails = createAsyncThunk("adminProducts/fetchProductDetails", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_URL}/api/admin/products/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

// async function to create a new product
export const createProduct = createAsyncThunk("adminProducts/createProduct", async (productData, { rejectWithValue }) => {
    try {
        const response = await axios.post(
            `${API_URL}/api/admin/products`,
            productData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                }
            }
        )
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
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

// async thunk to delete a product
export const deleteProduct = createAsyncThunk('adminProducts/deleteProduct', async (id, { rejectWithValue }) => {
    try {
        await axios.delete(`${API_URL}/api/products/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("userToken")}`
            },
        })
        return id;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

const adminProductSlice = createSlice({
    name: "adminProducts",
    initialState: {
        products: [],
        product: null, // For single product details
        loading: false,
        error: null,

    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdminProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAdminProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchAdminProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Fetch single product details
            .addCase(fetchProductDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
            // Create product
            .addCase(createProduct.fulfilled, (state, action) => {
                const index = state.products.findIndex(
                    (product) => product._id === action.payload._id
                );
                if (index !== -1) {
                    state.products[index] = action.payload;
                }
            }
            )
            // Update product
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.products.findIndex(
                    (product) => product._id === action.payload._id
                );
                if (index !== -1) {
                    state.products[index] = action.payload;
                }
                // Also update the single product if it's the one being edited
                if (state.product && state.product._id === action.payload._id) {
                    state.product = action.payload;
                }
            })
            // Delete product
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter(
                    (product) => product._id !== action.payload
                );
            });
    }
});

export default adminProductSlice.reducer;