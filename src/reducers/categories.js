import * as constants from '../actions/constants';
import { map } from 'lodash';

const initialState = {
    list: {
        1: {id: 1, name: 'React', parentId: null},
        2: {id: 2, name: 'React-router', parentId: 1},
        3: {id: 3, name: 'Выучить редакс', parentId: null},
        4: {id: 4, name: 'Блабла 1', parentId: 2},
        5: {id: 5, name: 'Блабла 2', parentId: 2}
    },
    selectedCategory: 1
};

export const categories = function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case constants.CATEGORY_SELECT:
            return Object.assign({}, state, {
                selectedCategory: payload
            });
        case constants.CATEGORY_ADD: {
            const lastId = getNewId(state.list);

            const newItem = {
                id: lastId,
                name: payload,
                parentId: null
            };

            const updatedList = Object.assign({}, state.list, {
                [lastId]: newItem
            });

            return Object.assign({}, state, {
                list: updatedList
            });
        }
    }


    return state;
};

function getNewId(list) {
    const ids = map(list, item => item.id);

    return ids[ids.length - 1] + 1;
}