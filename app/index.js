import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import newStore from './newRedux/store'
import NewReduxComponent from './newRedux/Component'


import configureStore from './store';
import MyComponent from './MyComponent';
import './newStore'

import CounterComponent from './CounterComponent/Component'
import CounterStore from './CounterComponent/store'

import CounterComponentDispToProps from './CounterComponentDispatchToProps/Component'
import CounterDispToPropsStore from './CounterComponentDispatchToProps/store'

import ReduxFetch from './Fetch/Component'
import FetchStore from './Fetch/store'

import ReduxFetchDispatchToProps from './FetchDispatchToProps/Component'
import FetchStoreDispatchToProps from './FetchDispatchToProps/store'

const store = configureStore(); // You can also pass in an initialState here
//const counterStore = CounterStore();

//console.log(MyComponent);


// render(
//     <Provider store={newStore}>
//         <newReduxComponent/>
//     </Provider>,
//     document.getElementById('newRedux')
// );

render(
    <Provider store={newStore}>
        <NewReduxComponent/>
    </Provider>,
    document.getElementById('newRedux')
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
    <Provider store={FetchStore}>
        <ReduxFetch/>
    </Provider>,

    document.getElementById('fetch')
);

render(
    <Provider store={FetchStoreDispatchToProps}>
        <ReduxFetchDispatchToProps/>
    </Provider>,

    document.getElementById('fetchdispprops')
);


render(
    <Provider store={store}>
        <MyComponent />
    </Provider>,
    document.getElementById('root')
);