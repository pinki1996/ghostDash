import { configureStore } from "@reduxjs/toolkit";
import dashSlice from "./dashSlice";

export const store = configureStore({
    reducer:{ post:dashSlice }
})

export default store;