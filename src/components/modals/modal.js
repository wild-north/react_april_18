import Immutable from 'immutable';
import { createAction, createImmutableSelector } from '../../helpers';
import { TASK_DELETE_CONFIRM } from '../../actions/constants';
/*constants*/
const MODAL_SHOW = 'app/modals/MODAL_SHOW';
const MODAL_HIDE = 'app/modals/MODAL_HIDE';

const initialState = Immutable.fromJS({
    show: false,
    data: null
});

/*reducer*/
export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
      case MODAL_SHOW:
        return state.set('show', true).set('data', payload);

      case MODAL_HIDE:
        return initialState;

      default:
        return state;
    }
}

// /*helpers*/
// function showModal(state, { payload }) {
//   return () => state.set('show', true);
// }

/*actions*/
export const showModal = createAction(MODAL_SHOW);
export const hideModal = createAction(MODAL_HIDE);

/*selectors*/

const modalState = state => state.modal;
export const isVisible = createImmutableSelector(
  modalState,
  modalState => modalState.get('show')
);
export const data = createImmutableSelector(
  modalState,
  modalState => modalState.get('data')
);