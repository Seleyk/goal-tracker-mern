import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { FaLaptopHouse } from 'react-icons/fa'


// get user from local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register User
export const register = createAsyncThunk('auth/register', async 
(user, thunkAPI) => {
    
})

// reset after submit
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false 
            state.message = ''
        }
    },
    extraReducers: () => {}
})

export const {reset} = authSlice.actions
export default authSlice.reducer