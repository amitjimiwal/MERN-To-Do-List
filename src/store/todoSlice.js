import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
      name:'todouser',
      initialState:{
      isloggedin:false,
      user:null
},
      reducers:{
            setUser:(state,action)=>{
            },
            removeUser:(state,action)=>{    
            },
      }
})

export const {setUser,removeUser}=todoSlice.actions;
export default todoSlice.reducer;