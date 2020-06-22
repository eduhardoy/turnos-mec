import React from 'react'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import FormModalityShift from '../Components/Organisms/FormModalityShift/FormModalityShift'
import ModalityClarificationsClient from '../Components/Templates/ModalityClarificationsClient/ModalityClarificationsClient'

const ModalityClarificationsClientView = () => {

    return (
        <ModalityClarificationsClient header={<Header />} stepIndicator={<StepIndicator />} formModalityShift={<FormModalityShift />} />
    )
}


export default ModalityClarificationsClientView