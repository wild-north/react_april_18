import React from 'react';
import PropTypes from 'prop-types';

export const SingleUser = ({data, onRemoveUser}) => (
    <li>
        { data.name }
        {' '}
        <button onClick={ () => onRemoveUser(data.id) }>[x]</button>
    </li>
);

SingleUser.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    }).isRequired,
    onRemoveUser: PropTypes.func.isRequired
};