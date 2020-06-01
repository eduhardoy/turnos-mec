import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import TransitionsModal from '../TransitionsModal/TransitionsModal'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux'
import { changeFechaHoraTurno } from '../../Actions/SelectedFechaHoraTurno'
import { makeStyles } from '@material-ui/core/styles';

import './SeleccionTurno.css'

const localizer = momentLocalizer(moment)

const SeleccionTurno = (props) => {
    const [visibleModal, setVisibleModal] = useState(false)
    const [selectedHora, setSelectedHora] = useState(0)
    const [eventosCalendar, setEventosCalendar] = useState([])
    const [selectedFecha, setSelectedFecha ] = useState(new Date())
    const classes = useStyles();
    const [horasDisponibles, setHorasDisponibles] = useState(["08:00", "09:00", "10:00", "11:00", "12:00"])
    var myEventsList = []
    const { changeFechaHoraTurno, selectedFechaHoraTurno } = props

    useEffect(() => {
      console.log("ENTRA")
      colorearTurnosDisponibles(new Date())
    }, [])

    const colorearTurnosDisponibles = (fechaCompleta) => {
      myEventsList = []
      var turnos = []
      if(turnos.length === 0){
        var fechaHoy = fechaCompleta.getDate()
        var ultimaFechaDelMes = new Date(fechaCompleta.getFullYear(), fechaCompleta.getMonth(), 0).getDate() // obtener la ultmima fecha del mes
        for (let index = 0; index <= (ultimaFechaDelMes - fechaHoy); index++) {
          var fechasRestantesMes = new Date(fechaCompleta.getTime() + (24*60*60*1000) * index)
          if(fechasRestantesMes.getDay() !== 0 && fechasRestantesMes.getDay() !== 6){ // comprobar que no sea sabado ni domingo
            var event ={}
            if(selectedFechaHoraTurno.length !== 0){
              console.log("FECHAHOTA",selectedFechaHoraTurno.fecha.toLocaleDateString(), fechasRestantesMes.toLocaleDateString()) 
              console.log("FECHAHOTA",selectedFechaHoraTurno.fecha.toLocaleDateString() === fechasRestantesMes.toLocaleDateString()) 
              if(selectedFechaHoraTurno.fecha.toLocaleDateString() === fechasRestantesMes.toLocaleDateString()){                   
                 event = { // crear evento
                  allDay: true,
                  end: fechasRestantesMes,
                  start: fechasRestantesMes,
                  title: selectedFechaHoraTurno.hora,
                }
              }else{
                 event = { // crear evento
                  allDay: true,
                  end: fechasRestantesMes,
                  start: fechasRestantesMes,
                  title: '',
                }
              }
              
            }else{
               event = { // crear evento
                allDay: true,
                end: fechasRestantesMes,
                start: fechasRestantesMes,
                title: '',
              }
            }       
            myEventsList.push(event) // agregar al arreglo de eventos para que pinte el calendario de verde esa fecha
          }
        }
      }
      setEventosCalendar(myEventsList)
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        var style = {
          textAlign: "center",
          justifyContent: 'center',
          alignItems: 'center',
            backgroundColor: "lightgreen",
            borderRadius: '0px',
            opacity: 0.8,
            display: 'flex',
            border: "black",
            height: 50,
            borderRadius: 30,
            width: "100%",
            color: "black",
            fontSize: 12,
            fontWeight: "bold"
        };
        return {
            style: style
        };
    }

    const handelChangeHora = (events) => {
      changeFechaHoraTurno({fecha: selectedFecha, hora: events.target.value})
        eventosCalendar.forEach(event => {
          if(event.start.getDate() === selectedFecha.getDate()){
            event['title'] = events.target.value
          }else{
            event['title'] = ''
          }
        })
        setSelectedHora(events.target.value)
        setVisibleModal(false)
    }

    const onSelected = (value) => {
        setVisibleModal(true)
        setSelectedFecha(value.start)
    }

    const myFunction = (value) => {
      var mesEnPantalla
      if(value.start.getDate() !== 1){// si el calendario en pantalla no inicia con la fecha 1 entonces se le suma un mes
        mesEnPantalla = value.start.getMonth() + 1 
      }else{
        mesEnPantalla = value.start.getMonth()// sino queda el mes actual
      }
      if(new Date().getMonth() === mesEnPantalla){// si el mes que esta en patnalla es el mes actual entonces se pasa la fecha completa actual
        colorearTurnosDisponibles(new Date())
      }else{//enviarle la fecha completa siempre con el primer dia del mes
        colorearTurnosDisponibles(new Date(value.start.getFullYear(), mesEnPantalla, 1))
      }
    }

    return (
      <Grid container>
        {console.log("SI", eventosCalendar)}
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
            <h3>A que hora?</h3>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Horario</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedHora}
                onChange={handelChangeHora}
              >
                {
                  horasDisponibles.map(hora => <MenuItem value={hora}>{hora}</MenuItem>)
                }
              </Select>
            </FormControl>
          </TransitionsModal>
          <Calendar
            onRangeChange={myFunction}
            views={['month']}
            localizer={localizer}
            events={eventosCalendar}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            messages={{
              next: "sig",
              previous: "ant",
              today: "Hoy",
              month: "Mes",
            }}
            onSelectEvent={onSelected}
            eventPropGetter={eventStyleGetter}
          />
          <div
            style={{
              width: 100,
              height: 50,
              borderRadius: 30,
              backgroundColor: "lightgreen",
              margin: "auto",
            }}
          >
            Turnos disponibles
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
        margin: "auto",

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


  
const mapStateToProps = state => {
  return {
      selectedFechaHoraTurno: state.selectedFechaHoraTurno
  };
};

const mapDispatchToProps = dispatch => {
  return {
      changeFechaHoraTurno: fechaHora => dispatch(changeFechaHoraTurno(fechaHora))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeleccionTurno);

