import React from 'react';
import './styles.css';
import { CategoryList } from './category-list';

export const Sidebar = ({ categories, selectCategory }) => (
    <div className="sidebar">
        <CategoryList categories={ categories }
                      parentId={ null }
                      selectCat={ selectCategory }/>
    </div>
);