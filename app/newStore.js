import { createStore } from 'redux';

/*function reduxState(reducer, initialState) {
    let currentReducer = reducer;
    let currentState = initialState;
    let listener = () => {};

    return {
        dispatch(action) {
            currentState = currentReducer(currentState, action);
            listener();
            return action;
        },
        subscribe(newListener) {
            listener = newListener;
        },
        getState() {
            return currentState;
        }
    };
}*/



//reducers
function reduxState(
    state = 0,

    action) {

    switch (action.type) {

        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state - 1;

        default:
            return state;
    }
}

let store = createStore(reduxState);

store.subscribe(() =>
    console.log('newStore subscriber:  ', store.getState())
);

// actions
store.dispatch({ type: 'INCREMENT' });
//store.dispatch({ type: 'INCREMENT' });
//store.dispatch({ type: 'DECREMENT' });

export default store