import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import MyComponent from './MyComponent';
import './newStore'
import CounterComponent from './CounterComponent/Component'
import CounterStore from './CounterComponent/store'

const store = configureStore(); // You can also pass in an initialState here
//const counterStore = CounterStore();
render(
    <Provider store={store}>
        <MyComponent />
    </Provider>,
    document.getElementById('root')
);

render(
    <Provider store={CounterStore}>
        <CounterComponent/>
    </Provider>,
document.getElementById('counterComponent')
);