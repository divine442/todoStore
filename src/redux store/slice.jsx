import { createSlice } from "@reduxjs/toolkit";

export const sliceTodo =createSlice({
    name: 'todos',
    // data for the initial state
    initialState:[
        { id: 1, title: 'Debug your code', completed: false },
        { id: 2, title: 'Find the bug', completed: false },
        { id: 3, title: 'Commit your code', completed: false },
        { id: 4, title: 'Make coffee', completed: false },
        { id: 5, title: 'Clean your code', completed: false },
    ],
    
    reducers:{
        addTodo: (state, action) =>{
            const todo = {
                id:new Date(),
                title: action.payload.title,
                completed: false
            };
            state.push(todo)
        },

        toggle: (state, action) =>{
            const index = state.findIndex((todo)=> todo.id === action.payload.id)
            state[index].completed = action.payload.completed
        },
        deleteTodo: (state, action) =>{
            return state.filter((todo)=> todo.id !== action.payload.id)
        },

    },
})

export const {addTodo, toggle, deleteTodo}= sliceTodo.actions

export default sliceTodo.reducer;