import { actionTypes } from '../Actions/ActionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_SHIFT:
            return {...state, [action.payload.key] : action.payload.value}
        case actionTypes.DELETE_SHIFT:
            return { modalidad: "Presencial", aclaraciones: "" }
        default:
            return state
    }
}