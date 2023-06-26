import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import { Toaster, toast } from "react-hot-toast";
import './App.css'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setUser } from "./store/todoSlice";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch=useDispatch();
  const {isloggedin}=useSelector((state)=> state.todolist);
  const updateUser=async()=>{
   try{
    const {data}= await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/me`,{
      withCredentials:true
    })
    if(data.success){
      dispatch(setUser({
        isloggedin:true,
        user:data.user
       }))
       toast.success(`Welcome ${data.user.name}`,{
        duration:4000,
      })
    }
   }
   catch(error){
    toast.error(error.response.data.message)   
  }
  }
  useEffect(()=>{
      updateUser()
      // getting users info if iuts logged in
  },[isloggedin])
  return <div className="w-100 vh-100">
  <Toaster/>
  {isloggedin ? <Todo /> : <Home />}</div>;
};

export default App;
