import React from 'react'
import Grid from '@material-ui/core/Grid'

const OfficeTypeSection = (props) => {
    const { listOfficeTypeCard } = props

    return (
        <React.Fragment>
          {
            listOfficeTypeCard.map((officeTypeCard) => (<Grid item xl={5} lg={5} md={8} sm={12} xs={12} justify="center" alignItems="center" style={styles.gridCard}>{officeTypeCard}</Grid>))
          }
        </React.Fragment> 
    )
}


const styles = {
  gridCard: {
      margin: "auto"
  }
}


export default OfficeTypeSection