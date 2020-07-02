import React, { useState, useEffect } from 'react'
import IdentificationClient from '../Components/Templates/IdentificactionClient/IdentificationClient'
import Header from '../Components/Header/Header'
import StepperIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import ClientForm from '../Components/Organisms/ClientForm/ClientForm'
import Text from '../Components/Atoms/Text/Text'
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
                :   <IdentificationClient header={<Header/>} title={<Text variant="h5" >Ingresá con tu CUIT</Text>} stepIndicator={<StepperIndicator stepActive={2} backPath="/"  disabledNextBtn={disabledNextBtn} />} clientForm={<ClientForm addCuit={addCuit} setValidAuth={setValidAuth}/>} />
            }
        </React.Fragment>    
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
