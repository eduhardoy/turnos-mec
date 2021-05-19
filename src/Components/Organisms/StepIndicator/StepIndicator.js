import React from 'react'
import Steppers from '../../Molecules/Steppers/Steppers'
import Button from '../../Atoms/Button/Button'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const StepperWrapper = styled.div`
margin: 20px;
margin-top: 40px;
`

const StepperButtonWrapper = styled.div`
margin: 0;
padding: 10px;
button{
    width: 100px;
    height: 40px;
    margin: 10px;
}`

const StepIndicator = (props) => {
    const { stepActive, backPath, nextPath, disabledNextBtn, onClickNextBtn } = props

    let steps = [
      "Direcciónes",
      "Trámites",
      "Identificación",
      "Fecha y hora",
      "Modalidad",
    ]

    return (
        <StepperWrapper>
            <Steppers  steps={steps} activeStep={stepActive} />
            <StepperButtonWrapper>
            <Button variant="outlined" styles={styles.buttonBack} ><Link style={{color: "#fff"}} exact to={backPath} >Volver</Link></Button>
            <Button variant="contained" styles={styles.buttonNext} disabled={disabledNextBtn} ><Link style={{color: "#fff"}} onClick={onClickNextBtn} exact to={nextPath} >Seguir</Link></Button>
            </StepperButtonWrapper>
        </StepperWrapper> 
    )
}


const styles = {
    buttonBack: {
        backgroundColor: "#000", 
        color: "#fff", 
        borderColor: "#000"
    },
    buttonNext: {
        backgroundColor: "#5CB85C", 
        color: "#fff"
    }
}

export default StepIndicator