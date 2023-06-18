// Importing the creating store function.
import {configureStore} from '@reduxjs/toolkit';
import todoreducer from './todoSlice'
// Creating and exporting the store.
const store= configureStore({
      reducer:{
            todolist:todoreducer,
      }
})
export default store;


