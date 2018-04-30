import React from 'react';
import { map, filter } from 'lodash';
import { TodoItem } from '../todo-item';

export const Content = (props) => {
    const { todos, toggleDone, saveItem, categoryId } = props;

    const filteredItems = filter(todos, item => item.categoryId === categoryId);

    const children = map(filteredItems, item => (
        <TodoItem item={ item }
                  key={ item.id }
                  toggleDone = { toggleDone }
                  saveItem = { saveItem }
        />
    ));

    return (
        <ul>
            {
                children.length
                    ? children
                    : <p>There is no todo items</p>
            }
        </ul>
    );
};
