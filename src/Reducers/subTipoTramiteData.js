import { actionTypes } from '../Actions/ActionTypes'

export default (state = [], action) => {

    switch (action.type) {
        case actionTypes.ADD_SUB_TIPO_TRAMITE_DATA:
            return action.payload
        case actionTypes.DELETE_SUB_TIPO_TRAMITE_DATA:
            return [...state = []]
        default:
            return state
    }
}