import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'


const PaperworksDigep = (props) => {
    const { header, title, stepIndicator, listPaperworksDigep } = props

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
                <Grid style={styles.gridTitle} >
                    {title}
                </Grid>
                <Grid container>
                    {listPaperworksDigep}
                </Grid>                   
            </Container>
        </div>   
    )
}


const styles = {
    root: {
        flexGrow: 1,
    },
    gridTitle: {
        marginTop: "2%"
    },
    gridStepIndicator: {
        width: "100%",
        height: "auto",
    }
}


export default PaperworksDigep