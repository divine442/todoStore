import { configureStore } from "@reduxjs/toolkit";
import reducers from './slice'

// this stores hold the reducers
 export default configureStore({
    reducer:{
        todos: reducers
    }
 })