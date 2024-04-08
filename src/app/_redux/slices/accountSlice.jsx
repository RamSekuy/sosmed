import { createSlice } from "@reduxjs/toolkit";

const initialState = {
username:"",
realName:"",
profileImgUrl:"",
}

const accountSlice = createSlice({
    name:"account",
    initialState,
    reducers:{
        account:(state,action)=>{
            state.username = action.payload.username;
            state.realName = action.payload.realName;
            state.profileImgUrl = action.payload.profileImgUrl;
            return state;
        }
    }
})

export const {account} = accountSlice.actions;
export default accountSlice.reducer;