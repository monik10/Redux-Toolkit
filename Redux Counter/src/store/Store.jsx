import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "/src/slicer/CounterSlicer";

export const store = configureStore({
    reducer: {
        counter: counterReducer // Use 'counter' as the key for the counterReducer
    }
});