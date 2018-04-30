import React, {Component, Fragment} from 'react';
import { Content } from '../content';
import { Sidebar } from '../sidebar';
import { sidebarConnector } from '../sidebar/connector';
import { contentConnector } from '../content/connector';
import './index.css';

const MySidebar = sidebarConnector(Sidebar);
const MyContent = contentConnector(Content);

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
    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <MySidebar selectCat={ this.selectCat }/>
                    <MyContent saveItem={ this.saveItem }/>
                </div>
            </Fragment>
        );
    }
}

export default TodoApp;













