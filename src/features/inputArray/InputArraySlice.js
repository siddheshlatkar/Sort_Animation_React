import {createSlice} from '@reduxjs/toolkit';

export const inputArraySlice = createSlice({
    name: 'inputArray',
    initialState: {array: [{number: 50, color: "rgba(0, 0, 255, 0.5)"}, {number: 40, color: "rgba(0, 255, 0, 0.5)"}, {number: 30, color: "rgba(255, 0, 0, 0.5)"},
        {number: 20, color: "rgba(0, 0, 255, 0.5)"}, {number: 10, color: "rgba(0, 255, 0, 0.5)"}, {number: 23, color: "rgba(255, 0, 0, 0.5)"},], i: 1, j: 1},
    reducers: {
        add: (state, action) => {
            state.array.push({number: parseInt(action.payload.number), color: action.payload.color});
        },
        nextSwap: (state, action) => {
            const n = state.array.length;
            if (n <= 1) {
                return;
            }
            var i = state.i;
            var j = state.j;

            if (j == 0) {
                state.i = state.i + 1;
                state.j = state.i;
                return;
            }

            while(i < n) {
                if (j <= 0) {
                    j = i;
                    state.i = i;
                    state.j = j;
                    return;
                }

                while(j > 0) {
                    if (state.array[state.j - 1].number > state.array[state.j].number) {
                        const temp = state.array[state.j];
                        state.array[state.j] = state.array[state.j - 1];
                        state.array[state.j - 1] = temp;
                        j = j - 1;
                        state.i = i;
                        state.j = j;
                        return;
                    }
                    j = j - 1;
                }
                state.i = state.i + 1;
                return;
            }
        }
    },
});

export const { add, nextSwap } = inputArraySlice.actions;

export const selectInputArray = state => state.inputArray.array;
export const selectI = state => state.inputArray.i;
export const selectJ = state => state.inputArray.j;

export default inputArraySlice.reducer;
