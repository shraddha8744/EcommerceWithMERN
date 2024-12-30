import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../Slices/CounterSlice'
import authReducer from "../Slices/authSlice"

export const store = configureStore({

  reducer: {

  counterIncrement:CounterSlice,
  auth:authReducer
  },
})