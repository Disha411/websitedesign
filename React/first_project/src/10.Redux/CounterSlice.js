import { createSlice } from "@reduxjs/toolkit";

let countSlice = createSlice({
    name: "count",
    initialState: { count: 190, count2: 500 },
    reducers: {
        inc: (state, action) => {
            state.count++
            // console.log("inc called")
        },
        dec: (state, action) => {
            state.count--
            // console.log("dec called")
        },
        reset: (state, action) => {
            state.count = 190
        },
        inc2: (state, action) => {
            state.count2++
        },
        dec2: (state, action) => {
            state.count2--
        },
        reset2: (state, action) => {
            state.count2 = 500
        },
    }
})

export default countSlice.reducer

export const { inc, dec, reset, inc2, dec2, reset2 } = countSlice.actions
// export const counterAction = countSlice.actions

