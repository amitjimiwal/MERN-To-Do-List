import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todouser",
  initialState: {
    isloggedin:false,
    user: {
      _id: "6485ce7ec03dd1d89753b71b",
      name: "jimmy",
      email: "jimmy@gmail.com",
      createdAt: "2023-06-11T13:35:41.939Z",
      __v: 0,
    },
  },
  reducers: {
    setUser: (state, action) => {
      return {...state,...action.payload}
    },
    removeUser: (state, action) => {
      return {...state,...action.payload}
    },
  },
});

export const { setUser, removeUser } = todoSlice.actions;
export default todoSlice.reducer;
