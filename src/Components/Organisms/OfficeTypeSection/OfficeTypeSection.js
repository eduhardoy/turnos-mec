import React from 'react'
import Grid from '@material-ui/core/Grid'
import Cards from '../../Molecules/Cards/Cards'
import TitleBackground from '../../../titlesBackground.jpg'
import RRHHBackground from '../../../rrhhBackground.jpg'

const OfficeTypeSection = (props) => {
    //const { listOfficeTypeCard } = props

    const listOffices = [
      {
        title: "RRHH", subtitle: "Entrar", backgroundImage: RRHHBackground, path: "/subOffice", children: "asdasdasdas"
      },
      {
        title: "DiSEPA", subtitle: "Entrar", backgroundImage: RRHHBackground, path: "/categoriespaperworks", children: "asdasdasdas"
      },
      {
        title: "Títulos", subtitle: "Entrar", backgroundImage: TitleBackground, path: "turnostitulos.mec.gob.ar/", children: "asdasdasdas"
      }
    ]

    return (
        <React.Fragment>
          {
            listOffices.map((office) => (<Grid item xl={4} lg={4} md={4} sm={12} xs={12} justify="center" alignItems="center" style={styles.gridCard}>
                                          <Cards title={office.title} subtitle={office.subtitle} backgroundImage={office.backgroundImage} path={office.path} >{office.children}</Cards>
                                         </Grid>))
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