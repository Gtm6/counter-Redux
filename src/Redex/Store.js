import { configureStore } from "@reduxjs/toolkit";
import Countslice from "./Countslice";

export const store = configureStore({
    reducer:{
         counterReducer:Countslice
    }
})