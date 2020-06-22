import React from 'react'
import Button from "@material-ui/core/Button";


const Buttons = (props) => {
    const { children, variant, color, onClickBtn, disabled, styles } = props

    return (
        <Button style={styles} color={color} variant={variant} onClick={onClickBtn} disabled={disabled}>{children}</Button>
    )
} 


export default Buttons 