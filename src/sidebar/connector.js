import { connect } from 'react-redux';
import {
    selectCategory, addCategory, addCategoryChange
} from '../actions';
import { createImmutableSelector } from '../helpers';

import { list, selectedCategory } from '../selectors/categories'

const sidebarSelector = createImmutableSelector(
    [list, selectedCategory],
    (list, selectedCategory) => ({
        categories: list.toJS(),
        selected: selectedCategory
    })
);

export const sidebarConnector = connect(
    sidebarSelector,
    { selectCategory }
);

export const addCategoryConnector = connect(
    (state) => ({ name: state.addCategory.text }),
{
    onAdd: addCategory,
    onNameChange: addCategoryChange
});