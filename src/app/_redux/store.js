import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./slices/accountSlice";
import postSlice from "./slices/postSlice";
import pageSlice from "./slices/pageSlice";

export const store = configureStore({
    reducer:{
        account:accountSlice,
        post:postSlice,
        page:pageSlice,
    }
})