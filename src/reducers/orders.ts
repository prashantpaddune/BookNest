import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];

const ordersSlice = createSlice({
    name: 'orders',
    initialState: initialState,
    reducers: {
        addOrder: (state, action) => {
            state.push(action.payload);
            return state;
        }
    }
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;