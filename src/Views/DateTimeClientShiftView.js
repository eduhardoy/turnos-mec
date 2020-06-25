import React from 'react'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import CalendarClientShift from '../Components/Organisms/CalendarClientShift/CalendarClientShift'
import DateTimeClientShift from '../Components/Templates/DateTimeClientShift/DateTimeClientShift'
import { connect } from 'react-redux'
import { addShift } from '../Actions/Shift'


const DateTimeClientShiftView = (props) => {
    const { addDate, addHour, shift } = props

    return (
        <DateTimeClientShift header={<Header />} stepIndicator={<StepIndicator stepActive={4} nextPath="/modalityshift" disabledNextBtn={shift.hora ? false : true } />} calendarClientShift={<CalendarClientShift addDate={addDate} addHour={addHour} shift={shift} selectedFechaHoraTurno={[]} />} />
    )
}


const mapStateToProps = state => {
    return {
        shift: state.shift
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addDate: date => dispatch(addShift(date)),
        addHour: hour => dispatch(addShift(hour))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DateTimeClientShiftView)
