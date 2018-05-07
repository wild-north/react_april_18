import * as constants from './constants';
import { createAction } from '../helpers';

export const selectCategory = createAction(constants.CATEGORY_SELECT);
export const toggleDone = createAction(constants.TODO_DONE_TOGGLE);
export const saveTodo = createAction(constants.TODO_SAVE);

export const addCategory = createAction(constants.CATEGORY_ADD);
export const addCategoryChange = createAction(constants.CATEGORY_ADD_CHANGE);

export const requestData = createAction('DATA_REQUEST');
export const resolveData = createAction('DATA_RESOLVE');
export const failData = createAction('DATA_FAILURE');


export const getData = (payload) => (dispatch) => {
    dispatch(requestData());
    //////////// место для аякс-запроса ////////
    setTimeout(() => {
        Math.random() > 0.5
            ? dispatch(resolveData())
            : dispatch(failData());
    }, 2000);
};