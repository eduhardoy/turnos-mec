import React from 'react'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

const ModalityClarificationsClient = (props) => {
    const { header, stepIndicator, formModalityShift } = props

    return (
        <div style={styles.root}>
            <CssBaseline />
            {header}
            <Container>
                <Grid xl={12} lg={12} md={12} sm={12} xs={12} justify="center" alignItems="center" style={styles.gridStepper}>
                    {stepIndicator}
                </Grid>
                <Grid xl={12} lg={12} md={12} sm={12} xs={12} justify="center" alignItems="center" style={styles.gridFormModalityShift}>
                    {formModalityShift}
                </Grid>           
            </Container>
        </div>
    )
}


const styles = {
    root: {
        flexGrow: 1
    },
    gridStepper: {
        margin: "auto"
    },
    gridFormModalityShift: {
        backgroundColor: "white",
        margin: "auto"
    }
}


export default ModalityClarificationsClient