import React from 'react';
import { map } from 'lodash';
import { TodoItem } from '../todo-item';
import { todoConnector } from './connector';

const Todo = todoConnector(TodoItem);

export const Content = (props) => {
    const { todos } = props;

    const children = map(todos, item => (
        <Todo item={ item } key={ item.id }/>
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