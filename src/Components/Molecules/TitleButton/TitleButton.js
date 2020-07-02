import React from 'react';
import Text from '../../Atoms/Text/Text'
import Button from '../../Atoms/Button/Button'
import { Link } from "react-router-dom"

const TitleButton = (props) => {
    const { titleText, titleButton, variantTitle, variantButton, colorButton, onClickButton, path  } = props
  
    return (
        <React.Fragment>
            <Text variant={variantTitle}>
                {titleText}
            </Text>
            <Button color={colorButton} variant={variantButton} >
                <Link exact to={path} onClick={onClickButton}>            
                    {titleButton}
                </Link>
            </Button>
        </React.Fragment>
    )
}


export default TitleButton