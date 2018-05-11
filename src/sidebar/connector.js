import { connect } from 'react-redux';
import {
    selectCategory, addCategory, addCategoryChange
} from '../actions';
import { createSelector } from 'reselect';

import { list, selectedCategory } from '../selectors/categories'

const sidebarSelector = createSelector(
    [list, selectedCategory],
    (list, selectedCategory) => ({
        categories: list.toJS(),
        selected: selectedCategory
    })
);

export const sidebarConnector = connect(
    (state) => sidebarSelector(state),
    { selectCategory }
);

export const addCategoryConnector = connect(
    (state) => ({ name: state.addCategory.text }),
{
    onAdd: addCategory,
    onNameChange: addCategoryChange
});