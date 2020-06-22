import { actionTypes } from './ActionTypes'


export const addStepActive = payload => {
    return {
        type: actionTypes.ADD_STEP_ACTIVE,
        payload
    }
}

export const substractStepActive = payload => {
    return {
        type: actionTypes.SUBSTRACT_STEP_ACTIVE,
        payload
    }
}