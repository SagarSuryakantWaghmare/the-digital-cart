import {configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice.js';
import productReducer from './slice/productSlice.js';
import cartReducer from './slice/cartSlice.js';
import checkoutReducer from './slice/checkoutSlice.js';
import orderReducer from './slice/orderSlice.js';
const store =configureStore({
    reducer:{
        auth: authReducer,
        proudcts:productReducer,
        cart:cartReducer,
        checkout:checkoutReducer,
        order:orderReducer
    },
})

export default store;