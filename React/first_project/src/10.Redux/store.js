import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";

export let store = configureStore({
    reducer: {
        CounterSlice: CounterSlice
    }
})