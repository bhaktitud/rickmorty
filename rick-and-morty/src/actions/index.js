export const ADD_FAVOURITE = 'ADD_FAVOURITE'

export function addFavourite (character) {
    return {
        type: ADD_FAVOURITE,
        character
    }
}