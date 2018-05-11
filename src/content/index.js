import React from 'react';
import { map, filter } from 'lodash';
import { TodoItem } from '../todo-item';

export const Content = (props) => {
    const { todos, toggleDone, saveItem } = props;

    const children = map(todos, item => (
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
