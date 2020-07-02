import React from 'react'
import Grid from '@material-ui/core/Grid'
import Cards from '../../Molecules/Cards/Cards'
import TitleBackground from '../../../titlesBackground.jpg'
import RRHHBackground from '../../../rrhhBackground.jpg'
import RrhhCertServices from '../../../Assets/Images/RrhhCertServices.jpg'
import RrhhPersonalDepart from '../../../Assets/Images/RrhhPersonalDepart.jpg'
import SecondaryLevel from '../../../Assets/Images/secondaryLevel.jpg'
import Disepa from '../../../Assets/Images/Disepa.jpg'
import Digep from '../../../Assets/Images/Digep.jpg'

const OfficeTypeSection = (props) => {
    const { addDirections } = props

    const listOffices = [
      {
        title: "RRHH - Oficina Central", enum: "OficinaCentral", subtitle: "Entrar", backgroundImage: RRHHBackground, path: "/identification", children: "asdasdasdas"
      },
      {
        title: "RRHH - Cert. de servicios", enum: "CertificacionesDeServicio", subtitle: "Entrar", backgroundImage: RrhhCertServices, path: "/identification", children: "asdasdasdas"
      },
      {
        title: "Nivel Secundario", enum: "NivelSecundario", subtitle: "Entrar", backgroundImage: SecondaryLevel, path: "/paperworkssecondary", children: "asdasdasdas"
      },
      {
        title: "DiSEPA", enum: "DiSEPA", subtitle: "Entrar", backgroundImage: Disepa, path: "/paperworksdisepa", children: "asdasdasdas"
      },
      {
        title: "DiGEP", enum: "Digep", subtitle: "Entrar", backgroundImage: Digep, path: "/paperworksdigep", children: "asdasdasdas"
      },
      {
        title: "RRHH - Dpto. de personal", enum: "DepartamentoDePersonalCentral", subtitle: "Entrar", backgroundImage: RrhhPersonalDepart, path: "/recorddeptopersonal", children: "asdasdasdas"
      }
      
    ]

    const pressCard = (direction) => {
      addDirections({key: "direccion", value: direction})
    }

    const pressCardTitles = () => {
      window.location.href = "https://turnostitulos.mec.gob.ar/"
    }

    return (
        <React.Fragment>
          {
            listOffices.map((office) => (
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12} justify="center" alignItems="center" style={styles.gridCard}>
              <Cards onClick={() => pressCard(office.enum)} title={office.title} subtitle={office.subtitle} backgroundImage={office.backgroundImage} path={office.path} >{office.children}</Cards>
            </Grid>
          ))}
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12} justify="center" alignItems="center" style={styles.gridCard}>
              <Cards onClick={() => pressCardTitles("Títulos")} title="Títulos" subtitle="Entrar" backgroundImage={TitleBackground} >dasdasdasd</Cards>
          </Grid>
        </React.Fragment> 
    )
}


const styles = {
  gridCard: {
      margin: "auto"
  }
}


export default OfficeTypeSection