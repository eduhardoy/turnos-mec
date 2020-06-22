import React from 'react'
import Grid from '@material-ui/core/Grid'

const SubOfficeTypeSections = (props) => {
    const { listSubOfficeType } = props

    return (
        <React.Fragment>
          {
            listSubOfficeType.map((subOfficeType) => (<Grid xl={12} lg={12} md={12} sm={12} xs={12} justify="center" alignItems="center" /*style={styles.gridCard}*/>{subOfficeType}</Grid>))
          }
        </React.Fragment> 
    )
}

export default SubOfficeTypeSections