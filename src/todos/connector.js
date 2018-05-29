import { toggleDone, saveTodo, deleteTodo } from '../actions';
import { itemsForSelectedCategory } from '../selectors';
import { createConnectorForSelector, createImmutableSelector } from '../helpers';
import { createSelector } from 'reselect';
import { showModal, data } from '../components/modals/modal';
import { reallyBigAction } from '../actions';

const contentSelector = createSelector(
    itemsForSelectedCategory,
    (todos) => ({
        todos: todos.toJS()
    })
);
export const contentConnector = createConnectorForSelector(contentSelector);

export const todoConnector = createConnectorForSelector(null, {
    toggleDone,
    saveItem: saveTodo,
    deleteItem: deleteTodo,
    showModal
});

const confirmModalSelector = createImmutableSelector(
  data,
  data => ({ data })
);

export const confirmModalConnector = createConnectorForSelector(confirmModalSelector, {
    onConfirm: reallyBigAction
});