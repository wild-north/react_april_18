import React from 'react';
import { map } from 'lodash';
import './styles.css';

const CategoryItem = ({ category, categories, selectCat }) => {

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

const CategoryList = ({ categories, parentId, selectCat }) => (
    <ol>
        {
            map(categories, cat =>
                cat.parentId === parentId
                    && <CategoryItem key={cat.id}
                                     category={ cat }
                                     categories={ categories }
                                     selectCat={ selectCat }/>
            )
        }
    </ol>
);

export const Sidebar = ({ categories, selectCat }) => {
    return (
        <div className="sidebar">
            <CategoryList categories={ categories }
                          parentId={ null }
                          selectCat={ selectCat }/>
        </div>
    )
};