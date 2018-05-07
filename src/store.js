import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = store => next => action => {
    console.log(action.type, action.payload);

    return next(action);
};

// const functionAsyncAction = store => next => action => {
//     if (typeof action === 'function') {
//         return action(store.dispatch);
//     }
//
//     return next(action);
// };

// function fetchData(store) {
//     return function (next) {
//         return function(action) {
//             if (action.type === 'CATEGORY_ADD') {
//                 setTimeout(() => {
//                     Math.random() > 0.5
//                         ? store.dispatch({
//                             type: 'DATA_RESPONSE',
//                             payload: true
//                         })
//                         : store.dispatch({
//                             type: 'DATA_FAILURE',
//                             payload: false
//                         })
//                 }, 2000);
//             }
//
//             return next(action);
//         }
//     }
// }

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

