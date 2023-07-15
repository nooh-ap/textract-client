import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    receipts: [],
}

export const receiptSlice = createSlice({
    name: "receipt",
    initialState,
    reducers: {
        setData: (state, action) => {
           state.receipts = [...state.receipts, action.payload];
        }
    }
});

export const {setData} = receiptSlice.actions;
export default receiptSlice.reducer;