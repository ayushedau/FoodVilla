import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action) =>{
            state.items.push(action.payload);
        },
        removeItem:(state,action) =>{
            const id= action.payload;
            state.items = state.items.filter(item => item.id !== id);
        },
        clearCart:(state) =>{
            state.items = [];
        },
    }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;