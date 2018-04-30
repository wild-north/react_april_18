import * as constants from '../actions/constants';

const initialState = {
    items: {
        1: {id: 1, text: 'Выучить реакт', done: true, categoryId: 1},
        2: {id: 2, text: 'Выучить реакт-роутер', done: false, categoryId: 2},
        3: {id: 3, text: 'Выучить редакс', done: false, categoryId: 3},
        4: {id: 4, text: 'task 1', done: true, categoryId: 1},
        5: {id: 5, text: 'task 2', done: false, categoryId: 2},
        6: {id: 6, text: 'task 3', done: false, categoryId: 3},
    }
};

export const todos = function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case constants.TODO_DONE_TOGGLE: {
            const id = payload;

            const modifiedItem = getUpdatedListItem(state.items, id, {
                done: !state.items[id].done
            });

            const modifiedItemList = Object.assign({}, state.items, {
                [id]: modifiedItem
            });

            return Object.assign({}, state, {
                items: modifiedItemList
            });
        }

        case constants.TODO_SAVE: {
            const { id, text } = payload;
            const modifiedItem = getUpdatedListItem(state.items, id, {
                text
            });
            const modifiedItemList = Object.assign({}, state.items, {
                [id]: modifiedItem
            });

            return Object.assign({}, state, {
                items: modifiedItemList
            });


        }

    }

    return state;
};

const getUpdatedListItem = (list, id, updatedItem) => Object.assign({}, list[id], updatedItem);