import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
      name:'todolist',
      initialState:[
	],
      reducers:{
            addItem:(state,action)=>{
                  const todo={id:new Date().getTime(),title:action.payload.title,completed:false}
                  state.push(todo);
            },
            deleteItem:(state,action)=>{
               return state.filter(todoitem=> todoitem.id !==action.payload.deleteid)
            },
            completeItem:(state,action)=>{
            // const newstate= state.map(todoitem =>{
            //       if(todoitem.id===action.payload.completeitemid){
            //             todoitem.completed=action.payload.complete
            //       }
            //       return todoitem;
            //  })
            //  return newstate;
            const index = state.findIndex((todo) => todo.id === action.payload.id);
		state[index].completed = action.payload.completed;
            }
      }
})

export const {addItem,deleteItem,completeItem}=todoSlice.actions;
export default todoSlice.reducer;