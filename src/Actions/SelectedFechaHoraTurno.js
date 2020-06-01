import { actionTypes } from './ActionTypes'

export const changeFechaHoraTurno = payload => {
    return {
        type: actionTypes.CHANGUE_FECHA_HORA_TURNO,
        payload
    }
}

export const deleteFechaHoraTurno = () => {
    return {
        type: actionTypes.DELETE_FECHA_HORA_TURNO,
    }
}
