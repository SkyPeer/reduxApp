import { createStore } from 'redux';

const initialState = {
    total: 0,
    items: []
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGESTORE':

            //console.log('Counter component INCREMENT');

            state.items = action.items;
            state.total = action.items.length;
            return {
                items: state.items,
                total: state.total
            };

        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => console.log('FETCH STORE CHANGED', store.getState()));

export default store;