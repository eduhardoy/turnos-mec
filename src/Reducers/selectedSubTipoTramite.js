import { actionTypes } from '../Actions/ActionTypes'

export default (state = "", action) => {

    switch (action.type) {
        case actionTypes.SELECTED_SUB_TIPO_TRAMITE:
            return action.payload
        default:
            return state
    }
}