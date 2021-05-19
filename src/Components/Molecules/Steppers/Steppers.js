import React from 'react'
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import styled from 'styled-components';

const StyledStepper = styled(Stepper)`
padding: 40px;
border-radius: 20px;
background-color: #EEEEEE;
@media (max-width: 700px) {
    display: none;
  }
`

const Steppers = (props) => {
    const { steps, activeStep } = props

    return (
        <StyledStepper activeStep={activeStep} alternativeLabel>
            {
                steps.map((label) => <Step key={label}><StepLabel>{label}</StepLabel></Step>)
            }
        </StyledStepper>      
    )
}


export default Steppers