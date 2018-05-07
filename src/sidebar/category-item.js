import React from 'react';
import { CategoryList } from './category-list';
import classnames from 'classnames';

export const CategoryItem = ({ category, categories, selectCat, selected }) => {

    return (
        <li className={ classnames("link-like", {
            active: selected === category.id
        }) }>
            <span onClick={ () => selectCat(category.id) }>{ category.name }</span>
            {
                <CategoryList categories={ categories }
                              parentId={ category.id }
                              selectCat={ selectCat }
                              selected={ selected }
                />
            }
        </li>
    );
};