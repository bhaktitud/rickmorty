export const ADD_FAVOURITE = 'ADD_FAVOURITE'

export function addFavourite(character){
    // console.log('masuk action addFavourite')
    return {
        type: ADD_FAVOURITE,
        character: character
    }
}