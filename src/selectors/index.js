import { createSelector } from 'reselect';
import { filter } from 'lodash';

const todos = (state) => state.todos;
const categories = (state) => state.categories;

const items = createSelector(
    [todos],
    todos => todos.items
);

const selectedCategory = createSelector(
    [categories],
    categories => categories.selectedCategory
);

export const getItemsForSelectedCategory = createSelector(
    [items, selectedCategory],
    (items, selectedCategory) =>
        filter(items, item => item.categoryId === selectedCategory)
);