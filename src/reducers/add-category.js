import * as constants from '../actions/constants';

const initialState = {
    text: ''
};

export const addCategory = function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case constants.CATEGORY_ADD_CHANGE:
            return Object.assign({}, state, {
                text: payload
            });

        case constants.CATEGORY_ADD:
            return initialState;

        default:
            return state;
    }
};