import * as constants from '../actions/constants';
import { map } from 'lodash';
import Immutable from 'immutable';

export const initialState = Immutable.fromJS({
    list: {},
    selectedCategory: 1,
    isLoading: false
});

export const categories = function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case constants.LOAD_CATEGORIES_REQUEST: {
            return state.set('isLoading', true);
        }

        case constants.LOAD_CATEGORIES_RESOLVE: {
            return state
                .set('list', Immutable.fromJS(payload))
                .set('isLoading', false)
        }

        case constants.LOAD_CATEGORIES_REJECT: {
            return state.set('isLoading', false)
        }

//////////////////////////////////////////////////////////

        case constants.CATEGORY_SELECT:
            return state.set('selectedCategory', payload);

        case constants.CATEGORY_ADD: {
            const id = getNewId(state.get('list').toJS());

            const newCategory = Immutable.Map({
                id,
                name: payload,
                parentId: state.get('selectedCategory') || null
            });

            return state.update(
                'list',
                value => value.set(id.toString(), newCategory)
            )
        }

        default:
            return state;
    }
};

function getNewId(list) {
    const ids = map(list, item => item.id);

    const newId = ids[ids.length - 1] + 1;

    return isNaN(newId) ? 1 : newId;
}