import React, { useState, useEffect } from 'react'
import IdentificationClient from '../Components/Templates/IdentificactionClient/IdentificationClient'
import Header from '../Components/Header/Header'
import StepperIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import ClientForm from '../Components/Organisms/ClientForm/ClientForm'
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { addShift } from '../Actions/Shift'

const IdentificationClientView = (props) => {
    const { addCuit } = props
    const [ validAuth, setValidAuth ] = useState(false)
    const [ disabledNextBtn, setDisabledNextBtn ] = useState(true)

    return (
        <React.Fragment>
            {
                validAuth ? <Redirect from="/identification" to="/selectdatetime" />
                :   <IdentificationClient header={<Header/>} stepIndicator={<StepperIndicator stepActive={1} disabledNextBtn={disabledNextBtn} />} clientForm={<ClientForm addCuit={addCuit} setValidAuth={setValidAuth}/>} />
            }
        </React.Fragment>    
    ) 
}


const mapStateToProps = state => {
    return {
        stepActive: state.stepActive
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCuit: office => dispatch(addShift(office))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IdentificationClientView)
