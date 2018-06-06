import { getCategories } from '../actions';
import {
    createConnectorForSelector
} from '../helpers';

export const appConnector = createConnectorForSelector(null, {
    getCategories
});