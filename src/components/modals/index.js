import React, { Fragment} from 'react';
import { Modal, Button } from 'react-bootstrap';
import { modalConnector } from './connector';

export const ModalComponent = (props) => {
    const { title, show, children, hideModal, onHide, buttons } = props;

    return (
        <Modal show={ show } onHide={ onHide }>
            <Modal.Header closeButton>
            {
                title && (
                    <Modal.Title>{ title }</Modal.Title>
                )
            }
            </Modal.Header>
            <Modal.Body>
                { children }
            </Modal.Body>
            <Modal.Footer>
                {
                    buttons ? buttons : (
                        <div className="text-center">
                            <Button onClick={ onHide }>Close</Button>
                        </div>
                    )
                }
            </Modal.Footer>
        </Modal>
    );
};

export default modalConnector(ModalComponent);