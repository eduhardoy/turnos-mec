import React from 'react'
import Grid from '@material-ui/core/Grid'
import Cards from '../../Molecules/Cards/Cards'
import Text from '../../Atoms/Text/Text'
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
        direccion: "Dirección de Recursos Humanos",
        direcciones: 
          [
            {
              title: "Oficina Central", enum: "OficinaCentral", subtitle: "Entrar", backgroundImage: RRHHBackground, path: "/identification", children: "asdasdasdas"
            },
            {
              title: "Cert. de servicios", enum: "CertificacionesDeServicio", subtitle: "Entrar", backgroundImage: RrhhCertServices, path: "/identification", children: "asdasdasdas"
            },
            {
              title: "Dpto. de personal", enum: "DepartamentoDePersonalCentral", subtitle: "Entrar", backgroundImage: RrhhPersonalDepart, path: "/recorddeptopersonal", children: "asdasdasdas"
            }]
      },

      {
        direccion: "Dirección de Nivel Secundario",
        direcciones:
        [
          {
            title: "Nivel Secundario", enum: "NivelSecundario", subtitle: "Entrar", backgroundImage: SecondaryLevel, path: "/paperworkssecondary", children: "asdasdasdas" 
          }
        ]
      },
      {
        direccion: "Dirección de Servicios Educativos de Prevención y Apoyo",
        direcciones:
        [
          {
            title: "DiSEPA", enum: "DiSEPA", subtitle: "Entrar", backgroundImage: Disepa, path: "/paperworksdisepa", children: "asdasdasdas"
          }
        ]
         
      }
     /* {
        title: "DiGEP", enum: "Digep", subtitle: "Entrar", backgroundImage: Digep, path: "/paperworksdigep", children: "asdasdasdas"
      } */
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
              <React.Fragment>
                <Grid style={{marginTop: "2%"}} item xl={12} lg={12} md={12} sm={12} xs={12}><Text variant="h5">{office.direccion}</Text> </Grid>                 
                {  office.direcciones.map((direccion) => (
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12} justify="center" alignItems="center" style={styles.gridCard}>
                      <Cards onClick={() => pressCard(direccion.enum)} title={direccion.title} subtitle={direccion.subtitle} backgroundImage={direccion.backgroundImage} path={direccion.path} >{direccion.children}</Cards>
                    </Grid>
                  ))   
                }
              </React.Fragment>                             
            ))
          }
          <Grid style={{marginTop: "2%"}}  item xl={12} lg={12} md={12} sm={12} xs={12}><Text variant="h5">Dirección de Títulos</Text> </Grid>  
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