const redux = require('redux');

const INCREMENT_TYPE = 'INCREMENT';
const DECREMENT_TYPE = 'DECREMENT';
const INITIAL_STATE = {
    counter: 0,
    actionType: 'init'
}
const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT_TYPE:
            return {
                counter: state.counter + 1,
                actionType: INCREMENT_TYPE
            }
        case DECREMENT_TYPE: 
            return {
                counter: state.counter - 1,
                actionType: DECREMENT_TYPE
            }
        default:
            break;
    };
    return state;
}

const store = redux.createStore(counterReducer);
console.warn(store.getState());

const subscriber = () => {
    const latestState = store.getState();
    console.warn(latestState);
}
store.subscribe(subscriber);

store.dispatch({ type: INCREMENT_TYPE });
store.dispatch({ type: DECREMENT_TYPE });

