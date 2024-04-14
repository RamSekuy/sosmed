import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    albumId:"",
    id:"",
    title:"",
    url:"",
    thumbnailUrl:""
}

const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        post:(state,action)=>{
            state.albumId=action.payload.albumId
            state.id=action.payload.id
            state.title=action.payload.title
            state.url=action.payload.url
            state.thumbnailUrl=action.payload.thumbnailUrl
            return state;
        }
    }
})

export const {post} = postSlice.actions;
export default postSlice.reducer;