import React from 'react';
import { CategoryList } from './category-list';
import { AddItem } from '../add-item';
import { addCategoryConnector } from './connector';

import { sidebar } from './styles.css';

const AddCategory = addCategoryConnector(AddItem);

export const Sidebar = (props) => {
    const {
        categories, selected, selectCategory
    } = props;

    return (
        <div className={ sidebar }>
            <AddCategory title="Enter category"/>
            <hr/>
            <CategoryList categories={ categories }
                          parentId={ null }
                          selectCat={ selectCategory }
                          selected={ selected }
            />
        </div>
    );
}