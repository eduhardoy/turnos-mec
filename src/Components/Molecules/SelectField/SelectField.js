import React from 'react'
import Label from '../../Atoms/Label/Label'
import Select from '../../Atoms/Select/Select'


const SelectField = (props) => {
    const { childrenLabel, idLabel, nameSelect, idSelect, valueSelect, handleChangeSelect, stylesSelect, arrayMenuItemSelect } = props

    return (
        <React.Fragment>
            <Label id={idLabel}>
                {childrenLabel}
            </Label>
            <Select
            name={nameSelect}
            id={idSelect}
            value={valueSelect}
            handleChange={handleChangeSelect}
            styles={stylesSelect}
            >
                { arrayMenuItemSelect }          
            </Select>
        </React.Fragment>
    );
}

export default SelectField