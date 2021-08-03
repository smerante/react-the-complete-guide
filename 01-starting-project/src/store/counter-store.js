
import { createSlice } from '@reduxjs/toolkit';
export const INITIAL_COUNTER_STATE = {
    counter: 0,
    visible: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: INITIAL_COUNTER_STATE,
    reducers: {
        increment(state, action) {
            state.counter += action.payload;
        },
        decrement(state, action) {
            state.counter -= action.payload;
        },
        toggle(state) {
            state.visible = !state.visible;
        },
    }
});

export const COUNTER_ACTIONS = counterSlice.actions;
export default counterSlice;