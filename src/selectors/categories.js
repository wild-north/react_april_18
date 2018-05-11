import { createSelector } from 'reselect';

const data = (state) => state.categories;

export const list = createSelector(
    data,
    data => data.get('list')
);

export const selectedCategory = createSelector(
    data,
    data => data.get('selectedCategory')
);