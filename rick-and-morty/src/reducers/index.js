import { combineReducers } from 'redux';

import { ADD_FAVOURITE } from '../actions';


function addFav(state = [], action ) {
    switch (action.type) {
        case ADD_FAVOURITE:
            return [
                ...state,
                action.character
            ]
        default:
            return state;
    }
}


export default combineReducers({
    addFav
});