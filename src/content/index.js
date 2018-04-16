import React from 'react';
import { map } from 'lodash';
// import PropTypes from 'prop-types';
import { TodoItem } from '../todo-item';

export const Content = (props) => {
    const { todos, toggleDone, saveItem } = props;

    return (
        <ul>
            {
                map(todos, item => (
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
