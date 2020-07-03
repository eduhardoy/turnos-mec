import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import RadioButtonsGroup from '../../Molecules/RadioButtonsGroup/RadioButtonsGroup'
import PaperTextField from '../../Molecules/PaperTextField/PaperTextField'


const ListPaperworksSecondaryLevel = (props) => {
    const {  addPaperworks, setDisabledNextBtn } = props
    const [ selectedPaperwork, setSelectedPaperwork ] = useState("levelDirections")
    const [ reasons, setReasons ] = useState()
    
    var categorias = [
        {
            title: "Dirección de nivel",
            subTipo: [{value: "levelDirections", label: "Dirección de nivel"}]
        },
        {
            title: "Supervisión Técnica",
            subTipo: [{value: "technicalSupervision", label: "Supervisión Técnica"}]
        },
        {
            title: "Despacho",
            subTipo: [{value: "dispatch", label: "Despacho"}]
        },
        {
            title: "Departamento Personal",
            subTipo: [{value: "claims", label: "Reclamos/Tipo"},{value: "licenses", label: "Licencias/Artículo"}, {value: "resignation", label: "Renuncia"}, {value: "requestFile", label: "Solicitud de legajo / número"}, {value: "others", label: "Otros"}]
        }
    ]

    useEffect(() => {
        document.getElementById("reasonsText").focus() 
        if(reasons){
            setDisabledNextBtn(false)
            addGlobalStatePaperworks()
        }         
    }, [selectedPaperwork, reasons]);

    const handleChangeRadioButtons = (event) => {
        setSelectedPaperwork(event.target.value)
    }

    const handleChangeText = (event) => {
        setReasons(event.target.value)
    }

    const addGlobalStatePaperworks = () => {
        if(selectedPaperwork === "levelDirections"){
            addPaperworks({key: "data", value: {"categoria": "Dirección de nivel", "motivo": reasons}})
        }
        if(selectedPaperwork === "technicalSupervision"){
            addPaperworks({key: "data", value: {"categoria": "Supervisión Técnica", "motivo": reasons}})
        }
        if(selectedPaperwork === "dispatch"){
            addPaperworks({key: "data", value: {"categoria": "Despacho", "motivo": reasons}})
        }
        if(selectedPaperwork === "claims"){
            addPaperworks({key: "data", value: {"categoria": "Departamento Personal", "tema": "Reclamos", "motivo": reasons}})
        }
        if(selectedPaperwork === "licenses"){
            addPaperworks({key: "data", value: {"categoria": "Departamento Personal", "tema": "Licencias/Artículo", "motivo": reasons}})
        }
        if(selectedPaperwork === "resignation"){
            addPaperworks({key: "data", value: {"categoria": "Departamento Personal", "tema": "Renuncia", "motivo": reasons}})
        }
        if(selectedPaperwork === "requestFile"){
            addPaperworks({key: "data", value: {"categoria": "Departamento Personal", "tema": "Solicitud de legajo / número", "motivo": reasons}})
        }
        if(selectedPaperwork === "others"){
            addPaperworks({key: "data", value: {"categoria": "Departamento Personal", "tema": "Otros", "motivo": reasons}})
        }
    }

    return (
        <Grid xl={12} lg={12} md={12} sm={12} xs={12} justify="center" alignItems="center">
            {
                categorias.map(categoria =>  <RadioButtonsGroup value={selectedPaperwork} formLabel={categoria.title} radioGroup={categoria.subTipo} name={categoria.title} onChange={handleChangeRadioButtons} />)            
            }
            <PaperTextField idTextField="reasonsText" placeholder="Detallá el tema o motivo del turno" onChange={handleChangeText} >Tema o Motivo</PaperTextField >
        </Grid>     
    )
}


export default ListPaperworksSecondaryLevel