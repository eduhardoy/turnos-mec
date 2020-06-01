import { actionTypes } from './ActionTypes'

export const addUser = payload => {
    return {
        type: actionTypes.ADD_USER,
        payload
    }
}


export const deleteUser = () => {
    return {
        type: actionTypes.DELETE_USER,
    }
}