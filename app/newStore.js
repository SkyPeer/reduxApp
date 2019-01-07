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
    state = {
        counter: 0,
        a: 2,
    }, action) {

    switch (action.type) {

        case 'INCREMENT':
            console.log('INCREMENT action');
            //console.log(state);
            state.counter++;
            return state;

        case 'DECREMENT':
            console.log('DECREMENT action');
            //console.log(state);
            state.counter--;
            return state;

        default:
            return state;
    }
}

let store = createStore(reduxState);

store.subscribe(
    () => {

        //console.log('newStore subscriber:  ', store.getState(), /*'counter = ', counter.counter*/);
    }
);

// actions
//store.dispatch({ type: 'INCREMENT' });
//store.dispatch({ type: 'INCREMENT' });
//store.dispatch({ type: 'DECREMENT' });

export default store