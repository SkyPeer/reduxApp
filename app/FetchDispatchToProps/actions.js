/*import {getDataProvider} from "./providers";

export function changeDataInStoreAction(items) {
    console.log(' --- changeDataInStoreAction');
    return ({ type: 'CHANGESTORE', items: items });
};

export function getDataAction() {
    console.log('getDataAction()');
    console.log(getDataProvider())
}*/

import {getDataProvider} from "./providers";

export function changeDataInStoreAction(items, arg) {
    console.log(' --- changeDataInStoreAction');
    return {
        type: 'CHANGESTORE', items: items, arg: arg
    };
}

export function getDataAction(arg) {
    console.log('getDataAction arg:', arg);
    /*return (dispatch) => {
        fetch('http://5826ed963900d612000138bd.mockapi.io/items')
            .then((response) => {return response})
            .then((response) => response.json())
            .then((items) => dispatch(changeDataInStoreAction(items)))
    };*/
    return getDataProvider(arg)
}