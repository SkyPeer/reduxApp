import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import MyComponent from './MyComponent';
import './newStore'

import CounterComponent from './CounterComponent/Component'
import CounterStore from './CounterComponent/store'

import CounterComponentDispToProps from './CounterComponentDispatchToProps/Component'
import CounterDispToPropsStore from './CounterComponentDispatchToProps/store'

import ReduxFetch from './Fetch/Component'

const store = configureStore(); // You can also pass in an initialState here
//const counterStore = CounterStore();

//console.log(MyComponent);

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

render(
    <Provider store={CounterDispToPropsStore}>
        <CounterComponentDispToProps/>
    </Provider>,
    document.getElementById('counterComponentDispProps')
);


render(
    <ReduxFetch/>,
    document.getElementById('fetch')
);