import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    photo: {},
    load: true
}

export const getPhoto = createAsyncThunk('photo', async (id) => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    return data
})

const photoSlice = createSlice({
    name: 'photoSlice',
    initialState,
    reducers: {},
    extraReducers(byuild){
        byuild
            .addCase(getPhoto.pending, (state) => {
                state.load = true
            })
            .addCase(getPhoto.fulfilled, (state, action) => {
                state.load = false
                state.photo = action.payload
            })
    }
})

export default photoSlice.reducer;
export const photoSelect = state => state?.photoSlice;