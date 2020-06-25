import React from 'react'
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Selects = (props) => {
    const { name, value, id, children, handleChange, styles } = props

    return (
        <Select
            style={styles}
            name={name}
            labelId="demo-simple-select-helper-label"
            id={id}
            value={value}
            onChange={handleChange}
        >
            {children.map(item => <MenuItem value={item}>{item}</MenuItem>)}
        </Select>
    )
}


export default Selects