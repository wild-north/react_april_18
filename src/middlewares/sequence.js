import { RUN_SEQUENCE } from '../actions/constants';
import { isArray, isEmpty, isFunction } from 'lodash';


export const sequence = ({ dispatch }) => (next) => (action) => {

  const { type, config, payload } = action;

  if (type !== RUN_SEQUENCE) {
    return next(action);
  }

  const { actions } = config;

  validateSequence(actions, payload);

  actions.forEach(actionCreator => dispatch(actionCreator(action.payload)));

};


function validateSequence(actions, payload) {
    if (!isArray(actions)) {
      throw new Error('Actions array must not an array');
    }
    if (isEmpty(actions)) {
      throw new Error('Actions array should not be empty');
    }

    actions.forEach(actionCreator => {
      if (!isFunction(actionCreator)) {
        throw new Error('Action Creator' + actionCreator + 'must be a function');
      }

      const data = actionCreator(payload);

      if (!('type' in data)) {
        throw new Error('Action Creator must return a valid action object');
      }
    });
}










