import { connect } from 'react-redux';
import {
    selectCategory, addCategory, addCategoryChange
} from '../actions';


export const sidebarConnector = connect((state) => {
    return {
        categories: state.categories.list,
        selected: state.categories.selectedCategory
    };
}, {
    selectCategory
});

export const addCategoryConnector = connect(
    (state) => ({ name: state.addCategory.text }),
{
    onAdd: addCategory,
    onNameChange: addCategoryChange
});