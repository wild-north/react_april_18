import { createStore } from 'redux';

const initialState = {
    count: 0,
    price: 10,
    total: 0
};

export const store = createStore(function(state = initialState, action) {

    switch(action.type) {
        case 'INCREMENT': {
            const newCount = state.count + 1;

            return {
                count: newCount,
                price: state.price,
                total: state.price * newCount
            }
        }

        case 'DECREMENT': {
            const newCount = state.count - 1;

            return {
                count: newCount > 0 ? newCount : 0,
                price: state.price,
                total: newCount > 0 ? state.price * newCount : 0
            }
        }

        case 'CALCULATE': {
            return Object.assign({}, state, {
                count: action.payload,
                total: state.price * action.payload
            });
        }
    }


    return state;
});