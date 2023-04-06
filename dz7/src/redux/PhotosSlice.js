import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    photos: [],
    loaded: true
}

export const getPhotos = createAsyncThunk("photos", async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos")
    return data;
} )

const photosSlice = createSlice ({
    name: 'photosSlice',
    initialState,
    reducers: {},
    extraReducers(build){
        build
            .addCase(getPhotos.pending, (state) => {
                state.loading = true
            })
            .addCase(getPhotos.fulfilled, (state, action) => {
                state.loading = false
                state.photos = action.payload
            })
    }
})

export default photosSlice.reducer;
export const photosSelect = state => state?.photosSlice;
