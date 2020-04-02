import axios from 'axios';

export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const SET_CHARACTER_LIST = 'SET_CHARACTER_LIST'
export const SET_CHARACTER_DETAIL = 'SET_CHARACTER_DETAIL'
export const SET_RESIDENTS = 'SET_RESIDENTS'

export const addFavourite = (character) => {
    return {
        type: ADD_FAVOURITE,
        payload: character
    }
}

export const FETCH_CHARACTERS = (url) => {
    return (dispatch) => {
        axios
            .get(url)
            .then(({ data }) => {
                const { results } = data
                dispatch(setCharacter(results))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const FETCH_DETAIL = (url) => {
    return (dispatch) => {
        axios
            .get(url)
            .then(({ data }) => {
                dispatch(setCharacterDetail( data ))
                return Promise.all([axios.get(data.location.url)])
            })
            .then(([ data ]) => {
                const { residents } = data.data
                const arrayPromises = []
                residents.forEach(element => {
                    arrayPromises.push(axios.get(element))          
                });
                return Promise.all(arrayPromises)
            })
            .then(( data ) => {
                dispatch(setResidents(data))
            })
            .catch((err) => {
                console.log(err)
            });
    }
}

export const setCharacter = (data) => {
    return { type: SET_CHARACTER_LIST, payload: data }
}

export const setCharacterDetail = (data) => {
    console.log(data,'set')
    return { type : SET_CHARACTER_DETAIL, payload: data }
}

export const setResidents = (data) => {
    return { type : SET_RESIDENTS, payload : data }
}