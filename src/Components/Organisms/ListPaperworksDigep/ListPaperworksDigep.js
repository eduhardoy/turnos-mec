import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import RadioButtonsGroup from '../../Molecules/RadioButtonsGroup/RadioButtonsGroup'


const ListPaperworksDigep = (props) => {
    const { addPaperworks } = props
    const [ selectedPaperwork, setSelectedPaperwork ] = useState("presentationNotes")
 
    var categorias = [
        {
            title: "Trámites por mesa de entrada",
            subTipo: [{value: "presentationNotes", label: "Presentación de notas"}, {value: "record", label: "Expedientes"}, {value: "registers", label: "Registro"}, {value: "notifications", label: "Notificación"}, {value: "others", label: "Otros"}]
        }
    ]

    useEffect(() => {
        addGlobalStatePaperworks()
    }, [selectedPaperwork])

    const handleChangeRadioButtons = (event) => {
        setSelectedPaperwork(event.target.value);
    }

    const addGlobalStatePaperworks = () => {
        if(selectedPaperwork === "presentationNotes"){
            addPaperworks({key: "data", value: {"categoria": "Trámites por mesa de entrada", "tema": "Presentación de notas"}})
        }
        if(selectedPaperwork === "record"){
            addPaperworks({key: "data", value: {"categoria": "Trámites por mesa de entrada", "tema": "Expedientes"}})
        }
        if(selectedPaperwork === "others"){
            addPaperworks({key: "data", value: {"categoria": "Trámites por mesa de entrada", "tema": "Otros"}})
        }
        if(selectedPaperwork === "registers"){
            addPaperworks({key: "data", value: {"categoria": "Trámites por mesa de entrada", "tema": "Registro"}})
        }
        if(selectedPaperwork === "notifications"){
            addPaperworks({key: "data", value: {"categoria": "Trámites por mesa de entrada", "tema": "Notificación"}})
        }     
    }

    return (
        <Grid xl={12} lg={12} md={12} sm={12} xs={12} justify="center" alignItems="center">
            {
                categorias.map(categoria =>  <RadioButtonsGroup value={selectedPaperwork} formLabel={categoria.title} radioGroup={categoria.subTipo} name={categoria.title} onChange={handleChangeRadioButtons} />)            
            }
        </Grid>     
    )
}


export default ListPaperworksDigep