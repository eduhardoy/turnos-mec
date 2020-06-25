import React from 'react'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import FormModalityShift from '../Components/Organisms/FormModalityShift/FormModalityShift'
import ModalityClarificationsClient from '../Components/Templates/ModalityClarificationsClient/ModalityClarificationsClient'
import { connect } from 'react-redux'
import { addShift } from '../Actions/Shift'

const ModalityClarificationsClientView = (props) => {
    const { shift, addModality, addClarifications} = props
    console.log("SHIFTTT", shift)
    return (
        <ModalityClarificationsClient header={<Header />} stepIndicator={<StepIndicator />} formModalityShift={<FormModalityShift addModality={addModality} addClarifications={addClarifications} />} />
    )
}


const mapStateToProps = state => {
    return {
        shift: state.shift
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addModality: office => dispatch(addShift(office)),
        addClarifications: office => dispatch(addShift(office)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalityClarificationsClientView)
