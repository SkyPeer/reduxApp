import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const initialState = {
    total: 0,
    items: []
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGESTORE':
            console.log('CHANGESTORE REDUCE arg:', action.arg);
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

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log('FETCH (with DispToProps) STORE CHANGED'/*, store.getState()*/));

export default store;