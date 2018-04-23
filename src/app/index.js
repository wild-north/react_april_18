import React, {Component, Fragment} from 'react';
import { Content } from '../content';
import { Sidebar } from '../sidebar';
import { Header } from '../header';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import './index.css';
import classnames from 'classnames';
import Modal from '../components/modal';

// import PropTypes from 'prop-types';

const todos = {
    1: {id: 1, text: 'Выучить реакт', done: true, categoryId: 1},
    2: {id: 2, text: 'Выучить реакт-роутер', done: false, categoryId: 2},
    3: {id: 3, text: 'Выучить редакс', done: false, categoryId: 3},
    4: {id: 4, text: 'task 1', done: true, categoryId: 1},
    5: {id: 5, text: 'task 2', done: false, categoryId: 2},
    6: {id: 6, text: 'task 3', done: false, categoryId: 3},
};

const categories = {
    1: {id: 1, name: 'React', parentId: null},
    2: {id: 2, name: 'React-router', parentId: 1},
    3: {id: 3, name: 'Выучить редакс', parentId: null},
    4: {id: 4, name: 'Блабла 1', parentId: 2},
    5: {id: 5, name: 'Блабла 2', parentId: 2}
};

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todos,
            categories,
            isModalOpened: false,
            selectedCat: 1
        };
        this.toggleDone = this.toggleDone.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.selectCat = this.selectCat.bind(this);
    }

    toggleDone(id) {
        const updatedItem = Object.assign(
            {}, this.state.todos[id], {done: !this.state.todos[id].done}
        );

        this.setState({
            todos: Object.assign({}, this.state.todos, { [id]: updatedItem })
        });
    }

    selectCat(id) {
        this.setState({
            selectedCat: id
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

    toggleModal() {
        this.setState({
            isModalOpened: !this.state.isModalOpened
        });
    }

    render() {
        const params = {
            todos: this.state.todos,
            toggleDone: this.toggleDone,
            saveItem: this.saveItem,
            Content: this.getContent
        };

        return (
            <Fragment>
                <div className="wrapper">
                    { this.state.selectedCat }
                    <Sidebar categories={ this.state.categories }
                             selectCat={ this.selectCat }/>
                    <Content todos={ this.state.todos }
                             toggleDone={ this.toggleDone }
                             saveItem={ this.saveItem }
                             categoryId={ this.state.selectedCat }/>
                </div>
                {/*<button onClick={ this.toggleModal }>Open Modal</button>*/}
                {/*<Modal show={ this.state.isModalOpened }*/}
                       {/*toggle={ this.toggleModal }/>*/}
            </Fragment>
        );
    }
}

export default TodoApp;

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function Main({ Content }) {
    return (
        <div className="main-wrapper">
            {
                <Content/>
            }
        </div>
    );
}












