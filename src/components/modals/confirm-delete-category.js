import React from 'react';
import ModalComponent from './index';
import { Button } from 'react-bootstrap';

const Buttons = ({ onConfirm, onReject }) => (
    <div className="text-center">
        <Button bsStyle="danger" onClick={ onConfirm }>OK</Button>
        <Button onClick={ onReject }>Cancel</Button>
    </div>
);

export const Confirm = ({ show, hideModal, onConfirm, onReject, data }) => {
    return (
        <ModalComponent buttons={
            <Buttons onConfirm={ () => onConfirm(data) } onReject={ onReject }/>
        }>
            <p>Are U sure you want to delete this task?</p>
        </ModalComponent>
    );
};

export default Confirm;