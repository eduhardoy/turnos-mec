import { actionTypes } from '../Actions/ActionTypes'

export default (state = -1, action) => {
    switch (action.type) {
        case actionTypes.STEP_ACTIVE:
            return action.payload
        default:
            return state
    }
}