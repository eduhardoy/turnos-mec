import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import RadioButtonsGroup from '../../Molecules/RadioButtonsGroup/RadioButtonsGroup'


const RoleDisepa = (props) => {
    const { shift, addRole } = props
    const [ selectedRole, setSelectedRole] = useState("teacher")
 
    var categorias = [
        {
            title: "Rol",
            subTipo: [{value: "teacher", label: "Docente"}, {value: "tutor", label: "Tutor"}, {value: "others", label: "Otros"}]
        }
    ]
    console.log("ROLE DISEPA", shift)
    useEffect(() => {
        addGlobalStateRole()
    }, [selectedRole])

    const handleChangeRadioButtons = (event) => {
        setSelectedRole(event.target.value);
    }

    const addGlobalStateRole = () => {
        if(selectedRole === "teacher"){
            addRole({ key: "data", value : { ...shift.data, ["rol"]: "Docente"}})
        }
        if(selectedRole === "tutor"){
            addRole({ key: "data", value : { ...shift.data, ["rol"]: "Tutor"}})
        }
        if(selectedRole === "others"){
            addRole({ key: "data", value : { ...shift.data, ["rol"]: "Otros"}})
        }   
    }

    return (
        <Grid xl={12} lg={12} md={12} sm={12} xs={12} justify="center" alignItems="center">
            {
                categorias.map(categoria =>  <RadioButtonsGroup value={selectedRole} formLabel={categoria.title} radioGroup={categoria.subTipo} name={categoria.title} onChange={handleChangeRadioButtons} />)            
            }
        </Grid>     
    )
}


export default RoleDisepa