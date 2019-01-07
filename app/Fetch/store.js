import { createStore } from 'redux';

const initialState = {
    items: []
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGESTORE':

            //console.log('Counter component INCREMENT');

            state.items = action.items;

            return {
                items: state.items
            };

        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => console.log('FETCH STORE CHANGED', store.getState()));

export default store;