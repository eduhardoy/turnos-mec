import { actionTypes } from './ActionTypes'

//Recibe en que posicion se encuentra activo el step
export const activeStep = payload => {
    return {
        type: actionTypes.STEP_ACTIVE,
        payload
    }
}