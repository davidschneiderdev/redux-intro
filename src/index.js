// console.log('it is working');

// "The bank" - state

// {
//     amount: 100
// }

// if we added 1 to the amount, what would state look like?

// {
//     amount: 101
// }


// "A transaction slip" - action

// {
//     type: 'INCREMENT'
// }

// {
//     type: 'DECREMENT'
// }

import { 
    createStore, bindActionCreators
} from 'redux';

// {
//     type: INCREMENT,
//     id: 0
// }

import { composeWithDevTools } from 'redux-devtools-extension';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const ADD_COUNTER = 'ADD_COUNTER';
const DEL_COUNTER = 'DEL_COUNTER';

// Write action creator functions.
// They format your action objects.
// Again, to avoid typos.

function actionIncrement(howMuch=1) {
    return {
        type: INCREMENT,
        amount: howMuch
    }
}

function actionDecrement(howMuch=1) {
    return {
        type: DECREMENT,
        amount: howMuch
    }
}

function actionAddCounter() {
    return {
        type: ADD_COUNTER
    }
}

function actionDelCounter() {
    return {
        type: DEL_COUNTER
    }
}


// "The teller" - reducer function
// reducers are always named for the state they manage
// They always receive the current state and the action 
// they're processing.

const defaultState = {
    amounts: [0, 0, 0, 0]
};


function counter(state=defaultState, action) {
    console.table(action);
    const newState = { ...state };

    switch(action.type) {
        case INCREMENT:
            newState.amounts[action.id] = state.amounts[action.id] + 1;
            break;
        case DECREMENT:
            newState.amounts[action.id] = state.amounts[action.id] - 1;
            break;
        case ADD_COUNTER:
            newState.amounts.push(0);
            break;
        case DEL_COUNTER: 
            newState.amounts.splice(action.id, 1);
        default: 
            break;
    }
    return newState;
}


// You give it a reducer, it gives you a "store".
// The store is an object that manages your state
// using your reducer.
const store = createStore(counter, composeWithDevTools());

// "Push notifications" - subscribe to changes in the store
store.subscribe(() => {
    console.log(`The state is now.`);
    console.table(store.getState());
});

// Let's give the store some actions to process.

store.dispatch(actionAddCounter());
store.dispatch(actionAddCounter());
store.dispatch(actionAddCounter());
store.dispatch(actionAddCounter());
store.dispatch(actionDelCounter());
store.dispatch(actionDelCounter());
store.dispatch(actionDelCounter());









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

