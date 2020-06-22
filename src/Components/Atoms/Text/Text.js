import React from 'react'
import Typography from '@material-ui/core/Typography'


const Text = (props) => {
    const { variant, children } = props

    return <Typography variant={variant}>{children}</Typography>
}


export default Text