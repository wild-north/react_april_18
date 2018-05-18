import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = store => next => action => {
    console.log(action.type, action.payload);

    return next(action);
};

const middlewares = [thunk, logger];

export function configureStore(preloadedState) {
    return createStore(
        reducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware( ...middlewares )
        )
    );
}

