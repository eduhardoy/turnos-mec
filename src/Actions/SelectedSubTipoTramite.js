import { actionTypes } from './ActionTypes'

export const changeSubTipoTramite = payload => {
    return {
        type: actionTypes.SELECTED_SUB_TIPO_TRAMITE,
        payload
    }
}
