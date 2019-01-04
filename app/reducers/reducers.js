
export function items(
    state = [],

    action
)
    {
        switch (action.type) {
            case 'ITEMS_FETCH_DATA_SUCCESS':
                console.log('action.type = ITEMS_FETCH_DATA_SUCCESS');
                return action.items;

            default:
                return state;
    }
}