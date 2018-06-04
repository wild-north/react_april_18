import React from 'react';

export const Spinner = () => (
    <span className="spinner-content">
            <img src="loading_spinner.gif" alt="spinner"/>
    </span>
);

export const SpinnerForTest = () => (
    <div className="spinner1">
        <Spinner/>
    </div>
);