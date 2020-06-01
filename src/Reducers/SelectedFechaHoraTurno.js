import { actionTypes } from '../Actions/ActionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.CHANGUE_FECHA_HORA_TURNO:
            return action.payload
        case actionTypes.DELETE_FECHA_HORA_TURNO:
            return [...state = []]
        default:
            return state
    }
}