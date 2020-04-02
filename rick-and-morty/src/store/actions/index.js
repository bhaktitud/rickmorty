import axios from 'axios';

export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const SET_CHARACTER_LIST = 'SET_CHARACTER_LIST'
export const SET_CHARACTER_DETAIL = 'SET_CHARACTER_DETAIL'
export const SET_RESIDENTS = 'SET_RESIDENTS'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'


export const addFavourite = (character) => {
    return {
        type: ADD_FAVOURITE,
        payload: character
    }
}

export const FETCH_CHARACTERS = (url) => {
    return (dispatch) => {
        dispatch(setLoading(true))
        axios
            .get(url)
            .then(({ data }) => {
                const { results } = data
                dispatch(setCharacter(results))
            })
            .catch(err => {
                dispatch(setError(true))
            })
            .finally(_=> {
                dispatch(setLoading(false))
            });
    }
}

export const FETCH_DETAIL = (url) => {
    return (dispatch) => {
        dispatch(setLoading(true))
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
                dispatch(setError(true))
            })
            .finally(_=> {
                dispatch(setLoading(false))
            });
    }
}

export const setCharacter = (data) => {
    return { type: SET_CHARACTER_LIST, payload: data }
}

export const setCharacterDetail = (data) => {
    return { type : SET_CHARACTER_DETAIL, payload: data }
}

export const setResidents = (data) => {
    return { type : SET_RESIDENTS, payload : data }
}

export const setLoading = (status) => {
    return { type : SET_LOADING, payload : status }
}

export const setError = (status) => {
    return { type : SET_ERROR, payload : status }
}