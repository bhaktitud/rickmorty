import { 
        ADD_FAVOURITE, 
        SET_CHARACTER_LIST,
        SET_CHARACTER_DETAIL,
        SET_RESIDENTS
    } from '../actions';


const initialState = {
    favouriteCharacter : [],
    charactersList : [],
    characterDetail : {},
    residentsList : []
}

export function reducers(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_FAVOURITE:
            return {
                ...state,
                favouriteCharacter : [...state.favouriteCharacter, payload]
            }
        case SET_CHARACTER_LIST:
            return {
                ...state,
                charactersList : payload
            }
        case SET_CHARACTER_DETAIL:
            console.log(payload, 'reducer')
            return {
                ...state,
                characterDetail : payload
            }
        case SET_RESIDENTS:
            return {
                ...state,
                residentsList : payload
            }
        default:
            return state;
    }
}
