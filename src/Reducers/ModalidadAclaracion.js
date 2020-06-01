import { actionTypes } from '../Actions/ActionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.MODALIDAD_ACLARACION:
            return action.payload
        case actionTypes.DELETE_MODALIDAD_ACLARACION:
            return {...state = {modalidad: "presencial", aclaraciones: ""}}
        default:
            return state
    }
}