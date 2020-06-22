import { actionTypes } from '../Actions/ActionTypes'

export default (state = 0, action) => {
    switch (action.type) {
        case actionTypes.ADD_STEP_ACTIVE:
            return action.payload + 1
        case actionTypes.SUBSTRACT_STEP_ACTIVE:
            return action.payload - 1
        default:
            return state
    }
}