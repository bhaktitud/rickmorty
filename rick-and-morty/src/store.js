import { createStore, applyMiddleware, compose } from 'redux'
import {reducers} from  './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

console.log(store.getState())


const unsubscribe = store.subscribe(() => console.log(store.getState()))

unsubscribe()


export default store