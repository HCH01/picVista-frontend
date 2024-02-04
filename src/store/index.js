import { configureStore } from "@reduxjs/toolkit";
import slice from './slice/slice.js';

const store = configureStore({
    reducer:{
        images : slice
    }
})

export {store}