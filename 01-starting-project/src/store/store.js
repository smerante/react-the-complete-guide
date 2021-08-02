import { createSlice, configureStore } from '@reduxjs/toolkit'
// export const INCREMENT_TYPE = 'INCREMENT';
// export const DECREMENT_TYPE = 'DECREMENT';
// export const TOGGLE_TYPE = 'TOGGLE';

const INITIAL_STATE = {
    counter: 0,
    visible: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: INITIAL_STATE,
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

// const counterReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case INCREMENT_TYPE:
//             return { ...state, counter: state.counter + action.payload }
//         case DECREMENT_TYPE:
//             return { ...state, counter: state.counter - action.payload }
//         case TOGGLE_TYPE:
//             return { ...state, visible: !state.visible }
//         default:
//             return state;
//     }
// }

// const store = createStore(counterReducer, /* preloadedState, */
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const store = createStore(counterSlice.reducer); Can be a problem for multiple reducers we might need

// Unique action identifiers will be auto created with the toolkit

const store = configureStore({
    // reducer: {counterReducer: counterSlice} for multiple reducers
    reducer: counterSlice.reducer
});

export const COUNTER_ACTIONS = counterSlice.actions;
export default store;