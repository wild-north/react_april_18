import React from 'react';

export const AddItem = (props) => {
    const { name, onAdd, onNameChange, title } = props;

    const onSubmit = (ev) => {
        ev.preventDefault();

        return onAdd(name);
    };

    const onChange = (ev) => {
        onNameChange(ev.target.value);
    };

    return (
        <div className="add-item">
            <form onSubmit={ onSubmit }>
                <input type="text"
                       value={ name }
                       onChange={ onChange }
                       placeholder={ title }
                />
                <button type="submit">OK</button>
            </form>
        </div>
    );
};