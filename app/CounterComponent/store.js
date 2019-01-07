import { createStore } from 'redux';

const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            console.log('Counter component INCREMENT');
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            console.log('Counter component DECREMENT');
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

/*ТАК не делаем!*/function brokenReducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            // NO! BAD: this is changing state!
            state.count++;
            return state;

        case 'DECREMENT':
            // NO! BAD: this is changing state too!
            state.count--;
            return state;

        default:
            // this is fine.
            return state;
    }
}

const store = createStore(reducer);

    store.subscribe(() => console.log('STORE CHANGED:  ', store.getState()));

export default store;