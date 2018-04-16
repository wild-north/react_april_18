import React from 'react';
import { Spinner } from '../spinner';

export const WithSpinner = ({ predicate, children }) => {
    if (predicate) {
        return <Spinner/>;
    }

    return children;
};