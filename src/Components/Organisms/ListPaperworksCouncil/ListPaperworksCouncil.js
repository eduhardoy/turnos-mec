import React, { useState, useEffect } from 'react'
import RadioButtonsGroup from '../../Molecules/RadioButtonsGroup/RadioButtonsGroup'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

const StyledGrid = styled(Grid)`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`


const ListPaperworksCouncil = (props) => {
    const {  addPaperworks } = props
    const [ selectedPaperwork, setSelectedPaperwork ] = useState("levelDirections")
    
    var categorias = [
        {
            title: "Presidencia",
            subTipo: [{value: "audiences", label: "Audiencias"}]
        },
        {
            title: "Secretaria General",
            subTipo: [{value: "notifications", label: "Notificaciones"},{value: "legals", label: "Normas Legales"}, {value: "takeLook", label: "Tomar Vista"}]
        },
        {
            title: "Sala de Supervisores",
            subTipo: [{value: "studentCertificate", label: "Certificados de Finalización de Estudios"}]
        },
        {
            title: "Liquidaciones",
            subTipo: [{value: "assetUpdate", label: "Actualización de Haberes"},{value: "paycheck", label: "Recibos de Sueldos"}]
        },
        {
            title: "Personal Docente",
            subTipo: [{value: "serviceCertifications", label: "Certificaciones de Servicios"},{value: "seniority", label: "Reconocimiento de Antigüedad"}, {value: "wagesSchooling", label: "Salarios y Escolaridad"}]
        },
        {
            title: "Personal Administrativo",
            subTipo: [{value: "admServiceCertifications", label: "Certificaciones de Servicios"},{value: "retirementProcedures", label: "Tramites Jubilatorios"}, {value: "admWagesSchooling", label: "Salarios y Escolaridad"}, {value: "extraordinaryLicenses", label: "Consulta de Licencias Extraordinarias"}, {value: "files", label: "Expedientes"}]
        },
    ]

    useEffect(() => {
        addGlobalStatePaperworks()     
    }, [selectedPaperwork]);
    
    const handleChangeRadioButtons = (event) => {
        setSelectedPaperwork(event.target.value)
    }

    const addGlobalStatePaperworks = () => {
        if(selectedPaperwork === "audiences"){
            addPaperworks({key: "data", value: {"categoria": "Presidencia", "tema": "Audiencias"}})
        }
        if(selectedPaperwork === "notifications"){
            addPaperworks({key: "data", value: {"categoria": "Secretaria General", "tema": "Notificaciones"}})
        }
        if(selectedPaperwork === "legals"){
            addPaperworks({key: "data", value: {"categoria": "Secretaria General", "tema": "Normas Legales"}})
        }
        if(selectedPaperwork === "takeLook"){
            addPaperworks({key: "data", value: {"categoria": "Secretaria General", "tema": "Tomar Vista"}})
        }
        if(selectedPaperwork === "studentCertificate"){
            addPaperworks({key: "data", value: {"categoria": "Sala de Supervisores", "tema": "Certificados de Finalización de Estudios"}})
        }
        if(selectedPaperwork === "assetUpdate"){
            addPaperworks({key: "data", value: {"categoria": "Liquidaciones", "tema": "Actualización de Haberes"}})
        }
        if(selectedPaperwork === "paycheck"){
            addPaperworks({key: "data", value: {"categoria": "Liquidacioness", "tema": "Recibos de Sueldos"}})
        }
        if(selectedPaperwork === "serviceCertifications"){
            addPaperworks({key: "data", value: {"categoria": "Personal Docente", "tema": "Certificaciones de Servicios"}})
        }
        if(selectedPaperwork === "seniority"){
            addPaperworks({key: "data", value: {"categoria": "Personal Docente", "tema": "Reconocimiento de Antigüedad"}})
        }
        if(selectedPaperwork === "wagesSchooling"){
            addPaperworks({key: "data", value: {"categoria": "Personal Docente", "tema": "Salarios y Escolaridad"}})
        }
        if(selectedPaperwork === "admServiceCertifications"){
            addPaperworks({key: "data", value: {"categoria": "Personal Administrativo", "tema": "Certificaciones de Servicios"}})
        }
        if(selectedPaperwork === "retirementProcedures"){
            addPaperworks({key: "data", value: {"categoria": "Personal Administrativo", "tema": "Tramites Jubilatorios"}})
        }
        if(selectedPaperwork === "admWagesSchooling"){
            addPaperworks({key: "data", value: {"categoria": "Personal Administrativo", "tema": "Salarios y Escolaridad"}})
        }
        if(selectedPaperwork === "extraordinaryLicenses"){
            addPaperworks({key: "data", value: {"categoria": "Personal Administrativo", "tema": "Consulta de Licencias Extraordinarias"}})
        }
        if(selectedPaperwork === "files"){
            addPaperworks({key: "data", value: {"categoria": "Personal Administrativo", "tema": "Expedientes"}})
        }
    }

    return (
        <StyledGrid xl={12} lg={12} md={12} sm={12} xs={12} justify="center" alignItems="center">
            {
                categorias.map(categoria =>  <RadioButtonsGroup value={selectedPaperwork} formLabel={categoria.title} radioGroup={categoria.subTipo} name={categoria.title} onChange={handleChangeRadioButtons} />)            
            }
        </StyledGrid>     
    )
}


export default ListPaperworksCouncil