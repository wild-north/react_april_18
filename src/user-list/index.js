import React from 'react';
import PropTypes from 'prop-types';
import { SingleUser } from '../single-user';

export const UserList = ({ list, onRemoveUser }) => (
    <ul>
        {
            list.map(item =>
                <SingleUser data={ item }
                            key={item.id}
                            onRemoveUser={ onRemoveUser }/>
            )
        }
    </ul>
);
UserList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.object
    ),
    onRemoveUser: PropTypes.func.isRequired
};
