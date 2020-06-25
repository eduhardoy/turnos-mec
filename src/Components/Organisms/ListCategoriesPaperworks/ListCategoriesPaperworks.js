import React from 'react'
import Grid from '@material-ui/core/Grid'
import RadioButtonsGroup from '../../Molecules/RadioButtonsGroup/RadioButtonsGroup'
import Text from '../../Atoms/Text/Text'

const ListCategoriesPaperworks = () => {
    
    var categorias = [
        {
            title: "Trámites administrativos",
            subTipo: [{value: "lolo", label: "leo"}, {value: "lolo", label: "leo"}, {value: "lolo", label: "leo"}]
        },
        {
            title: "Area de capacitación",
            subTipo: [{value: "lolo", label: "leo"}, {value: "lolo", label: "leo"}]
        },
        {
            title: "Demandas/Solicitudes de intervención",
            subTipo: [{value: "lolo", label: "leo"}]
        }
    ]

    return (
        <Grid xl={12} lg={12} md={12} sm={12} xs={12} justify="center" alignItems="center">
            {
                categorias.map(categoria =>  <RadioButtonsGroup formLabel={categoria.title} radioGroup={categoria.subTipo} value={categoria.title} name={categoria.title} />)            
            }
        </Grid>     
    )
}


export default ListCategoriesPaperworks