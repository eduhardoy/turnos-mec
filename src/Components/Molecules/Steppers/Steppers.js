import React from 'react'
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";


const Steppers = (props) => {
    const { steps, activeStep } = props

    return (
        <Stepper activeStep={activeStep} alternativeLabel>
            {
                steps.map((label) => <Step key={label}><StepLabel>{label}</StepLabel></Step>)
            }
        </Stepper>      
    )
}


export default Steppers