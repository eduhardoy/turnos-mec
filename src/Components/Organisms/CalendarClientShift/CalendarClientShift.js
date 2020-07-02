import React, { useState, useEffect } from 'react'
import Calendars from '../../Molecules/Calendars/Calendars'
import ModalHoursAvailables from '../../Organisms/ModalHoursAvailables/ModalHoursAvailables'
import clientApolo from '../../../Utils/ApoloClient'
import { GetShift } from '../../../Services/turnos'

const CalendarClientShift = (props) => {
    const { addDate, addHour, shift, selectedFechaHoraTurno } = props
    const [visibleModal, setVisibleModal] = useState(false)
    const [selectedHora, setSelectedHora] = useState(0)
    const [eventosCalendar, setEventosCalendar] = useState([])
    const [selectedFecha, setSelectedFecha ] = useState(new Date())
    const [ turnosApi, setTurnosApi ] = useState()
    const [horasDisponibles, setHorasDisponibles] = useState(["09:00", "09:30", "10:00", "10:30", "11:00"])
    const horasInicialesDisponibles = ["09:00", "09:30", "10:00", "10:30", "11:00"]
    var myEventsList = []
    
    useEffect(() => {
      clientApolo.query({
        query: GetShift, 
        variables: {mes: (new Date().getMonth() + 1).toString(), direccion: shift.direccion}
      })
      .then((resultShift) => {
        colorearTurnosDisponibles(new Date(), resultShift.data.ListarTurnosReservadosCliente)
        setTurnosApi(resultShift.data.ListarTurnosReservadosCliente)
      })
      .catch((error) => {
        console.log("ERROR", error)
      })
    }, [])

    const hideShowModal = (value) => {
        setVisibleModal(value)
    }


    const colorearTurnosDisponibles = (fechaCompleta, turnosReservados) => {
      console.log("FECHA TRUNOS", turnosReservados)
      myEventsList = []
      var fechaHoy = fechaCompleta.getDate()
      var ultimaFechaDelMes = new Date(fechaCompleta.getFullYear(), fechaCompleta.getMonth(), 0).getDate() // obtener la ultmima fecha del mes
    //  if(turnosReservados.length === 0){
        for (let index = 2; index <= (ultimaFechaDelMes - fechaHoy); index++) {
          
          var fechasRestantesMes = new Date(fechaCompleta.getTime() + (24*60*60*1000) * index) // obtener las fechas restantes del mes una por una
          if(fechasRestantesMes.getDay() !== 0 && fechasRestantesMes.getDay() !== 6){ // comprobar que no sea sabado ni domingo
            var event ={}
            if(turnosReservados !== undefined){
              
              if(!diasOcupados(fechasRestantesMes.getDate(), turnosReservados)){
                if(shift.hora !== undefined){
                  if(selectedFecha.toLocaleDateString() === fechasRestantesMes.toLocaleDateString()){                   
                     event = { // crear evento
                      allDay: true,
                      end: fechasRestantesMes,
                      start: fechasRestantesMes,
                      title: shift.hora,
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
            }else{
              event = { // crear evento
                allDay: true,
                end: fechasRestantesMes,
                start: fechasRestantesMes,
                title: '',
              }
              myEventsList.push(event) 
            }
          }
        }
      setEventosCalendar(myEventsList)
    }

    const diasOcupados = (fecha, turnosReservados) => {  
      var flag = false
        turnosReservados.forEach(turno => {
          if(fecha === new Date(turno.fecha.split("-")[1] + "/" + turno.fecha.split("-")[0] + "/" + turno.fecha.split("-")[2]).getDate()){
            if(turno.usuarios.length === 5){
              flag = true
            }else{
              flag = false
            }
          }
        });
        return flag
    }


    const eventStyleGetter = (event, start, end, isSelected) => {
      var style = {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
        borderRadius: "0px",
        opacity: 0.8,
        display: "flex",
        border: "black",
        height: 50,
        borderRadius: 30,
        width: "100%",
        color: "black",
        fontSize: 12,
        fontWeight: "bold",
      };
      return {
        style: style,
      };
    };

    
    const handleChangeHour = (events) => {
      addHour({key: "hora", value: events.target.value})
      eventosCalendar.forEach((event) => {
        if (event.start.getDate() === selectedFecha.getDate()) {
          event["title"] = events.target.value;
        } else {
          event["title"] = "";
        }
      });
      setSelectedHora(events.target.value);
      setVisibleModal(false);
    };

    const onSelectEvent = (value) => {
      addDate({key: "fecha", value: value.start.toLocaleDateString().replace(/[/]/g,"-")})
      setSelectedFecha(value.start);
      var arrayAux = [];
      if(turnosApi.length !== 0) {
        var turnoSegunFechaSeleccionada = turnosApi.filter(
          (turno) =>
            parseInt(turno.fecha.split("-")[0]) === value.start.getDate()
        );
        if (turnoSegunFechaSeleccionada.length !== 0) {
          horasInicialesDisponibles.forEach((hora) => {
            var flag = false;
            turnoSegunFechaSeleccionada[0].usuarios.forEach((usuario) => {
              if (hora === usuario.hora) {
                flag = true;
              }
            })
            !flag ? arrayAux.push(hora) : console.log("");
          });
          setHorasDisponibles(arrayAux);
        } else {
          setHorasDisponibles(horasInicialesDisponibles);
        }
      }else {
        setHorasDisponibles(horasInicialesDisponibles);
      }
      setVisibleModal(true)
    }

   
    const handleRangeChange = (value) => {
      var date 

      if(value.start.getDate() !== 1){// si el calendario en pantalla no inicia con la fecha 1 entonces se le suma un mes
        date = new Date(value.start.getFullYear(), value.start.getMonth() + 1, "1")
      }else{
        date = new Date(value.start.getFullYear(), value.start.getMonth(), "1")
      }
      if(new Date().getMonth() === date.getMonth()){// si el mes que esta en patnalla es el mes actual entonces se pasa la fecha completa actual
        clientApolo.query({
          query: GetShift, 
          variables: {mes: (new Date().getMonth() + 1).toString(), direccion: shift.direccion}
        })
        .then((resultShift) => {
          colorearTurnosDisponibles(new Date(), resultShift.data.ListarTurnosReservadosCliente)
          setTurnosApi(resultShift.data.ListarTurnosReservadosCliente)
        })
        .catch((error) => {
          console.log("ERROR", error)
        })
      }else{//enviarle la fecha completa siempre con el primer dia del mes
        clientApolo.query({
          query: GetShift, 
          variables: {mes: (new Date().getMonth() + 1).toString(), direccion: shift.direccion}
        })
        .then((resultShift) => {
          colorearTurnosDisponibles(date, resultShift.data.ListarTurnosReservadosCliente)
          setTurnosApi(resultShift.data.ListarTurnosReservadosCliente)
        })
        .catch((error) => {
          console.log("ERROR", error)
        })
      }
    }

    return (
        <React.Fragment>
            <ModalHoursAvailables isVisible={visibleModal} hoursAvailables={horasDisponibles} handleChangeHour={handleChangeHour} selectedTime={selectedHora} />
            <Calendars
                onSelectEvent={onSelectEvent}
                onRangeChange={handleRangeChange}
                eventLists={eventosCalendar}
                eventStyle={eventStyleGetter}
            />
        </React.Fragment>
        
    )
}


export default CalendarClientShift