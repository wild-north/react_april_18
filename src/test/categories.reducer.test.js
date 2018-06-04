import React from 'react';
import renderer from 'react-test-renderer';

import { categories } from '../reducers/categories';
import Immutable from 'immutable';

describe('Categories reducer', () => {
    it('should select category', () => {

        const initialState = Immutable.Map({ selectedCategory: 1 });
        const action = { type: 'CATEGORY_SELECT', payload: 2 };
        const state = categories(initialState, action);

        expect(state.get('selectedCategory')).toBe(2);
    });

    it('should add category with name TEST', () => {

        const initialState = Immutable.fromJS({
            list: {}
        });

        const action = {
            type: 'CATEGORY_ADD',
            payload: 'TEST'
        };

        const state = categories(initialState, action);

        const expectedResult = Immutable.Map({
            id: 1,
            name: 'TEST',
            parentId: null
        });

        expect(state.getIn(['list', '1'])).toEqual(expectedResult);
        expect(state.get('list').size).toBe(initialState.get('list').size + 1);
    })


});
