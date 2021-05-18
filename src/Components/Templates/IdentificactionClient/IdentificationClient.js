import React from 'react'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';


const IdentificactionClient = (props) => {
    const { header, title, stepIndicator, clientForm } = props

    return (
        <div style={styles.root}>
            <CssBaseline />
            {header}
            <Container>
                <Grid xl={12} lg={12} md={12} sm={12} xs={12} justify="center" alignItems="center" style={styles.gridStepper}>
                    {stepIndicator}
                </Grid>
                <Grid style={styles.gridTitle} >
                    {title}
                </Grid>
                <Grid xl={4} lg={4} md={6} sm={12} xs={12} justify="center" alignItems="center" style={styles.gridForm} >
                    {clientForm}
                </Grid>           
            </Container>
        </div>
    )
}


const styles = {
    root: {
        flexGrow: 1,
    },
    gridStepper: {
        margin: "auto",
    },
    gridTitle: {
        padding: 20,
        marginTop: "2%"
    },
    gridForm: {
        borderRadius: 20,
        padding: 40,
        backgroundColor: "white",
        margin: "auto"
    }
}


export default IdentificactionClient