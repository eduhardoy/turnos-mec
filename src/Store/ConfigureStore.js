import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../Reducers/index'

export default initialState => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk))
}
