import React from 'react'
import InputLabel from "@material-ui/core/InputLabel";


const Labels = (props) => {
    const { id, children } = props

    return (
        <InputLabel id={id}>
            { children }
        </InputLabel>
    )
}


export default Labels