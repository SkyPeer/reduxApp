
export function increment () {
    return { type: 'INCREMENT' };
}

export function decrement () {
    return { type: 'DECREMENT' };
}

export function counterValue (arg) {
    return { type: 'COUNTERVALUE', value: arg }
}