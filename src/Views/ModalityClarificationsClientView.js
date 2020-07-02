import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import FormModalityShift from '../Components/Organisms/FormModalityShift/FormModalityShift'
import ModalityClarificationsClient from '../Components/Templates/ModalityClarificationsClient/ModalityClarificationsClient'
import Text from '../Components/Atoms/Text/Text'
import { connect } from 'react-redux'
import { addShift } from '../Actions/Shift'


const ModalityClarificationsClientView = (props) => {
    const { shift, addModality, addClarifications} = props

    return (
        <ModalityClarificationsClient header={<Header />} title={<Text variant="h5" >Querés hacer alguna aclaración más?</Text>} stepIndicator={<StepIndicator backPath="/selectdatetime" nextPath="/confirmationerror" stepActive={4} disabledNextBtn={false} />} formModalityShift={<FormModalityShift shift={shift} addModality={addModality} addClarifications={addClarifications} />} />
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
