import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import MyComponent from './MyComponent';
import './newStore'

const store = configureStore(); // You can also pass in an initialState here

render(
    <Provider store={store}>
        <MyComponent />
    </Provider>,
    document.getElementById('root')
);