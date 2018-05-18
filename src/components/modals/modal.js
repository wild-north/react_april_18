import Immutable from 'immutable';
import { createAction, createImmutableSelector } from '../../helpers';
import { TASK_DELETE_CONFIRM } from '../../actions/constants';
/*constants*/
const MODAL_SHOW = 'app/modals/MODAL_SHOW';
const MODAL_HIDE = 'app/modals/MODAL_HIDE';

const initialState = Immutable.fromJS({
    show: false
});

/*reducer*/
export default function reducer(state = initialState, action) {
    const actions = {
        [MODAL_SHOW]: () => {
            return state.set('show', true);
        },
        [MODAL_HIDE]: () => {
            return state.set('show', false);
        },
        [TASK_DELETE_CONFIRM]: () => {
            return state.set('show', false);
        }
    };

    return action.type in actions ? actions[action.type]() : state;
}

/*actions*/
export const showModal = createAction(MODAL_SHOW);
export const hideModal = createAction(MODAL_HIDE);

/*selectors*/

const data = state => state.modal;
export const isVisible = createImmutableSelector(
    data,
    data => data.get('show')
);