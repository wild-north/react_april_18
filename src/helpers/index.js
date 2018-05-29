import { connect } from 'react-redux';
import Immutable from "immutable";
import { createSelectorCreator, defaultMemoize } from 'reselect';
import * as constants from '../actions/constants';

export const createAction = type => payload => ({
    type,
    payload
});

export const createConnectorForSelector = (selector = null, actions = {}) =>
    connect(
        typeof selector === 'function'
            ? (state) => selector(state)
            : selector, actions
    );

export const createImmutableSelector = createSelectorCreator(defaultMemoize, Immutable.is);

export function createConnectorForSelectorES5 (selector, actions) {
    return connect(
        typeof selector === 'function'
            ? (state) => selector(state)
            : selector,
        actions
    );
}

export const createSequence = (config) => (payload) => ({
  type: constants.RUN_SEQUENCE,
  config,
  payload
});