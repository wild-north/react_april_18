import { createImmutableSelector } from '../helpers';
import { selectedCategory } from '../selectors/categories';

const todos = (state) => state.todos;

const items = createImmutableSelector(
    todos,
    todos => todos.get('items')
);

export const itemsForSelectedCategory = createImmutableSelector(
    [items, selectedCategory],
    (items, selectedCategory) => {

        return items.filter(item => item.get('categoryId') === selectedCategory)
    }

);