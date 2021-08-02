import { createStore } from 'redux';

export const INCREMENT_TYPE = 'INCREMENT';
export const DECREMENT_TYPE = 'DECREMENT';
export const TOGGLE_TYPE = 'TOGGLE';

const INITIAL_STATE = {
    counter: 0,
    visible: true
}

const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT_TYPE:
            return { ...state, counter: state.counter + action.payload }
        case DECREMENT_TYPE:
            return { ...state, counter: state.counter - action.payload }
        case TOGGLE_TYPE:
            return { ...state, visible: !state.visible }
        default:
            return state;
    }
}

const store = createStore(counterReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;