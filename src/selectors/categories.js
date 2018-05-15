import { createImmutableSelector } from '../helpers';

const data = (state) => state.categories;

export const list = createImmutableSelector(
    data,
    data => data.get('list')
);

export const selectedCategory = createImmutableSelector(
    data,
    data => data.get('selectedCategory')
);