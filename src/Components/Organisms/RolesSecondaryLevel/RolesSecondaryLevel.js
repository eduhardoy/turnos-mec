import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import PaperTextField from '../../Molecules/PaperTextField/PaperTextField'


const RolesSecondaryLevel = (props) => {
    const {  shift, addRole, setDisabledNextBtn } = props
    const [ role, setRole ] = useState('')

    useEffect(() => {
        if(role !== ''){
            setDisabledNextBtn(false)
            addRole({ key: "data", value : { ...shift.data, ["rol"]: role}})
        }else{
            setDisabledNextBtn(true)
        }         
    }, [role]);

    const handleChangeText = (event) => {
        setRole(event.target.value)
    }

    return (
        <Grid xl={12} lg={12} md={12} sm={12} xs={12} justify="center" alignItems="center">
            <PaperTextField idTextField="role" placeholder="Ingresá tu rol" onChange={handleChangeText} >Rol/Función</PaperTextField >
        </Grid>     
    )
}


export default RolesSecondaryLevel