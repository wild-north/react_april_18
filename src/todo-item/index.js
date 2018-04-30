import React, {Component, PureComponent, Fragment} from 'react';
// import PropTypes from 'prop-types';

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
                        ? <EditItem { ...this.props }
                                    toggleMode={ toggleMode }/>
                        : <Item { ...this.props }
                                toggleMode={ toggleMode }/>
                }
            </li>
        );
    }
}

const Item = ({ item, toggleDone, toggleMode }) => (
    <Fragment>
        <input type="checkbox"
               checked={ item.done }
               onChange={ () => toggleDone(item.id) }/>
        <span>{ item.text }</span>
        <button onClick={ toggleMode }>Edit</button>
        <button>Delete</button>
    </Fragment>
);

class EditItem2 extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
        this.changeText = this.changeText.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    changeText(ev) {
        this.setState({
            text: ev.target.value
        })
    }

    componentDidMount() {
        this.setState({
            text: this.props.item.text
        });
    }
    onSave() {
        const { id } = this.props.item;
        const { text } = this.state;

        this.props.saveItem({ id, text });
        this.props.toggleMode();
    }

    render() {
        const { item, toggleMode } = this.props;

        return (
            <Fragment>
                <input type="text"
                       ref={ input => { this.textField = input; } }
                       value={ item.text }
                       onChange={ this.changeText }
                />
                <button onClick={ this.onSave }>Save</button>
                <button onClick={ toggleMode }>Cancel</button>
            </Fragment>
        );
    }
}


const EditItem = ({ item, saveItem, toggleMode }) => {
    let textField = null;

    const onSave = () => {
        const { id } = item;
        const text = textField.value;

        saveItem(id, text);
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