import { combineReducers } from 'redux'
import user from './User'
import stepActive from './StepActive'
import shift from './Shift'

export default combineReducers({
    user: user,
    stepActive: stepActive,
    shift: shift
})