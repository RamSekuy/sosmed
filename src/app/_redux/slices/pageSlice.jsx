import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activePage:""
}

const pageSlice = createSlice({
    name:"page",
    initialState,
    reducers:{
        page:(state,action)=>{
            state.activePage=action.payload.activePage
            return state;
        }
    }
})

export const { page } = pageSlice.actions;
export default pageSlice.reducer;