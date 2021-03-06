import * as constants from '../actions/constants';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    items: {
        1: {id: 1, text: 'Выучить реакт', done: true, categoryId: 1},
        2: {id: 2, text: 'Выучить реакт-роутер', done: false, categoryId: 2},
        3: {id: 3, text: 'Выучить редакс', done: false, categoryId: 3},
        4: {id: 4, text: 'task 1', done: true, categoryId: 1},
        5: {id: 5, text: 'task 2', done: false, categoryId: 2},
        6: {id: 6, text: 'task 3', done: false, categoryId: 3},
        7: {id: 7, text: 'Забыть реакт', done: false, categoryId: 1}
    }
});

export const todos = function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case constants.TODO_DONE_TOGGLE: {
            return state.updateIn(
                ['items', `${payload}`, 'done'],
                (done) => !done
            )
        }

        case constants.TODO_SAVE: {
            const { id, text } = payload;

            return state.updateIn(
                ['items', `${id}`, 'text'],
                () => text
            );
        }

        case constants.TODO_DELETE: {
            return state.deleteIn(['items', `${payload}`]);
        }

        case constants.TASK_DELETE_CONFIRM: {
            return state.deleteIn(['items', '1']);
        }

        default:
            return state;
    }

};
