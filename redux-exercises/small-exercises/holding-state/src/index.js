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

import {
    createStore, bindActionCreators
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

function actionChangeName(newName) {
    return {
        type: 'NAMECHANGE',
        name: newName
    }
}

function actionIncrement(howMuch) {
    return {
        type: 'INCREMENT',
        amount: howMuch
    }
}

const defaultState = {
    amount: 0,
    name: ''
}


// Holding State Functions

function holdingState(state=defaultState, action) {
    const newState = { ...state }
    console.table(newState);

    switch(action.type) {
        case 'INCREMENT':
            newState.amount = state.amount + action.amount;
            break;
        case 'NAMECHANGE':
            newState.name = action.name;
            break;
        default:
            break;
    }
    return newState;
}

const movieStore = createStore(holdingState);
const songStore = createStore(holdingState);
const burritoStore = createStore(holdingState);
const coffeeStore = createStore(holdingState);
const sandwichStore = createStore(holdingState);

movieStore.subscribe(() => {
    console.log(`The state is now.`);
    console.table(movieStore.getState());
});

songStore.subscribe(() => {
    console.log(`The state is now.`);
    console.table(songStore.getState());
});

burritoStore.subscribe(() => {
    console.log(`The state is now.`);
    console.table(burritoStore.getState());
});

coffeeStore.subscribe(() => {
    console.log(`The state is now.`);
    console.table(coffeeStore.getState());
});

sandwichStore.subscribe(() => {
    console.log(`The state is now.`);
    console.table(sandwichStore.getState());
});


movieStore.dispatch(actionIncrement(5));
songStore.dispatch(actionChangeName('Guiltiness'));
burritoStore.dispatch(actionIncrement(10));
coffeeStore.dispatch(actionIncrement(50));
sandwichStore.dispatch(actionChangeName('Reuben'));


