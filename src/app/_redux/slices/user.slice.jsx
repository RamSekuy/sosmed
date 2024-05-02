import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie } from "cookies-next"

const initialState={
    id:0,
    username:"",
    profileImgUrl:"",
}

const userSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state = {...state,...action.payload}
            return state;
        },
        logout:(state)=>{
            deleteCookie("auth");
            state=initialState;
            return{};
        }
    }
})

export const {login,logout} = userSlice.actions;
export default userSlice.reducer;