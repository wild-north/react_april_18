import { toggleDone, saveTodo, deleteTodo } from '../actions';
import { itemsForSelectedCategory } from '../selectors';
import { createConnectorForSelector } from '../helpers';
import { createSelector } from 'reselect';

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
    deleteItem: deleteTodo
});