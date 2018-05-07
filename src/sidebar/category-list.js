import React from 'react';
import { CategoryItem } from './category-item';
import { map, compact, isEmpty } from 'lodash';

export const CategoryList = ({ categories, parentId, selectCat, selected }) => {
    const children = compact(map(categories, cat => {
        if (cat.parentId === parentId) {
            return <CategoryItem key={cat.id}
                                 category={ cat }
                                 categories={ categories }
                                 selectCat={ selectCat }
                                 selected={ selected }
            />
        }
    }));

    if (!isEmpty(children)) {
        return ( <ul>{ children }</ul> );
    }

    return null;
};