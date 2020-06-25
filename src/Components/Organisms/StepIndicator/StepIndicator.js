import React from 'react'
import Steppers from '../../Molecules/Steppers/Steppers'
import Text from '../../Atoms/Text/Text'
import Button from '../../Atoms/Button/Button'
import { Link } from "react-router-dom"

const StepIndicator = (props) => {
    const { stepActive, backPath, nextPath, disabledNextBtn } = props

    let steps = [
      "Direcciónes",
      "Trámites",
      "Identificación",
      "Fecha y hora",
      "Modalidad",
    ];

    return (
        <React.Fragment>
            <Steppers  steps={steps} activeStep={stepActive} />
            <Button variant="outlined" styles={styles.buttonBack} ><Link exact to={backPath} >Volver</Link></Button>
            <Button variant="contained" styles={styles.buttonNext} disabled={disabledNextBtn} ><Link exact to={nextPath} >Seguir</Link></Button>
            <Text variant="h4">Lolo</Text>
        </React.Fragment>
       
    )
}


const styles = {
    buttonBack: {
        color: "#7fb850", 
        borderColor: "#7fb850"
    },
    buttonNext: {
        backgroundColor: "#7fb850", 
        color: "#fff"
    }
}

export default StepIndicator