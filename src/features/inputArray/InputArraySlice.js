import {createSlice} from '@reduxjs/toolkit';

export const inputArraySlice = createSlice({
    name: 'inputArray',
    initialState: [{number: 20, color: "rgba(0, 0, 255, 0.5)"}, {number: 10, color: "rgba(0, 255, 0, 0.5)"}, {number: 30, color: "rgba(255, 0, 0, 0.5)"},
        {number: 5, color: "rgba(0, 0, 255, 0.5)"}, {number: 60, color: "rgba(0, 255, 0, 0.5)"}, {number: 40, color: "rgba(255, 0, 0, 0.5)"},],
    reducers: {
        add: (state, action) => {
            state.push({number: parseInt(action.payload.number), color: action.payload.color});
        },
        swap: (state, action) => {
            const temp = state[action.payload.i];
            state[action.payload.i] = state[action.payload.j];
            state[action.payload.j] = temp;
        }
    },
});

export const { add, swap } = inputArraySlice.actions;

export const selectInputArray = state => state.inputArray;

export default inputArraySlice.reducer;
