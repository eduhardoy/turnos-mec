import React, {useState, useEffect} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import TransitionsModal from '../Components/TransitionsModal/TransitionsModal'
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import PanelExpansion from '../Components/PanelExpansion/PanelExpansion'
import Button from "@material-ui/core/Button";
import { getTurnos } from '../Services/turnos'


const localizer = momentLocalizer(moment)

export default function Admin() {
    const [visibleModal, setVisibleModal] = useState(false)
    const [selectedHora, setSelectedHora] = useState(0)
    const [eventosCalendar, setEventosCalendar] = useState([])
    const [selectedFecha, setSelectedFecha ] = useState(new Date())
    const [ detalleTurno, setDetalleturno ] = useState([])
    const classes = useStyles();

    const events = [
      {
        title: "8",
        start: new Date("05/06/2020"),
        end: new Date("05/06/2020"),
        usuarios: [
          {
            nombre: "Leooooonel",
            schleicher: "Schleicher",
            telefono: "24234234",
            email: "asdasdasdasd@sfsf",
            hora: "12:00",
            modalidadAtencion: "por telefono"
          },
          {
            nombre: "Gonnnnnnza",
            schleicher: "iniguez",
            telefono: "24234234",
            email: "asdasdasdasd@sfsf",
            hora: "09:00",
            modalidadAtencion: "presencial"
          },
          
        ]    
      },
      {
        title: "5",
        start: new Date("05/07/2020"),
        end: new Date("05/07/2020"),
        usuarios: [
          {
            nombre: "Leonel",
            schleicher: "Schleicher",
            telefono: "24234234",
            email: "asdasdasdasd@sfsf",
            hora: "11:00",
            modalidadAtencion: "presencial"
          },
          {
            nombre: "Gonza",
            schleicher: "iniguez",
            telefono: "24234234",
            email: "asdasdasdasd@sfsf",
            hora: "10:00",
            modalidadAtencion: "por telefono"
          },
          
        ]    
      }
    ]
 
    useEffect(() => {
 
    }, [])

    const selectEvent = (event) => {
      var turnosFecha = events.filter(evt => evt.start == event.start)
      setDetalleturno(turnosFecha[0].usuarios)
      setVisibleModal(true)
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        var style = {
          textAlign: "center",
          justifyContent: 'center',
          alignItems: 'center',
            backgroundColor: "lightblue",
            borderRadius: '0px',
            opacity: 0.8,
            display: 'flex',
            border: "black",
            height: 50,
            borderRadius: 30,
            width: "100%",
            color: "black",
            fontSize: 12,
            fontWeight: "bold",
        };
        return {
            style: style
        };
    }

    const cerrarModal = () => {
      setVisibleModal(false)
    }

    return (
      <Grid container style={{width: "90%", margin: "auto", display: "block"}}>
        {console.log("SI", eventosCalendar)}
        <div style={{heigth:400, margin: "auto"}}>
            <Typography style={{fontSize: 26}}>Turnos reservados en </Typography>
          </div>
        <Grid
          className={classes.grid}
          item
          xs={12}
          sm={12}
          lg={8}
          xl={8}
          md={10}
        >
          <TransitionsModal isVisible={visibleModal}>
            <Button
              style={{marginLeft: "40%"}}
              variant="contained"
              color="primary"
              onClick={cerrarModal}
            >
              Cerrar
            </Button>
            {
              detalleTurno.length !== 0 ? detalleTurno.map((turno) => <PanelExpansion title={turno.nombre + " - " + turno.hora + " - " + turno.modalidadAtencion} content={"Email: " + turno.email + " - Teléfono: " + turno.telefono} panelForm={false} >
                <p> <span style={{fontWeight: "bold"}}>Email:</span> {turno.email}</p>
                <p> <span style={{fontWeight: "bold"}}>Teléfono:</span> {turno.telefono}</p>
              </PanelExpansion> )
              : null 
            }
          </TransitionsModal>
          <Calendar
            views={['month']}
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, marginTop: "10%", backgroundColor: "white" }}
            messages={{
              next: "sig",
              previous: "ant",
              today: "Hoy",
              month: "Mes",
            }}
            eventPropGetter={eventStyleGetter}
            onSelectEvent={selectEvent}
          />
          <div
            style={{
              width: 100,
              height: 50,
              borderRadius: 30,
              backgroundColor: "lightblue",
              margin: "auto",
            }}
          >
            <p>
              Turnos reservados
            </p>
          </div>
        </Grid>
      </Grid>
    );
}




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    grid:{
        margin: "auto"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
  }));