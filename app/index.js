import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions';
import ItemList from './ItemList';

const store = configureStore(); // You can also pass in an initialState here

render(
    <Provider store={store}>
        <ItemList />
    </Provider>,
    document.getElementById('root')
);