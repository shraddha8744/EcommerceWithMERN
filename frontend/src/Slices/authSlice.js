import { createSlice } from "@reduxjs/toolkit";



export const authSlice=createSlice({
    name:"authSlice",
    initialState:{
        isAuthenticated:false,
        loading:false,
        user:null
    },
    reducers:{
        setUser:(state,action)=>{

        }
    }
})
export const {setUser}=authSlice.actions
export default authSlice.reducer