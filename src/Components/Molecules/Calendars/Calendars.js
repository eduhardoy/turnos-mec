import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment)


const Calendars = (props) => {
    const { eventsLists, onChangeRange, onSelectEvent, eventStyle  } = props

    return (
      <Calendar
        onRangeChange={onChangeRange}
        views={["month"]}
        localizer={localizer}
        events={eventsLists}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
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