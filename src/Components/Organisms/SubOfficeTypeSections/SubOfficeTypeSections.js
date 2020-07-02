import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import RadioButtonsGroup from '../../Molecules/RadioButtonsGroup/RadioButtonsGroup'


const SubOfficeTypeSections = (props) => { 
    const { addOffice } = props
    const [ subOfficeSelectd, setSubOfficeSelected ] = useState("OC")

    const categorias = [
        {
            title: "Oficinas",
            subTipo: [{value: "OC", label: "Oficina Central"}, {value: "DPC", label: "Departamento de personal central"}, {value: "CDS", label: "Certificaciones de servicios"}]
        }
    ]

    useEffect(() => {
      addOffice({key: "oficina", value: subOfficeSelectd})
    }, [subOfficeSelectd])

    const handleChange = (event) => {
      setSubOfficeSelected(event.target.value)
    } 

    return (
        <Grid xl={12} lg={12} md={12} sm={12} xs={12} justify="center" alignItems="center">
            {
                categorias.map(categoria =>  <RadioButtonsGroup formLabel={categoria.title} radioGroup={categoria.subTipo} value={subOfficeSelectd} name={categoria.title} onChange={handleChange} />)            
            }
        </Grid>     
    )
}


export default SubOfficeTypeSections