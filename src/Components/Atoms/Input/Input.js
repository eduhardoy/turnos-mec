import React from 'react'
import TextField from "@material-ui/core/TextField";


const Inputs = (props) => {
    const { value, name, label, onChange } = props

    return (
        <TextField
          name={name}
          label={label}
          onChange={onChange}
          value={value}
        />
    )
}


export default Inputs