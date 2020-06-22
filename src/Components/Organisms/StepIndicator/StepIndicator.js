import React, { useState, useEffect } from 'react'
import Steppers from '../../Molecules/Steppers/Steppers'
import Text from '../../Atoms/Text/Text'
import Button from '../../Atoms/Button/Button'
import { Link } from "react-router-dom"

const StepIndicator = (props) => {
    const { stepActive, path, disabledNextBtn } = props
    const [ pathBack, setPathBack ] = useState("")
    const [ pathNext, setPathNext ] = useState("")

    useEffect(() => {
        if(path === "/"){
            setPathBack("/")
            setPathNext("/")
        }
        if(path === "subOffice"){
            setPathBack("/")
            setPathNext("/identification")
        }
    }, [path])

    let steps = [
      "Elegí el trámite a realizar",
      "Ingresá con tu documento",
      "Elegí una fecha y una hora",
      "Seleccioná la modalidad",
    ];

    return (
        <React.Fragment>
            <Steppers  steps={steps} activeStep={stepActive} />
            <Button variant="outlined" styles={styles.buttonBack} ><Link exact to={pathBack} >Volver</Link></Button>
            <Button variant="contained" styles={styles.buttonNext} disabled={disabledNextBtn} ><Link exact to={pathNext} >Seguir</Link></Button>
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