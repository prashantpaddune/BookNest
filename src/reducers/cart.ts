import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            console.log('action', action);
            console.log('state', state);
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state[itemIndex].quantity += action.payload.quantity;
            } else {
                state.push({ ...action.payload, quantity: action.payload.quantity });
            }

            return state;
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;