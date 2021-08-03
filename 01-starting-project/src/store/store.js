import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter-store';
import authSlice from './auth-store';
// export const INCREMENT_TYPE = 'INCREMENT';
// export const DECREMENT_TYPE = 'DECREMENT';
// export const TOGGLE_TYPE = 'TOGGLE';



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
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

export default store;