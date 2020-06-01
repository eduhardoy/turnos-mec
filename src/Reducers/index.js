import { combineReducers } from 'redux'
import stepActive from './StepActive'
import subTipoTramiteData from './subTipoTramiteData'
import selectedSubTipoTramite from './selectedSubTipoTramite'
import selectedFechaHoraTurno from './SelectedFechaHoraTurno'
import modalidadAclaracion from './ModalidadAclaracion'
import userData from './userData'

export default combineReducers({
    stepActive: stepActive,
    subTipoTramiteData: subTipoTramiteData,
    selectedSubTipoTramite: selectedSubTipoTramite,
    selectedFechaHoraTurno: selectedFechaHoraTurno,
    modalidadAclaracion: modalidadAclaracion,
    userData: userData
})