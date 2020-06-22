import React from 'react'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import CalendarClientShift from '../Components/Organisms/CalendarClientShift/CalendarClientShift'
import DateTimeClientShift from '../Components/Templates/DateTimeClientShift/DateTimeClientShift'

const DateTimeClientShiftView = () => {

    return (
        <DateTimeClientShift header={<Header />} stepIndicator={<StepIndicator />} calendarClientShift={<CalendarClientShift />} />
    )
}


export default DateTimeClientShiftView