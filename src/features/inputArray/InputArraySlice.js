import {createSlice} from '@reduxjs/toolkit';

export const inputArraySlice = createSlice({
    name: 'inputArray',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(parseInt(action.payload));
        }
    },
});

export const { add } = inputArraySlice.actions;

export const selectInputArray = state => state.inputArray;

export default inputArraySlice.reducer;
