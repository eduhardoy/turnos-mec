import React from 'react'
import Paper from '@material-ui/core/Paper';


const Papers = props => {
    const { style, children } = props

    return <Paper style={style} >{children}</Paper>
}


export default Papers