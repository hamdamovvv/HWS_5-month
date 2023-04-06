import {configureStore} from "@reduxjs/toolkit";
import photosSlice from "./PhotosSlice";
import photoSlice from "./PhotoSlice";

const store = configureStore({
    reducer: {
        photosSlice,
        photoSlice
    }
})

export default store;