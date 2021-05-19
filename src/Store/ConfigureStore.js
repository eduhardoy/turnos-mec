import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../Reducers/index'
import { composeWithDevTools } from "redux-devtools-extension";


const middlewareEnhancer = applyMiddleware(thunk)
const composedEnchancers = compose(middlewareEnhancer, composeWithDevTools())

export default initialState => {
    return createStore(rootReducer, initialState, composedEnchancers)
}
