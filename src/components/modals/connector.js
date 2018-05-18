import { createConnectorForSelector } from '../../helpers';
import { createSelector } from 'reselect';
import {
    isVisible,

    /*actions*/
    hideModal
} from './modal';

const modalSelector = createSelector(
    isVisible,
    (show) => ({ show })
);

export const modalConnector = createConnectorForSelector(modalSelector, {
    onHide: () => hideModal()
});