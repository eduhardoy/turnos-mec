import { actionTypes } from '../Actions/ActionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_SHIFT:
            return action.payload
        case actionTypes.DELETE_SHIFT:
            return action.payload
        default:
            return state
    }
}