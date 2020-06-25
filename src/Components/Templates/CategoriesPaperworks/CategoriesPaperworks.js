import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'


const CategoriesPaperworks = (props) => {
    const { header, stepIndicator, listCategoriesPaperworks } = props

    return (
        <div style={styles.root}>
            <Grid>
                {header}
            </Grid>         
            <Container >              
                <CssBaseline />         
                <Grid style={styles.gridStepIndicator}>
                    {stepIndicator}
                </Grid>
                <Grid container>
                    {listCategoriesPaperworks}
                </Grid>                   
            </Container>
        </div>   
    )
}


const styles = {
    root: {
        flexGrow: 1,
    },
    gridStepIndicator: {
        width: "100%",
        height: "auto",
    }
}


export default CategoriesPaperworks