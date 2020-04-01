import { createStore } from 'redux'
import rootReducer from  './reducers'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

unsubscribe()


export default store