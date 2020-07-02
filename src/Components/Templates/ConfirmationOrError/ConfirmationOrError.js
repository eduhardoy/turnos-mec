import React from 'react'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';


const ConfirmationOrError = (props) => {
    const { header, loading, titleButton } = props

    return (
        <div style={styles.root}>
            <CssBaseline />
            {header}
            <Container>
                <Grid xl={12} lg={12} md={12} sm={12} xs={12} justify="center" alignItems="center" style={styles.gridtitleButton}>
                    {loading}
                    {titleButton}
                </Grid>          
            </Container>
        </div>
    )
}


const styles = {
    root: {
        flexGrow: 1
    },
    gridtitleButton: {
        margin: "auto"
    }
}


export default ConfirmationOrError