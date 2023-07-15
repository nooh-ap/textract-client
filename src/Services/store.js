import { configureStore} from "@reduxjs/toolkit";
import receiptReducer from "./recieptSlice";

export const store = configureStore({
    reducer: {
        receipt: receiptReducer,
    }
});
