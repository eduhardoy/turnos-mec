import React, { useState, useEffect } from 'react'
import IdentificationClient from '../Components/Templates/IdentificactionClient/IdentificationClient'
import Header from '../Components/Header/Header'
import StepperIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import ClientForm from '../Components/Organisms/ClientForm/ClientForm'
import { Redirect } from "react-router-dom"


const IdentificationClientView = () => {
    const [ validAuth, setValidAuth ] = useState(false)
    const [ disabledNextBtn, setDisabledNextBtn ] = useState(true)

    return (
        <React.Fragment>
            {
                validAuth ? <Redirect from="/identification" to="/selectdatetime" />
                :   <IdentificationClient header={<Header/>} stepIndicator={<StepperIndicator stepActive={1} disabledNextBtn={disabledNextBtn} />} clientForm={<ClientForm setValidAuth={setValidAuth}/>} />
            }
        </React.Fragment>    
    ) 
}


export default IdentificationClientView