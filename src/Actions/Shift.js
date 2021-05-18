import { actionTypes } from './ActionTypes'


export const addShift = payload => {
    return {
        type: actionTypes.ADD_SHIFT,
        payload
    }
}

export const deleteShift = () => {
    return {
        type: actionTypes.DELETE_SHIFT,
    }
}
