import { actionTypes } from './ActionTypes'

//Recibe en que posicion se encuentra activo el step
export const dataSubTipoTramite = payload => {
    return {
        type: actionTypes.ADD_SUB_TIPO_TRAMITE_DATA,
        payload
    }
}

export const deleteSubTipoTramite = () => {
    return {
        type: actionTypes.DELETE_SUB_TIPO_TRAMITE_DATA,
    }
}