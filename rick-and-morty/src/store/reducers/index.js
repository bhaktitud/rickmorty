import { 
        ADD_FAVOURITE, 
        SET_CHARACTER_LIST,
        SET_CHARACTER_DETAIL,
        SET_RESIDENTS,
        SET_LOADING,
        SET_ERROR
} from '../actions';


const initialState = {
    favouriteCharacter : [],
    charactersList : [],
    characterDetail : {},
    residentsList : [],
    isLoading : false,
    isError : false
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
            return {
                ...state,
                characterDetail : payload
            }
        case SET_RESIDENTS:
            return {
                ...state,
                residentsList : payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading : payload
            }
        case SET_ERROR:
            return {
                ...state,
                isError : payload
            }
        default:
            return state;
    }
}
