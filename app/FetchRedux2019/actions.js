

import {getDataProvider} from "./providers";

export function changeDataInStoreAction(items, arg) {
    console.log(' --- changeDataInStoreAction');
    return {
        type: 'CHANGESTORE', items: items, arg: arg
    };
}

export function getDataAction(arg) {
    console.log('getDataAction arg:', arg);
    return getDataProvider(arg)
}