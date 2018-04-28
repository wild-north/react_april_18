import React from 'react';
import { map, compact, isEmpty } from 'lodash';
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

const CategoryList = ({ categories, parentId, selectCat }) => {
    const children = compact(map(categories, cat => {
        if (cat.parentId === parentId) {
            return <CategoryItem key={cat.id}
                        category={ cat }
                        categories={ categories }
                        selectCat={ selectCat }/>
        }
    }));
    
    if (!isEmpty(children)) {
        return ( <ul>{ children }</ul> );
    }

    return null;
};

export const Sidebar = ({ categories, selectCat }) => {
    return (
        <div className="sidebar">
            <CategoryList categories={ categories }
                          parentId={ null }
                          selectCat={ selectCat }/>
        </div>
    )
};