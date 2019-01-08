//import {changeDataInStoreAction} from './actions'

/*export function getDataProvider () {
    console.log('provider start');
    fetch('http://5826ed963900d612000138bd.mockapi.io/items')
        .then((response) => {return response})
        .then((response) => response.json())
        .then((items) => {return changeDataInStoreAction(items)} )
        .then(() => console.log('provider stop'))
}*/

import {changeDataInStoreAction} from "./actions";

export function getDataProvider(arg) {
    console.log('getDataProvider arg', arg);
    return (dispatch) => {
        fetch('http://5826ed963900d612000138bd.mockapi.io/items')
            .then((response) => {return response})
            .then((response) => response.json())
            .then((items) => dispatch(changeDataInStoreAction(items, arg)))
    };
}


