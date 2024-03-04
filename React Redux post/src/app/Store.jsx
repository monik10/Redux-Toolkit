import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "/src/features/post/PostSlice"
import UserReducer from "/src/features/users/UserSlice"
export const store=configureStore(
    {
    reducer:{
        posts:PostReducer,
        users:UserReducer,
    }

})