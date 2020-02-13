
import {
    createStore
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

// Holding State Functions

function movieState(state={amount: 1000}, action) {
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

function songState(state={name: 'Ye'}, action) {
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

function burritoState(state={amount: 300}, action) {
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

function coffeeState(state={amount: 2000}, action) {
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

function sandwichState(state={name: 'BLT'}, action) {
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

// Create Store

const movieStore = createStore(movieState, composeWithDevTools());
const songStore = createStore(songState, composeWithDevTools());
const burritoStore = createStore(burritoState, composeWithDevTools());
const coffeeStore = createStore(coffeeState, composeWithDevTools());
const sandwichStore = createStore(sandwichState, composeWithDevTools());

// Subscribe to Stores

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

// Dispatches

movieStore.dispatch(actionIncrement(5));
movieStore.dispatch(actionIncrement(25));

songStore.dispatch(actionChangeName('Guiltiness'));
songStore.dispatch(actionChangeName('Rapture'));

burritoStore.dispatch(actionIncrement(10));
burritoStore.dispatch(actionIncrement(40));

coffeeStore.dispatch(actionIncrement(50));
coffeeStore.dispatch(actionIncrement(100));

sandwichStore.dispatch(actionChangeName('Reuben'));
sandwichStore.dispatch(actionChangeName('Turkey Melt'));


