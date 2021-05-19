import React from 'react'
import Grid from '@material-ui/core/Grid'
import Cards from '../../Molecules/Cards/Cards'
import Text from '../../Atoms/Text/Text'
import TitleBackground from '../../../Assets/Images/titulos.png'
import RRHHBackground from '../../../Assets/Images/oficinacentral.png'
import RrhhCertServices from '../../../Assets/Images/certdeser.png'
import RrhhPersonalDepart from '../../../Assets/Images/dptopersonal.png'
import SecondaryLevel from '../../../Assets/Images/secundario.png'
import ConsejoEdu from '../../../Assets/Images/consejo.png'
import Disepa from '../../../Assets/Images/disepa.png'
import Digep from '../../../Assets/Images/disepa.png'

const OfficeTypeSection = (props) => {
    const { addDirections } = props

    const listOffices = [
      {
        direccion: "DIRECCIÓN DE RECURSOS HUMANOS",
        direcciones: 
          [
            {
              title: "Oficina Central", enum: "OficinaCentral", subtitle: "ENTRAR", backgroundImage: RRHHBackground, path: "/identification", children: "asdasdasdas"
            },
            {
              title: "Certifación de Servicios", enum: "CertificacionesDeServicios", subtitle: "ENTRAR", backgroundImage: RrhhCertServices, path: "/identification", children: "asdasdasdas"
            },
            {
              title: "Departamento de Personal", enum: "DepartamentoDePersonalCentral", subtitle: "ENTRAR", backgroundImage: RrhhPersonalDepart, path: "/recorddeptopersonal", children: "asdasdasdas"
            }]
      },

      {
        direccion: "DIRECCIÓN DE NIVEL SECUNDARIO",
        direcciones:
        [
          {
            title: "Dirección de Nivel Secundario", enum: "NivelSecundario", subtitle: "ENTRAR", backgroundImage: SecondaryLevel, path: "/paperworkssecondary", children: "asdasdasdas" 
          }
        ]
      },
      {
        direccion: "DIRECCIÓN DE SERVICIOS EDUCATIVOS DE PREVENCIÓN Y APOYO",
        direcciones:
        [
          {
            title: "DiSEPA", enum: "DiSEPA", subtitle: "ENTRAR", backgroundImage: Disepa, path: "/paperworksdisepa", children: "asdasdasdas"
          }
        ]
         
      },
      {
        direccion: "CONSEJO GENERAL DE EDUCACIÓN",
        direcciones:
        [
          {
            title: "Consejo General de Educación", enum: "ConsejoGeneralEducacion", subtitle: "ENTRAR", backgroundImage: ConsejoEdu, path: "/paperworkscouncil", children: "asdasdasdas" 
          }
        ]
      },
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
          <Grid style={{marginTop: "2%"}}  item xl={12} lg={12} md={12} sm={12} xs={12}><Text variant="h5">DIRECCIÓN DE TITULOS</Text> </Grid>  
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12} justify="center" alignItems="center" style={styles.gridCard}>
              <Cards onClick={() => pressCardTitles("Títulos")} title="Dirección de Títulos" subtitle="ENTRAR" backgroundImage={TitleBackground} >dasdasdasd</Cards>
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