import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slice/CustomerSlice.jsx"

export const store=configureStore({
    devTools:true,
    reducer:
    {
        customers:customerReducer
    }
})