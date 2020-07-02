import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import RadioButtonsGroup from '../../Molecules/RadioButtonsGroup/RadioButtonsGroup'
import PaperTextField from '../../Molecules/PaperTextField/PaperTextField'


const ListPaperworksDisepa = (props) => {
    const {  addPaperworks, setDisabledNextBtn } = props
    const [ selectedPaperwork, setSelectedPaperwork ] = useState("presentationNotes")
    const [ reasons, setReasons ] = useState()
    const [ visibleReasons, setVisibleReasons ] = useState(false)
    
    var categorias = [
        {
            title: "Trámites administrativos",
            subTipo: [{value: "presentationNotes", label: "Presentación de notas"}, {value: "record", label: "Expedientes"}, {value: "others", label: "Otros"}]
        },
        {
            title: "Area de capacitación",
            subTipo: [{value: "schoolLife", label: "Convivencia escolar"}, {value: "childrenRights", label: "Por los derechos de la niñez y la adolescencia"}, {value: "sexEducation", label: "Educación sexual integral"}, {value: "adictions", label: "Educación y prevención de las adicciones y el consumo indebido de drogas"}, {value: "centerAttentionTrajectories", label: "Centro de atención a la trayectorias escolares"}, {value: "provincialMediationCenter", label: "Centro provincial de mediación escolar"}]
        },
        {
            title: "Demandas/Solicitudes de intervención",
            subTipo: [{value: "demands", label: "Demandas/Solicitudes de intervención"}]
        }
    ]

    useEffect(() => {
      if(selectedPaperwork !== "demands"){
        setVisibleReasons(false) 
        setReasons(undefined)
        setDisabledNextBtn(false)
        addGlobalStatePaperworks()
      }else{
        setVisibleReasons(true) 
        reasons ? setDisabledNextBtn(false) : setDisabledNextBtn(true)
        setTimeout(() => {
            document.getElementById("reasonsText").focus()
        }, 300)  
        addGlobalStatePaperworks()
      }
    }, [selectedPaperwork, reasons]);

    const handleChangeRadioButtons = (event) => {
        setSelectedPaperwork(event.target.value);
    }

    const handleChangeText = (event) => {
        setReasons(event.target.value)
    }

    const addGlobalStatePaperworks = () => {
        if(selectedPaperwork === "presentationNotes"){
            addPaperworks({key: "data", value: {"categoria": "Trámites administrativo", "tema": "Presentación de notas"}})
        }
        if(selectedPaperwork === "record"){
            addPaperworks({key: "data", value: {"categoria": "Trámites administrativo", "tema": "Expedientes"}})
        }
        if(selectedPaperwork === "others"){
            addPaperworks({key: "data", value: {"categoria": "Trámites administrativo", "tema": "Otros"}})
        }
        if(selectedPaperwork === "schoolLife"){
            addPaperworks({key: "data", value: {"categoria": "Area de capacitación", "tema": "Convivencia escolar"}})
        }
        if(selectedPaperwork === "childrenRights"){
            addPaperworks({key: "data", value: {"categoria": "Area de capacitación", "tema": "Por los derechos de la niñez y la adolescencia"}})
        }
        if(selectedPaperwork === "sexEducation"){
            addPaperworks({key: "data", value: {"categoria": "Area de capacitación", "tema": "Educación sexual integral"}})
        }
        if(selectedPaperwork === "adictions"){
            addPaperworks({key: "data", value: {"categoria": "Area de capacitación", "tema": "Educación y prevención de las adicciones y el consumo indebido de drogas"}})
        }
        if(selectedPaperwork === "centerAttentionTrajectories"){
            addPaperworks({key: "data", value: {"categoria": "Area de capacitación", "tema": "Centro de atención a la trayectorias escolares"}})
        }
        if(selectedPaperwork === "provincialMediationCenter"){
            addPaperworks({key: "data", value: {"categoria": "Area de capacitación", "tema": "Centro provincial de mediación escolar"}})
        }
        if(selectedPaperwork === "demands"){
            addPaperworks({key: "data", value: {"categoria": "Demandas/Solicitudes de intervención", "motivo": reasons}})
        }
    }

    return (
        <Grid xl={12} lg={12} md={12} sm={12} xs={12} justify="center" alignItems="center">
            {
                categorias.map(categoria =>  <RadioButtonsGroup value={selectedPaperwork} formLabel={categoria.title} radioGroup={categoria.subTipo} name={categoria.title} onChange={handleChangeRadioButtons} />)            
            }
            {
                visibleReasons && <PaperTextField idTextField="reasonsText" placeholder="Breve reseña incluyendo nombre de establecimiento educativo, turno, grado/año en caso de ser necesario" onChange={handleChangeText} >Motivo</PaperTextField >
            }
        </Grid>     
    )
}


export default ListPaperworksDisepa