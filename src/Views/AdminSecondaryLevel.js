import React, {useState, useEffect} from 'react'
import Calendars from '../Components/Molecules/Calendars/Calendars'
import TransitionsModal from '../Components/TransitionsModal/TransitionsModal'
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import PanelExpansion from '../Components/PanelExpansion/PanelExpansion'
import Button from "@material-ui/core/Button";
import clientApolo from '../Utils/ApoloClient'
import { getTurnosAdmin, GetShiftAdmin } from '../Services/turnos'


export default function AdminSecondaryLevel() {
    const [visibleModal, setVisibleModal] = useState(false)
    const [eventosCalendar, setEventosCalendar] = useState([])
    const [ turnosReservados, setTurnosReservados ] = useState([])
    const [ detalleTurno, setDetalleturno ] = useState([])
    const [ mesEnCalendario, setMesEnCalendario ] = useState((parseInt(new Date().getMonth()) + 1).toString())
    const classes = useStyles();
 
    useEffect(() => {
      setTimeout(() => {
        clientApolo.query({
          query: GetShiftAdmin, 
          variables: {mes: (new Date().getMonth() + 1).toString()}
        })
        .then((resultShift) => {
          resultShift.turnos.forEach(turno => {
            turno["title"] = turno.usuarios.length.toString()  
            turno["start"] = new Date(turno.fecha.split("-")[1] + "/" + turno.fecha.split("-")[0] + "/" + turno.fecha.split("-")[2])
            turno["end"] = new Date(turno.fecha.split("-")[1] + "/" + turno.fecha.split("-")[0] + "/" + turno.fecha.split("-")[2])
          });
          setTurnosReservados(resultShift.turnos)
        })
        .catch((error) => {
          console.log("ERROR", error)
        })
      }, 3000);
       
    }, [])

    const selectEvent = (event) => {
      var turnosFecha = turnosReservados.filter(turno => turno.start === event.start)
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

    const changeRangeCalendar = (event) => {
     if (event.start.getDate() !== 1) {
      setMesEnCalendario((event.start.getMonth() + 2).toString())
      clientApolo.query({
        query: GetShiftAdmin, 
        variables: {mes: (new Date().getMonth() + 2).toString()}
      })
      .then((resultShift) => {
        console.log("SHIFT ADMIN", resultShift)
        resultShift.turnos.forEach(turno => {
          turno["title"] = turno.usuarios.length.toString()  
          turno["start"] = new Date(turno.fecha.split("-")[1] + "/" + turno.fecha.split("-")[0] + "/" + turno.fecha.split("-")[2])
          turno["end"] = new Date(turno.fecha.split("-")[1] + "/" + turno.fecha.split("-")[0] + "/" + turno.fecha.split("-")[2])
        });
        setTurnosReservados(resultShift.turnos)
      })
      .catch((error) => {
        console.log("ERROR", error)
      })
     }else{
      setMesEnCalendario((event.start.getMonth() + 1).toString())
       clientApolo.query({
        query: GetShiftAdmin, 
        variables: {mes: (new Date().getMonth() + 1).toString()}
      })
      .then((resultShift) => {
        console.log("SHIFT ADMIN", resultShift)
        resultShift.turnos.forEach(turno => {
          turno["title"] = turno.usuarios.length.toString()  
        });
        setTurnosReservados(resultShift.turnos)
      })
      .catch((error) => {
        console.log("ERROR", error)
      })
     }
    }

    return (
      <Grid
        container
        style={{ width: "90%", margin: "auto", display: "block" }}
      >
        {console.log("SI", eventosCalendar)}
        <div style={{ heigth: 400, margin: "auto" }}>
          <Typography style={{ fontSize: 26 }}>Turnos reservados</Typography>
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
              style={{ marginLeft: "40%", backgroundColor: "lightgray" }}
              variant="contained"
              onClick={cerrarModal}
            >
              Cerrar
            </Button>
            {detalleTurno.length !== 0
              ? detalleTurno.map((turno) => (
                  <PanelExpansion
                    title={
                      turno.nombre +
                      " - " +
                      turno.hora +
                      " - " +
                      turno.modalidad
                    }
                    panelForm={false}
                  >
                    <Typography style={{ fontSize: 16 }}>
                      DNI: {turno.dni}{" "}
                    </Typography>
                    <Typography style={{ fontSize: 16 }}>
                      Email: {turno.email}{" "}
                    </Typography>
                    <Typography style={{ fontSize: 16 }}>
                      Teléfono: {turno.telefono}{" "}
                    </Typography>
                    <Typography style={{ fontSize: 16 }}>
                      Aclaraciones: {turno.aclaraciones}{" "}
                    </Typography>
                  </PanelExpansion>
                ))
              : null}
          </TransitionsModal>
          <Calendars
            onSelectEvent={selectEvent}
            onRangeChange={changeRangeCalendar}
            eventLists={turnosReservados}
            eventStyle={eventStyleGetter}
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
            <p>Turnos reservados</p>
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