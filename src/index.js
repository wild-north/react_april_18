import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const inc = document.querySelector('#inc');
const dec = document.querySelector('#dec');
const count = document.querySelector('#count');
const total = document.querySelector('#total');

render(store);

//const increment = () => store.dispatch({ type: 'INCREMENT' });
//const decrement = () => store.dispatch({ type: 'DECREMENT' });
// const calculateAction = (payload) => store.dispatch({
//     type: 'CALCULATE',
//     payload
// });

// const initCreateAction = function(store) {
//     return function createAction(typeStr) {
//         return function(payload) {
//             return store.dispatch({
//                 type: typeStrm
//                 payload: payload
//             })
//         }
//     };
// };

const initCreateAction = store => typeStr => payload => store.dispatch({ type: typeStr, payload })


const createAction = initCreateAction(store);

const incrementAction = createAction('INCREMENT');
const decrementAction = createAction('DECREMENT');
const calculateAction = createAction('CALCULATE');

inc.addEventListener('click', () => incrementAction());
dec.addEventListener('click', () => decrementAction());
count.addEventListener('input', (ev) => {
    const newCount = parseInt(ev.target.value, 10) || 0;

    calculateAction(newCount);
});

function render(store) {
    count.value = store.getState().count;
    total.textContent = store.getState().total;
}

store.subscribe(function () {
    render(store);
});
