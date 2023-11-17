import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: {count:0},
    reducers: {
        increment: (state) => {state.count += 1},
        decrement: (state) => {state.count -= 1},
        addBy: (state, action) => {state.count += action.payload},
        redBy: (state, action) => {state.count -= action.payload},
        multiBy: (state, action) => {state.count *= action.payload},
        divBy: (state, action) => {state.count /= action.payload},
    },

})

export const { increment, decrement, addBy, redBy, multiBy, divBy } = counterSlice.actions

export default counterSlice.reducer;