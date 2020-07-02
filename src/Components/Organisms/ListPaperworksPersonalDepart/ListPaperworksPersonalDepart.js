import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import PaperTextField from '../../Molecules/PaperTextField/PaperTextField'


const ListPaperworksPersonalDepart = (props) => {
    const {  addPaperworks, setDisabledNextBtn } = props
    const [ recordNumber, setRecordNumber ] = useState('')

    useEffect(() => {
        if(recordNumber !== ''){
            setDisabledNextBtn(false)
            addPaperworks({key: "data", value: {"numeroExpediente": recordNumber}})
        }else{
            setDisabledNextBtn(true)
        }         
    }, [recordNumber]);

    const handleChangeText = (event) => {
        setRecordNumber(event.target.value)
    }

    return (
        <Grid xl={12} lg={12} md={12} sm={12} xs={12} justify="center" alignItems="center">
            <PaperTextField idTextField="recordNumber" placeholder="111-1234/1234" onChange={handleChangeText} >Número de expediente</PaperTextField >
        </Grid>     
    )
}


export default ListPaperworksPersonalDepart