import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment)


const Calendars = (props) => {
    const { eventLists, onRangeChange, onSelectEvent, eventStyle  } = props
    return (
      <Calendar
        onRangeChange={onRangeChange}
        views={["month"]}
        localizer={localizer}
        events={eventLists}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, backgroundColor: "white" }}
        messages={{
          next: "sig",
          previous: "ant",
          today: "Hoy",
          month: "Mes",
        }}
        onSelectEvent={onSelectEvent}
        eventPropGetter={eventStyle}
      />
    );
}


export default Calendars