import { combineReducers } from 'redux';
import { categories } from './categories';
import { todos } from './todos';
import { addCategory } from './add-category';

export const reducer = combineReducers({
    categories,
    todos,
    addCategory
});