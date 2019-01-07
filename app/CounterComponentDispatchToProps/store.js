import { createStore } from 'redux';

const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            //console.log('Counter component INCREMENT');
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
           // console.log('Counter component DECREMENT');
            return {
                count: state.count - 1
            };
        case 'COUNTERVALUE':
           // console.log('Counter component COUNTERVALUE');
          //  console.log('action.value ', action.value);
        return{
          count: state.count = action.value
        };

        default:
            return state;
    }
}


const store = createStore(reducer);

    store.subscribe(() => console.log('STORE CHANGED (of componentWith: mapDispatchToProps):  ', store.getState()));

export default store;