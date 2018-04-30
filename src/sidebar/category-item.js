import React from 'react';
import { CategoryList } from './category-list';

export const CategoryItem = ({ category, categories, selectCat }) => {

    return (
        <li className="link-like">
            <button onClick={ () => selectCat(category.id) }>{ category.name }</button>
            {
                <CategoryList categories={ categories }
                              parentId={ category.id }
                              selectCat={ selectCat }/>
            }
        </li>
    );
};