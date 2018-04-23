import React from 'react';
import { map, filter } from 'lodash';
// import PropTypes from 'prop-types';
import { TodoItem } from '../todo-item';

export const Content = (props) => {
    const { todos, toggleDone, saveItem, categoryId } = props;

    const filteredItems = filter(todos, item => item.categoryId === categoryId);

    return (
        <ul>
            {
                map(filteredItems, item => (
                    <TodoItem item={ item }
                              key={ item.id }
                              toggleDone = { toggleDone }
                              saveItem = { saveItem }
                    />
                ))
            }
        </ul>
    );
};
