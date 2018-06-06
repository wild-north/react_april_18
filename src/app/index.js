import React, {Component, Fragment} from 'react';
import { Content } from '../todos';
import { Sidebar } from '../sidebar';
import { sidebarConnector } from '../sidebar/connector';
import { contentConnector } from '../todos/connector';
import './index.css';
import Confirm from '../components/modals/confirm-delete-category';
import { confirmModalConnector } from '../todos/connector';
import { store } from '../index';
import { getCategories } from '../actions';
import { appConnector } from './connector';

const MySidebar = sidebarConnector(Sidebar);
const MyContent = contentConnector(Content);
const ConfirmTaskDeletion = confirmModalConnector(Confirm);

class TodoApp extends Component {
    componentWillMount() {
        this.props.getCategories();
    }
    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <MySidebar />
                    <MyContent />
                    <ConfirmTaskDeletion/>
                </div>
            </Fragment>
        );
    }
}

export default appConnector(TodoApp);













