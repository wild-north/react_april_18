import React, {Component, Fragment} from 'react';
import { Content } from '../content';
import { Sidebar } from '../sidebar';
import { sidebarConnector } from '../sidebar/connector';
import { contentConnector } from '../content/connector';
import './index.css';

const MySidebar = sidebarConnector(Sidebar);
const MyContent = contentConnector(Content);

class TodoApp extends Component {
    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <MySidebar />
                    <MyContent saveItem={ this.saveItem }/>
                </div>
            </Fragment>
        );
    }
}

export default TodoApp;













