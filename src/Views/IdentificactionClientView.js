import React, { useState, useEffect } from 'react'
import IdentificationClient from '../Components/Templates/IdentificactionClient/IdentificationClient'
import Header from '../Components/Header/Header'
import StepperIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import ClientForm from '../Components/Organisms/ClientForm/ClientForm'
import Text from '../Components/Atoms/Text/Text'
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { addShift } from '../Actions/Shift'
import styled from 'styled-components'

const IdentificacionWrapper = styled.div`
`


const IdentificationClientView = (props) => {
    const { addCuit } = props
    const [ validAuth, setValidAuth ] = useState(false)
    const [ disabledNextBtn, setDisabledNextBtn ] = useState(true)

    return (
        <IdentificacionWrapper>
            {
                validAuth ? <Redirect from="/identification" to="/selectdatetime" />
                :   <IdentificationClient header={<Header/>} title={<Text variant="h5" >INGRESA CON TU CUIT</Text>} stepIndicator={<StepperIndicator stepActive={2} backPath="/"  disabledNextBtn={disabledNextBtn} />} clientForm={<ClientForm addCuit={addCuit} setValidAuth={setValidAuth}/>} />
            }
        </IdentificacionWrapper>    
    ) 
}


const mapStateToProps = state => {
    return {
        shift: state.shift
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
