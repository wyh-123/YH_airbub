import { configureStore } from "@reduxjs/toolkit"; 
import HomeSlice from './modules/home'
import entireReducer from "./modules/entire/index";
import DetailSlice from './modules/detail'
import mainSlice from './modules/main'
const store = configureStore({
    reducer: {
        home: HomeSlice,
        entire: entireReducer,
        detail: DetailSlice,
        main:mainSlice
    }
})
export default store