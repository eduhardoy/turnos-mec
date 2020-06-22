import React from 'react'
import TextField from "@material-ui/core/TextField";


const Inputs = (props) => {
    const { value, name, label, handleChange } = props

    return (
        <TextField
          name={name}
          label={label}
          onChange={handleChange}
          value={value}
        />
    )
}


export default Inputs