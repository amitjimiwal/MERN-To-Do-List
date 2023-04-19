// Importing the creating store function.
import {configureStore} from '@reduxjs/toolkit';
import todoreducer from './todoSlice'
// Creating and exporting the store.
export const store= configureStore({
      reducer:{
            todolist:todoreducer,
      }
})



