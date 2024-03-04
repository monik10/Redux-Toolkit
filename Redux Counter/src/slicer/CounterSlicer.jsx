/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";


let initialState={
    count:0
}

export const CounterSlicer=createSlice(
    {
        name:"counter",
        initialState,
        reducers:
        {
            increment:(state)=>
            {
                return {
                    ...state,
                    count: state.count+1
                };
            },
            decrement:(state)=>
            {
                return {
                    ...state,
                    count:state.count-1
                }
            },
            reset:(state)=>
            {
                return {
                    ...state,
                    count:0
                }
            },
           
        }

    }
)

export  const {increment,decrement,reset} =CounterSlicer.actions;
export default CounterSlicer.reducer;
