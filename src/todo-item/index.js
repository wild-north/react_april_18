import React, { PureComponent, Fragment } from 'react';

export class TodoItem extends PureComponent {
    constructor() {
        super();
        this.state = {
            editMode: false
        };
        this.toggleMode = this.toggleMode.bind(this);
    }

    toggleMode() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        const { editMode } = this.state;
        const { toggleMode } = this;

        return (
            <li>
                {
                    editMode
                        ? <EditItem { ...this.props } toggleMode={ toggleMode }/>
                        : <Item { ...this.props } toggleMode={ toggleMode }/>
                }
            </li>
        );
    }
}

const Item = ({ item, toggleDone, toggleMode, deleteItem }) => (
    <Fragment>
        <input type="checkbox"
               checked={ item.done }
               onChange={ () => toggleDone(item.id) }/>
        <span>{ item.text }</span>
        <button onClick={ toggleMode }>Edit</button>
        <button onClick={ () => deleteItem(item.id) }>Delete</button>
    </Fragment>
);

const EditItem = ({ item, saveItem, toggleMode }) => {
    let textField = null;

    const onSave = () => {
        const { id } = item;
        const text = textField.value;

        saveItem({ id, text });
        toggleMode();
    };

    return (
        <Fragment>
            <input type="text"
                   ref={ input => { textField = input; } }
                   defaultValue={ item.text }
            />
            <button onClick={ onSave }>Save</button>
            <button onClick={ toggleMode }>Cancel</button>
        </Fragment>
    );
};