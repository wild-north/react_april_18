import React, {Component, Fragment} from 'react';
import { Content } from '../content';
import { Sidebar } from '../sidebar';
import { Header } from '../header';

// import PropTypes from 'prop-types';

const todos = {
    1: {id: 1, text: 'Выучить реакт', done: true},
    2: {id: 2, text: 'Выучить реакт-роутер', done: false},
    3: {id: 3, text: 'Выучить редакс', done: false}
};

const categories = {
    1: {id: 1, name: 'React', parentId: null},
    2: {id: 2, name: 'React-router', parentId: 1},
    3: {id: 3, name: 'Выучить редакс', parentId: null}
};

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todos,
            categories
        };
        this.toggleDone = this.toggleDone.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    toggleDone(id) {
        const updatedItem = Object.assign(
            {}, this.state.todos[id], {done: !this.state.todos[id].done}
        );

        this.setState({
            todos: Object.assign({}, this.state.todos, { [id]: updatedItem })
        });
    }

    saveItem(id, text) {
        const updatedItem = Object.assign(
            {}, this.state.todos[id], { text }
        );

        this.setState({
            todos: Object.assign({}, this.state.todos, { [id]: updatedItem })
        });
    }



    render() {
        return (
            <Fragment>
                <Header/>
                <Sidebar/>
                <Content todos={ this.state.todos }
                         toggleDone={ this.toggleDone }
                         saveItem={ this.saveItem }
                />
            </Fragment>
        );
    }
}

export default TodoApp;














