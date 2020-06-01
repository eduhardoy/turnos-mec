import { actionTypes } from './ActionTypes'

export const modalidadAclaracion = payload => {
    return {
        type: actionTypes.MODALIDAD_ACLARACION,
        payload
    }
}


export const deleteModalidadAclaracion = () => {
    return {
        type: actionTypes.DELETE_MODALIDAD_ACLARACION,
    }
}