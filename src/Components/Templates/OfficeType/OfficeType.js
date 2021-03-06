import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'


const OfficeType = (props) => {
    const { header, stepIndicator, OfficeTypeSections } = props

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
                <Grid style={styles.gridOfficeTypeSections} spacing={3}  container>
                    {OfficeTypeSections}
                </Grid>                   
            </Container>
        </div>   
    )
}


const styles = {
    root: {
        flexGrow: 1,
    },
    gridOfficeTypeSections: {
        marginTop: "1%"
    }
}


export default OfficeType