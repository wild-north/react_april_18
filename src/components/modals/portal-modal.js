import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
    componentDidMount() {
        this.modalRoot = document.createElement('div');
        this.modalRoot.id = 'modals-root';
        document.body.appendChild(this.modalRoot);


    }

    render() {
        const { show, toggle } = this.props;

        if (show) {
            return (
                ReactDOM.createPortal(
                    <Fragment>
                        <div className="overlay"></div>
                        <div className="modal-wrapper">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad alias, consectetur dignissimos dolor dolore eos explicabo harum impedit iure magnam minima officia officiis quas repudiandae, sint temporibus vero voluptate.
                        </div>
                        <button onClick={ toggle }>Close Me</button>
                    </Fragment>,
                    this.modalRoot
                )
            );
        }

        return null;
    }
};

export default Modal;



