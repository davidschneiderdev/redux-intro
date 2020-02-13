// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const ADDMANTRA = 'ADDMANTRA';

function actionAddMantra(newMantra) {
    return {
        type: ADDMANTRA,
        payload: {
            mantra: newMantra
        }
    }
}

const mantraDefaultState = {
    mantras: []
}

function mantra(state=mantraDefaultState, action) {
    const newState = { ...state };
    switch(action.type) {
        case ADDMANTRA:
            newState.mantras = [...state.mantras, action.payload.mantra];
            break;
        default:
            break;
    }
    return newState;
}

const store = createStore(mantra, composeWithDevTools());

store.subscribe(() => {
    console.table(store.getState());
});

store.dispatch(actionAddMantra('less is more'));
store.dispatch(actionAddMantra('may your heart be happy and light'));
