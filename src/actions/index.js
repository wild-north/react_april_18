import * as constants from './constants';
import { createAction, createSequence } from '../helpers';
import { hideModal } from '../components/modals/modal';
import { isArray, isEmpty } from 'lodash';

export const selectCategory = createAction(constants.CATEGORY_SELECT);
export const toggleDone = createAction(constants.TODO_DONE_TOGGLE);
export const saveTodo = createAction(constants.TODO_SAVE);
export const deleteTodo = createAction(constants.TODO_DELETE);

export const addCategory = createAction(constants.CATEGORY_ADD);
export const addCategoryChange = createAction(constants.CATEGORY_ADD_CHANGE);

export const requestData = createAction('DATA_REQUEST');
export const resolveData = createAction('DATA_RESOLVE');
export const failData = createAction('DATA_FAILURE');

export const confirmTaskDeletion = createAction(constants.TASK_DELETE_CONFIRM);


export const getData = (payload) => (dispatch) => {
    dispatch(requestData());
    //////////// место для аякс-запроса ////////
    setTimeout(() => {
        Math.random() > 0.5
            ? dispatch(resolveData())
            : dispatch(failData());
    }, 2000);
};

// const addCatAndCloseModal = (dispatch) => {
//   dispatch({ type: 'CAT_ADD' });
//
//   dispatch({ type: 'MODAL_CLOSE' });
// };
//
//
// <button onClick={ addCatAndCloseModal }>OK</button>


// const createSequence = (config) =>
//   (payload) =>
//     (dispatch) => {
//       if (isArray(config.actions) && !isEmpty(config.actions)) {
//         config.actions.forEach(
//           action => dispatch(action(payload))
//         );
//       }
//     };

export const toggleDoneAndDoNothing = createSequence({
  actions: [toggleDone]
});

export const deleteCategoryAndCloseModal = createSequence({
  actions: [deleteTodo, () => hideModal()]
});

export const reallyBigAction = createSequence({
  actions: [
    toggleDoneAndDoNothing,
    deleteCategoryAndCloseModal
  ]
});

// ДЗ - реализовать функцию и middleware, которые можно использовать так:

export const fetchData = createApiCall({
  endpoint: 'http://blabla.com',
  method: 'GET',
  payload,
  actions: [
    'DATA_FETCH_REQUEST',
    'DATA_FETCH_SUCCESS',
    'DATA_FETCH_FAILURE'
  ]
});

//fetchData({ myData: 123123 }); // http://blabla.com?myData=123123

/*export const deleteCategoryAndCloseModal = (payload) => (dispatch) => {
    dispatch(deleteTodo(payload));
    dispatch(hideModal());
};*/
