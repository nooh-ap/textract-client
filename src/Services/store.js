// store.js
import { createStore } from 'redux';

// Define initial state and reducer
const initialState = {
    data: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
