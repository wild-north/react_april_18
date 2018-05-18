import { toggleDone, saveTodo, deleteTodo } from '../actions';
import { itemsForSelectedCategory } from '../selectors';
import { createConnectorForSelector } from '../helpers';
import { createSelector } from 'reselect';
import { showModal } from '../components/modals/modal';
import { confirmTaskDeletion } from '../actions';

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

export const confirmModalConnector = createConnectorForSelector(null, {
    onConfirm: () => confirmTaskDeletion()
});