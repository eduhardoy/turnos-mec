import { actionTypes } from '../Actions/ActionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_USER:
            return action.payload
        case actionTypes.DELETE_USER:
            return action.payload
        default:
            return state
    }
}