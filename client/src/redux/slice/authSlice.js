import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Retrieve user info and token from localstorage if available

const userFromStorage = localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) :
    null;

// check for an existing guest id in the localstorage or generate a new one

const intialGuestId =
    localStorage.getItem("guestId") || `guest_${new Date().getTime()}`;
localStorage.setItem("guestId", intialGuestId);

const initialState = {
    user: userFromStorage,
    guestId: intialGuestId,
    loading: false,
    error: null,
}

// Async thun for user login
export const loginUser = createAsyncThunk("auth/loginUser", async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
            userData,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));
        localStorage.setItem("userToken", response.data.token);
        return response.data.user;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})


export const registerUser = createAsyncThunk("auth/registerUser", async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/register`,
            userData,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));
        localStorage.setItem("userToken", response.data.token);
        return response.data.user;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Slicer 
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.guestId = `guest_${new Date().getTime()}`;//Reset guest id on logout
            localStorage.removeItem('userInfo');
            localStorage.removeItem('userToken');
            localStorage.setItem("guestId", state.guestId);
        },
        generateNewGuestId: (state) => {
            state.guestId = `guest_${new Date().getTime()}`;
            localStorage.setItem("guestId", state.guestId);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })


    }
})

export const { logout, generateNewGuestId } = authSlice.actions;

export default authSlice.reducer;
