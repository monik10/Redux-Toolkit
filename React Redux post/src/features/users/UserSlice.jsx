import { createSlice } from "@reduxjs/toolkit"

const initialState=[
    {id:"0",name:"John"},
    {id:"1",name:"Marie"},
 ]

export const UserSlice=createSlice({
    name:"users",
    initialState,
    reducers:{

    }
})

export const SelectAllUsers=(state)=>state.users;
export default UserSlice.reducer;