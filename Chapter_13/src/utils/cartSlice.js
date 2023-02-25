import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const doesItemExist = state.items.find((item) => item.id === action.payload.id);
            if(doesItemExist){
                state.items.forEach(item => {
                    if (item.id === action.payload.id) {
                        item = { ...item, count: item.count++ }
                    }
                })
            } else {
                state.items.push({ ...action.payload, count: 1})
            }
        },
        removeItem: (state, action) => {
            const doesItemExist = state.items.find((item) => item.id === action.payload);
            if(doesItemExist && doesItemExist.count > 1) {
                state.items.forEach(item => {
                    if (item.id === action.payload) {
                        item = { ...item, count: item.count-- }
                    }
                })
            } else {
                const filteredItems = state.items.filter(item => item.id !== action.payload);
                return {...state, items: filteredItems}; 
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;